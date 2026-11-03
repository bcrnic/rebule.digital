import { useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "motion/react";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocale, useUi } from "@/lib/i18n";
import {
  INQUIRY_FORM_NAME,
  createInquirySchema,
  projectTypesByLocale,
  submitInquiry,
  type Inquiry,
} from "@/lib/inquiry";

function Field({
  label,
  error,
  className = "",
  children,
}: {
  label: string;
  error?: string | undefined;
  className?: string;
  children: ReactNode;
}) {
  return (
    <label className={`grid gap-2 text-sm ${className}`}>
      {label}
      {children}
      {error && (
        <span role="alert" className="text-xs font-medium text-white">
          {error}
        </span>
      )}
    </label>
  );
}

export function ContactForm() {
  const locale = useLocale();
  const t = useUi().form;
  const projectTypes = projectTypesByLocale[locale];
  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Inquiry>({
    resolver: zodResolver(createInquirySchema(locale)),
    defaultValues: { type: projectTypes[0] },
  });

  const onSubmit = handleSubmit(async (values) => {
    setStatus("idle");
    try {
      await submitInquiry(values, locale);
      setStatus("sent");
      reset();
    } catch {
      setStatus("error");
    }
  });

  return (
    <form
      name={INQUIRY_FORM_NAME}
      method="POST"
      data-netlify="true"
      netlify-honeypot="website"
      onSubmit={onSubmit}
      noValidate
      className="grid gap-5 rounded-[1.75rem] border border-white/25 bg-white/10 p-7 backdrop-blur-2xl sm:grid-cols-2"
    >
      <input type="hidden" name="form-name" value={INQUIRY_FORM_NAME} />
      {/* Jezik stranice sa koje je upit poslat; prikazuje se u mejlu sa upitom. */}
      <input type="hidden" name="language" value={locale} />
      <Field label={t.name} error={errors.name?.message}>
        <input
          {...register("name")}
          autoComplete="name"
          aria-invalid={!!errors.name}
          className="form-control"
          placeholder={t.namePlaceholder}
        />
      </Field>
      <Field label={t.email} error={errors.email?.message}>
        <input
          {...register("email")}
          type="email"
          autoComplete="email"
          aria-invalid={!!errors.email}
          className="form-control"
          placeholder={t.emailPlaceholder}
        />
      </Field>
      <Field label={t.phone} className="sm:col-span-2">
        <input
          {...register("phone")}
          type="tel"
          autoComplete="tel"
          className="form-control"
          placeholder={t.phonePlaceholder}
        />
      </Field>
      <Field label={t.type} className="sm:col-span-2">
        <select {...register("type")} className="form-control">
          {projectTypes.map((type) => (
            <option key={type}>{type}</option>
          ))}
        </select>
      </Field>
      <Field label={t.message} error={errors.message?.message} className="sm:col-span-2">
        <textarea
          {...register("message")}
          rows={4}
          aria-invalid={!!errors.message}
          className="form-control resize-none"
          placeholder={t.messagePlaceholder}
        />
      </Field>
      <input
        {...register("website")}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
      />
      <p className="text-xs leading-relaxed opacity-75 sm:col-span-2">
        {t.privacyBefore}{" "}
        <Link
          to={locale === "en" ? "/en/privacy" : "/privatnost"}
          className="underline hover:opacity-80"
        >
          {t.privacyLink}
        </Link>
        .
      </p>
      <div className="flex flex-col items-start gap-4 sm:col-span-2 sm:flex-row sm:items-center">
        <Button
          variant="secondary"
          size="lg"
          type="submit"
          disabled={isSubmitting}
          className="rounded-2xl"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="size-4 animate-spin" aria-hidden="true" /> {t.submitting}
            </>
          ) : (
            <>
              {t.submit} <ArrowRight className="size-4" aria-hidden="true" />
            </>
          )}
        </Button>
        {status === "sent" && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            role="status"
            className="flex items-center gap-2 rounded-xl bg-white/20 px-4 py-2 text-sm font-medium text-white"
          >
            <Check className="size-4" aria-hidden="true" /> {t.sent}
          </motion.div>
        )}
        {status === "error" && (
          <p
            role="alert"
            className="rounded-xl bg-white/20 px-4 py-2 text-sm font-medium text-white"
          >
            {t.error}
          </p>
        )}
      </div>
    </form>
  );
}
