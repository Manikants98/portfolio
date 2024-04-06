"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { projects } from "../mock";

export default function Page() {
  const router = useRouter();
  return (
    <section className="dark:bg-secondary bg-[#f3f4f6] text-gray-900 dark:text-gray-100">
      <div className="py-[5%] px-3 lg:px-[9%] mx-auto space-y-6">
        <div
          onClick={() => router.push("/project/bharaterp-an-erp-web-app")}
          className="block max-w-sm gap-3 mx-auto cursor-pointer rounded sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-black bg-white"
        >
          <Image
            height={600}
            width={800}
            src="/erpv2.webp"
            alt=""
            className="object-cover rounded-tl rounded-tr lg:rounded-tr-none lg:rounded-bl w-full lg:col-span-7 dark:bg-gray-500"
          />
          <div className="p-6 space-y-2 lg:col-span-5">
            <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
              Bhaarat ERP: An ERP Web App
            </h3>
            <span className="text-xs dark:text-gray-400">January 19, 2022</span>
            <p>
              Crafted for my portfolio, this project showcases my expertise in
              Tailwind CSS, ReactJS, and Material UI, featuring seamless
              integration of WhatsApp SDK API. The web app offers an intuitive
              user interface with responsive design, emphasizing a modern and
              user-friendly experience. Leveraging the power of Tailwind for
              styling, ReactJS for dynamic functionality, and Material UI for
              enhanced components, this project demonstrates my skills in
              front-end development.
            </p>
          </div>
        </div>
        <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              onClick={() => router.push(`/project/${project.slug}`)}
              className="max-w-sm mx-auto group rounded dark:bg-black bg-white"
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
