import { IconBrandGithub, IconWorld } from "@tabler/icons-react";

export default function ProjectCards() {
  const projects = [
    {
      title: "Preuve Ecommerce Storefront",
      imageUrl: "preuve-storefront.webp",
      imageAlt: "preuvenewyork.com products page",
      description:
        "I've always wanted to start a clothing brand, but I'd need a ecommerce website to showcase my creations...so I made one! You can search for products, select their variants, and add them to a persistent cart. This project also exposes NextJS API routes, protected by Auth0, that are consumed by the Preuve Admin site to perform CRUD operations reflected on the storefront. Check it out!",
      technologies: [
        "NextJS",
        "TailwindCSS",
        "TypeScript",
        "PostgreSQL",
        "Prisma",
        "Auth0",
      ],
      url: "https://preuvenewyork.com",
      sourceUrl: "https://github.com/elijahcea/preuve-ecommerce-site",
    },
    {
      title: "Preuve Admin",
      imageUrl: "preuve-admin.webp",
      imageAlt: "admin.preuvenewyork.com product details page",
      description:
        "Now that I had a sleek storefront, I needed a way to manage the products to be put on display. Thus came about the Preuve Admin project! Built using VueJS, users can create and manage products, variants, and collections. Persistent operations require authentication and authorization enforced by Auth0.",
      technologies: [
        "VueJS",
        "TailwindCSS",
        "TypeScript",
        "Auth0",
        "TanStack Query",
      ],
      url: "https://admin.preuvenewyork.com",
      sourceUrl: "https://github.com/elijahcea/preuve-admin-site",
    },
  ];
  return (
    <div className="flex flex-col w-full gap-6">
      {projects.map((p) => (
        <div
          key={p.title}
          className="border border-foreground/10 p-6 rounded-lg shadow overflow-hidden"
        >
          <div>
            <img
              src={p.imageUrl}
              alt={p.imageAlt}
              width={500}
              height={300}
              loading="lazy"
              className="rounded my-4 shadow-md"
            />
          </div>
          <div className="flex flex-col gap-2 pt-2">
            <h2 className="font-semibold text-lg">{p.title}</h2>
            <p className="text-sm opacity-70">{p.description}</p>
            <div className="flex flex-wrap gap-1 pt-6">
              {p.technologies.map((t, idx) => (
                <div
                  key={idx}
                  className="text-xs font-semibold rounded-md bg-foreground/5 px-2 py-1 w-min text-nowrap"
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
                  className="inline-flex items-center gap-1.5 font-semibold rounded bg-foreground text-background px-2 py-1"
                >
                  <IconWorld size={16} />
                  <span className="text-xs">Website</span>
                </a>
              )}

              <a
                href={p.sourceUrl}
                target="_blank"
                className="inline-flex items-center gap-1.5 font-semibold rounded bg-foreground text-background px-2 py-1"
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
