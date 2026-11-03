import { createFileRoute, notFound } from "@tanstack/react-router";
import { ProjectNotFound, ProjectPage } from "@/components/project-page";
import { ui } from "@/content/ui";
import { getAdjacentProjects, getProject, localizeProject } from "@/lib/projects";
import { seo } from "@/lib/seo";
import { SITE_NAME } from "@/lib/site";

export const Route = createFileRoute("/en/project/$id")({
  loader: ({ params }) => {
    const project = getProject(params.id);
    if (!project) throw notFound();
    const { prevProject, nextProject } = getAdjacentProjects(params.id);
    return {
      project: localizeProject(project, "en"),
      prevProject: localizeProject(prevProject, "en"),
      nextProject: localizeProject(nextProject, "en"),
    };
  },
  head: ({ loaderData }) => {
    const project = loaderData?.project;
    if (!project) {
      return {
        meta: [
          { title: `${ui.en.project.notFoundTitle} - ${SITE_NAME}` },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    return seo({
      title: `${ui.en.project.seoTitle(project.niche, project.title)} | ${SITE_NAME}`,
      description: project.seoDescription ?? project.description,
      path: `/en/project/${project.id}`,
      type: "article",
      locale: "en",
      alternates: { sr: `/projekat/${project.id}`, en: `/en/project/${project.id}` },
    });
  },
  component: function EnProjectPage() {
    const data = Route.useLoaderData();
    return <ProjectPage {...data} />;
  },
  notFoundComponent: ProjectNotFound,
});
