import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  image?: StaticImageData;
  link: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  link,
}: ProjectCardProps) {
  return (
    <div className="bg-background border border-accent/40 rounded-xl p-5 shadow-lg hover:shadow-accent/40 transition-shadow flex flex-col gap-3 max-w-md">
      {image && (
        <Image
          src={image}
          alt={title}
          className="rounded-lg w-full h-48 object-cover"
        />
      )}

      <h3 className="text-2xl font-bold text-accent">{title}</h3>

      <p className="text-text/80 text-sm leading-relaxed">
        {description}
      </p>

      <Link
        href={link}
        target="_blank"
        className="text-accent font-semibold hover:underline"
      >
        View Project →
      </Link>
    </div>
  );
}
