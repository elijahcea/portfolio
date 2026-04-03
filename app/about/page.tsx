import {
  IconBone,
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";

export default function About() {
  const age = () => {
    const today = new Date();
    const birthDate = new Date("2001-10-28");

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    return age;
  };

  const images = [
    {
      src: "/hiro.webp",
      alt: "Close up shot of Hiro",
    },
    {
      src: "/buster.webp",
      alt: "Picture of Buster in front of a lake",
    },
  ];

  return (
    <main className="px-10 pt-8">
      <section className="pb-6">
        <h1 className="text-3xl font-semibold pb-8">About Me</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8 md:gap-x-8">
          <div>
            <img
              src="/portrait-2.webp"
              alt="Picture of Elijah"
              height={300}
              width={250}
              loading="lazy"
              className="rounded-md w-full max-h-200 md:h-full object-cover"
            />
          </div>
          <div className="col-span-2 leading-7 font-medium">
            <p className="pb-6">
              Hey! I&apos;m Elijah, an Economics grad turned techie. I&apos;m a{" "}
              {age()} year-old aspiring software developer based out of South
              Florida. I thoroughly enjoy the challenge of learning new things
              and meeting great people along the way.{" "}
            </p>
            <p className="pb-6">
              My journey in tech began in Cloud IT, and I fell in love with
              trying to uncover what made the internet tick. I learnt how to
              manage and deploy application infrastructure and software on cloud
              providers such as AWS, and I am taking the next step of building
              those very apps hands-on. Join me on this journey of creating
              impactful, innovative software!
            </p>

            <p>
              Outside of tech, I enjoy playing soccer, working out, traveling to
              new places, collecting Pokémon and spending time with family and
              friends. And most importantly, I&apos;m a proud Arsenal F.C. fan!
              Reach out to me if you&apos;d like to connect!
            </p>

            <div className="flex flex-wrap gap-4 font-medium pt-6">
              <a
                href="https://github.com/elijahcea"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <IconBrandGithub />
                <span>GitHub</span>
              </a>

              <span className="opacity-50">|</span>

              <a
                href="https://www.linkedin.com/in/elijahcea/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <IconBrandLinkedin />
                <span>LinkedIn</span>
              </a>

              <span className="opacity-50">|</span>

              <div className="flex items-center gap-2">
                <IconMail />
                <span>elijah.cea01@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold pb-4 flex items-center justify-center gap-2">
          <IconBone color="lab(64.4125 63.0291 19.2068)" />
          Hiro and Buster!
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {images.map((i, idx) => (
            <img
              key={idx}
              src={i.src}
              alt={i.alt}
              height={150}
              width={200}
              loading="lazy"
              className="rounded-md w-full max-h-60 md:h-full object-cover"
            />
          ))}
        </div>
      </section>
    </main>
  );
}
