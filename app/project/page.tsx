"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { projects } from "../mock";

export default function Page() {
  const router = useRouter();
  return (
    <section className="dark:bg-secondary bg-[#f3f4f6] text-gray-900 dark:text-gray-100">
      <div className="py-[5%] px-3 lg:px-[9%] mx-auto space-y-6">
        <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              onClick={() => router.push(`/project/${project.slug}`)}
              className="max-w-sm mx-auto group cursor-pointer rounded dark:bg-black bg-white"
            >
              <Image
                height={360}
                width={420}
                alt=""
                role="presentation"
                className="object-cover rounded-t w-full dark:bg-gray-500"
                src={project.imageSrc}
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                  {project.title}
                </h3>
                <span className="text-xs dark:text-gray-400">
                  {project.date}
                </span>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
