interface BlurbProps {
  title: string;
  blurb: string;
}

export default function Blurb({ title, blurb }: BlurbProps) {
  return (
    <div
      id="id"
      className={
        "pt-16 flex flex-col items-center justify-center w-full h-screen"
      }
    >
      <section
        id="id"
        className="flex flex-col items-center justify-center h-screen text-center"
      >
        <h1 className={"text-text font-roboto text-5xl mb-4"}>{title}</h1>
        <p className="text-text font-roboto text-lg w-2/3 leading-relaxed">
          {blurb}
        </p>
      </section>
    </div>
  );
}
