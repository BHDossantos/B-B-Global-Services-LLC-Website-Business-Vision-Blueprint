import { Section, SectionHeading, cn } from "./ui";
import { Icon } from "./Icon";
import { Reveal } from "./Reveal";
import { techStack, capabilityStats, comparison } from "@/lib/content/capabilities";

export function TechStack() {
  return (
    <Section>
      <SectionHeading
        align="center"
        eyebrow="Technologies We Master"
        title="Enterprise Depth Across Your Whole Stack"
        description="We work hands-on with the platforms and tools that run modern businesses — so you get senior engineering, not learning on your dime."
      />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {techStack.map((group, i) => (
          <Reveal key={group.category} delay={i * 60}>
            <div className="h-full rounded-2xl border border-navy-100 bg-white p-6 shadow-sm">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-accent-600">
                {group.category}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.tools.map((t) => (
                  <li
                    key={t}
                    className="rounded-lg border border-navy-100 bg-navy-50 px-3 py-1.5 text-sm font-medium text-navy-700"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function StatsBand() {
  return (
    <Section dark className="py-14 sm:py-16">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {capabilityStats.map((s, i) => (
          <Reveal key={s.label} delay={i * 80} className="text-center">
            <p className="bg-gradient-to-r from-accent-300 to-electric-400 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl">
              {s.value}
            </p>
            <p className="mt-2 text-sm text-navy-200">{s.label}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Comparison() {
  return (
    <Section muted>
      <SectionHeading
        align="center"
        eyebrow="Where We Fit"
        title="The Sweet Spot Between Basic IT and Big Consulting"
        description="You've outgrown a basic IT provider, but a massive consulting firm is slow and overpriced. Here's how we compare."
      />

      <Reveal className="mt-12 overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-sm">
        {/* Desktop table */}
        <div className="hidden overflow-x-auto md:block">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-navy-100">
                <th className="p-5 text-sm font-semibold text-navy-500">Capability</th>
                {comparison.columns.map((c, i) => (
                  <th
                    key={c}
                    className={cn(
                      "p-5 text-sm font-bold",
                      i === 1 ? "bg-accent-50 text-accent-700" : "text-navy-700"
                    )}
                  >
                    {c}
                    {i === 1 && (
                      <span className="ml-2 rounded-full bg-accent-500 px-2 py-0.5 text-[10px] font-semibold text-white">
                        YOU ARE HERE
                      </span>
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparison.rows.map((row) => (
                <tr key={row.dimension} className="border-b border-navy-50 last:border-0">
                  <td className="p-5 text-sm font-medium text-navy-800">{row.dimension}</td>
                  <td className="p-5 text-sm text-navy-500">{row.basic}</td>
                  <td className="bg-accent-50/60 p-5 text-sm font-semibold text-navy-900">
                    <span className="inline-flex items-center gap-2">
                      <Icon name="check" className="h-4 w-4 flex-none text-accent-600" />
                      {row.bb}
                    </span>
                  </td>
                  <td className="p-5 text-sm text-navy-500">{row.big}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile stacked cards */}
        <div className="divide-y divide-navy-100 md:hidden">
          {comparison.rows.map((row) => (
            <div key={row.dimension} className="p-5">
              <p className="text-sm font-semibold text-navy-900">{row.dimension}</p>
              <div className="mt-3 space-y-2 text-sm">
                <p className="flex items-start gap-2 rounded-lg bg-accent-50 px-3 py-2 font-semibold text-navy-900">
                  <Icon name="check" className="mt-0.5 h-4 w-4 flex-none text-accent-600" />
                  <span>B&amp;B: {row.bb}</span>
                </p>
                <p className="text-navy-500">Basic IT: {row.basic}</p>
                <p className="text-navy-500">Big Consulting: {row.big}</p>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
