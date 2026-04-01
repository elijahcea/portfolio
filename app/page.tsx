import ExperienceTabs from "@/components/ExperienceTabs";
import ProjectCards from "@/components/ProjectCards";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconHeart,
  IconMail,
} from "@tabler/icons-react";

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto flex w-full flex-col items-center px-4 pt-4 gap-6">
      <section className="flex flex-col w-full">
        <h1 className="font-bold text-4xl">
          I&apos;m <span className="text-rose-400">Elijah Cea</span>, <br />
          nice to meet you!
        </h1>
        <p className="font-medium py-6">
          I&apos;m passionate about{" "}
          <span className="text-rose-400 underline decoration-wavy">
            Full-Stack
          </span>
          &#32; development and inspired by the positive impact writing code can
          have on people&apos;s lives. From{" "}
          <span className="text-rose-400 underline decoration-wavy">
            Economics
          </span>
          &#32; grad to &#32;
          <span className="text-rose-400 underline decoration-wavy">
            Cloud Engineer
          </span>
          , my curiosity for how things work under the hood continues to drive
          me on my coding journey.{" "}
        </p>
        <div className="flex flex-wrap gap-4 font-medium">
          <a
            href="https://github.com/elijahcea"
            target="_blank"
            className="inline-flex items-center gap-2"
          >
            <IconBrandGithub />
            <span>GitHub</span>
          </a>

          <span className="opacity-50">|</span>

          <a
            href="https://www.linkedin.com/in/elijahcea/"
            target="_blank"
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
      </section>

      <section className="flex flex-col w-full">
        <ExperienceTabs />
      </section>

      <section className="flex flex-col gap-4 items-center w-full pt-6">
        <h2 className="text-2xl font-semibold inline-flex items-center gap-2">
          <IconHeart size={28} fill="lab(64.4125 63.0291 19.2068)" stroke="0" />
          Featured Projects
        </h2>
        <ProjectCards />
      </section>
    </main>
  );
}
