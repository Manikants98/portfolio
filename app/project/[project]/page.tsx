import { projects } from "@/app/mock";
import Image from "next/image";

export default function Page({ params }: { params: { project: string } }) {
  const project: any = projects.find((i) => i.slug === params.project);
  return (
    <div className="flex flex-col items-center gap-5 text-white p-5">
      <title>{project?.title}</title>
      <meta property="og:title" content={project?.title} />
      <meta property="og:description" content={project?.description} />
      <meta property="og:image" content={project?.imageSrc} />
      <p className="text-center text-xl font-semibold">{project?.title}</p>
      <Image src={project?.imageSrc} height={600} alt="" width={800} />
      <p>{project?.date}</p>
      <p className="text-center">{project?.description}</p>
    </div>
  );
}
