import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import axios from "axios";

type Project = {
  id: 1;
  name: string;
  description: string;
  url: string;
  img_url: string;
};

const imagesBaseUrl = "http://localhost:4000/uploads/";

async function getProjects(): Promise<Project[]> {
  return axios
    .get("http://localhost:4000/projects")
    .then((response) => {
      const projects: Project[] = response.data;

      for (const p of projects) {
        p.img_url = imagesBaseUrl + p.img_url;
      }

      return projects;
    })
    .catch((error) => {
      console.error("Error fetching projects:", error.message);
      return [];
    });
}

export default async function Projects() {
  const projects = await getProjects();

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const content = (
              <Card className="h-full transition-transform duration-300 ease-in-out transform group-hover:scale-105">
                <CardHeader className="p-0">
                  <div className="relative w-full pt-[56.25%]">
                    <Image
                      src={project.img_url || "/placeholder.svg"}
                      alt={project.name}
                      fill
                      className="object-cover rounded-t-lg"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <CardTitle className="group-hover:text-primary transition-colors duration-300">
                    {project.name}
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardContent>
              </Card>
            );

            return project.url ? (
              <Link
                href={project.url}
                target="_blank"
                key={index}
                className="group"
              >
                {content}
              </Link>
            ) : (
              <div key={index} className="group">
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
