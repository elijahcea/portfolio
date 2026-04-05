import ExperienceTabs from "@/components/ExperienceTabs";
import ProjectCards from "@/components/ProjectCards";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBriefcase,
  IconHeart,
  IconMail,
  IconMapPin,
} from "@tabler/icons-react";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-8 pt-8 gap-14">
      <section className="grid grid-cols-1 md:grid-cols-3 w-full gap-6">
        <div className="col-span-2">
          <h1 className="font-bold text-4xl">
            I&apos;m <span className="text-rose-400">Elijah Cea</span>. <br />
            Nice to meet you!
          </h1>
          <div className="flex items-center gap-1 pt-4">
            <IconMapPin />
            <span>Miami, FL</span>
          </div>

          <p className="font-medium text-lg py-4 max-w-prose">
            I&apos;m passionate about{" "}
            <span className="text-rose-400 underline underline-offset-3 decoration-wavy">
              Full-Stack
            </span>
            &#32; web development and inspired by the positive impact writing
            code can have on people&apos;s lives. From{" "}
            <span className="text-rose-400 underline underline-offset-3 decoration-wavy">
              Economics
            </span>
            &#32; grad to &#32;
            <span className="text-rose-400 underline underline-offset-3 decoration-wavy">
              Cloud Engineer
            </span>{" "}
            and{" "}
            <span className="text-rose-400 underline underline-offset-3 decoration-wavy">
              Web Developer
            </span>
            , my curiosity for how things work under the hood continues to drive
            me on my tech journey.{" "}
          </p>
          <div className="flex flex-wrap gap-4 font-medium">
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

        <div>
          <img
            src="/portrait-1.webp"
            alt="Picture of Elijah"
            height={250}
            width={200}
            loading="lazy"
            className="rounded-md mx-auto"
          />
        </div>
      </section>

      <section className="flex flex-col gap-6 items-center w-full">
        <h2 className="text-2xl font-semibold inline-flex items-center gap-2">
          <IconHeart
            size={28}
            color="lab(64.4125 63.0291 19.2068)"
            stroke="3"
          />
          Featured Projects
        </h2>
        <ProjectCards />
      </section>

      <section className="flex flex-col gap-6 items-center w-full">
        <h2 className="text-2xl font-semibold inline-flex items-center gap-2">
          <IconBriefcase
            size={28}
            color="lab(64.4125 63.0291 19.2068)"
            stroke="2"
          />
          Experience
        </h2>
        <ExperienceTabs />
      </section>
    </main>
  );
}
