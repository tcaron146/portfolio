interface BlurbProps {
  title: string;
  blurb: string;
}

export default function Blurb({ title, blurb }: BlurbProps) {
  return (
    <div className="flex flex-col items-center justify-center w-full px-6">
      <section className="flex flex-col items-center justify-center text-center max-w-4xl">
        <h1 className="text-text font-roboto text-5xl mb-4">{title}</h1>
        <p className="text-text font-roboto text-lg leading-relaxed">
          {blurb}
        </p>
      </section>
    </div>
  );
}