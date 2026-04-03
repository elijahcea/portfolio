import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";

export default function ExperienceTabs() {
  const work = [
    {
      company: "CloudHesive",
      roles: [
        {
          title: "Full-Stack Developer Trainee",
          duration: "Jan 2026 - Present",
          highlights: [
            "Built GraphQL resolvers on AWS AppSync and integrated them into a Vue 3 frontend.",
            "Designed elegant and user friendly Vue 3 components with state indicators to enhance UX.",
          ],
        },
        {
          title: "Cloud Engineer II",
          duration: "May 2023 - Present",
          highlights: [
            "Consulted technical leaders across diverse industries on cloud architecture, security, and cost saving.",
            "Led a large-scale multi-region AWS disaster recovery project to enhance data resiliency and environment reliablity whilst meeting required recovery SLAs.",
          ],
        },
        {
          title: "System Administrator",
          duration: "May 2022 - May 2023",
          highlights: [
            "Secured and monitored AWS environments for small to medium sized businesses within a managed services team.",
            "Led a company-wide rollout of Microsoft Intune for centralizing employee endpoint management and security",
            "Assisted with gathering evidence and remediating tasks required for customer's AWS environment compliance with SOC 2 and HIPAA audits.",
          ],
        },
      ],
    },
  ];

  const education = [
    {
      school: "Florida State University",
      degree: "Bachelor of Arts in Economics",
      duration: "August 2020 - August 2023",
      highlights: [
        "Graduated with a Minor in Business",
        "Member of the National Society of Leadership and Success",
      ],
    },
  ];
  return (
    <TabGroup defaultIndex={0} className="w-full">
      <TabList className="flex justify-around gap-1 bg-foreground/5 rounded-lg p-1 border border-foreground/5">
        <Tab className="w-full text-foreground/50 rounded-md px-3 py-1 data-hover:bg-background/30 data-selected:bg-background data-selected:text-foreground data-selected:shadow">
          Work
        </Tab>
        <Tab className="w-full text-foreground/50 rounded-md px-3 py-1 data-hover:bg-background/30 data-selected:bg-background data-selected:text-foreground data-selected:shadow">
          Education
        </Tab>
      </TabList>
      <TabPanels className="mt-2 border border-foreground/10 rounded-lg shadow p-4">
        <TabPanel>
          <ul>
            {work.map((i) => (
              <li key={i.company}>
                <h2 className="font-semibold">{i.company}</h2>
                <div className="flex flex-col gap-2 text-sm">
                  {i.roles.map((r) => (
                    <div key={r.title}>
                      <p className="opacity-70">{r.title}</p>
                      <p className="opacity-70">{r.duration}</p>
                      <ul className="list-disc ml-4 mt-2">
                        {r.highlights.map((h, idx) => (
                          <li key={idx}>
                            <p>{h}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </TabPanel>
        <TabPanel>
          <ul>
            {education.map((i) => (
              <li key={i.school}>
                <h2 className="font-semibold">{i.school}</h2>
                <div className="flex flex-col gap-2 text-sm">
                  <div>
                    <p className="opacity-70">{i.degree}</p>
                    <p className="opacity-70">{i.duration}</p>
                    <ul className="list-disc ml-4 mt-2">
                      {i.highlights.map((h, idx) => (
                        <li key={idx}>
                          <p>{h}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </TabPanel>
      </TabPanels>
    </TabGroup>
  );
}
