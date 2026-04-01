import { IconBrandGithub, IconGlobe } from "@tabler/icons-react";

export default function ProjectCards() {
  const projects = [
    {
      title: "Preuve NY Storefront",
      description:
        "I've always wanted to start a clothing brand, but I'd need a ecommerce website to showcase my creations...so I made one! You can search for products, select their variants, and add them to a persistent cart. The project exposes NextJS API routes, protected by Auth0, that are consumed by the Preuve NY Admin site to perform CRUD operations on the store. Check it out!",
      technologies: [
        "NextJS",
        "TailwindCSS",
        "TypeScript",
        "PostgreSQL",
        "Prisma",
        "Auth0",
      ],
      url: "https://preuvenewyork.com",
      sourceUrl: "",
    },
    {
      title: "Preuve NY Admin",
      description:
        "Now that I had a storefront, I needed a way to manage the products to be put on display. Thus came about the Preuve NY Admin project! Built using VueJS, users can create and manage products, variants, and collections. Persistent operations require authentication and authorization enforced by Auth0.",
      technologies: [
        "VueJS",
        "TailwindCSS",
        "TypeScript",
        "Auth0",
        "TanStack Query",
      ],
    },
  ];
  return (
    <div className="flex flex-col w-full gap-6">
      {projects.map((p) => (
        <div
          key={p.title}
          className="border border-foreground/10 p-4 rounded-lg shadow-xl overflow-hidden"
        >
          <img />
          <div className="flex flex-col gap-3">
            <h2 className="font-semibold">{p.title}</h2>
            <p className="text-sm">{p.description}</p>
            <div className="flex flex-wrap gap-1 pt-6">
              {p.technologies.map((t, idx) => (
                <div
                  key={idx}
                  className="text-xs rounded bg-white/60 text-background px-1 w-min text-nowrap"
                >
                  {t}
                </div>
              ))}
            </div>
            <div className="flex gap-1 pt-2">
              {p.url && (
                <a
                  href={p.url}
                  target="_blank"
                  className="inline-flex items-center gap-1 rounded bg-white text-background p-1"
                >
                  <IconGlobe size={16} />
                  <span className="text-xs">Website</span>
                </a>
              )}

              <a
                href={p.sourceUrl}
                target="_blank"
                className="inline-flex items-center gap-1 rounded bg-white text-background p-1"
              >
                <IconBrandGithub size={16} />
                <span className="text-xs">GitHub</span>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
