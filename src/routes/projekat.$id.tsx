import { createFileRoute, notFound } from "@tanstack/react-router";
import { ProjectNotFound, ProjectPage } from "@/components/project-page";
import { ui } from "@/content/ui";
import { getAdjacentProjects, getProject } from "@/lib/projects";
import { seo } from "@/lib/seo";
import { SITE_NAME } from "@/lib/site";

export const Route = createFileRoute("/projekat/$id")({
  loader: ({ params }) => {
    const project = getProject(params.id);
    if (!project) throw notFound();
    return { project, ...getAdjacentProjects(params.id) };
  },
  head: ({ loaderData }) => {
    const project = loaderData?.project;
    if (!project) {
      return {
        meta: [
          { title: `${ui.sr.project.notFoundTitle} - ${SITE_NAME}` },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    return seo({
      title: `${ui.sr.project.seoTitle(project.niche, project.title)} | ${SITE_NAME}`,
      description: project.seoDescription ?? project.description,
      path: `/projekat/${project.id}`,
      type: "article",
      alternates: { sr: `/projekat/${project.id}`, en: `/en/project/${project.id}` },
    });
  },
  component: function SrProjectPage() {
    const data = Route.useLoaderData();
    return <ProjectPage {...data} />;
  },
  notFoundComponent: ProjectNotFound,
});
