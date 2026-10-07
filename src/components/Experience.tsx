import { jobs } from '../data/portfolio.ts'
import { Section, Tag } from './ui.tsx'

export default function Experience() {
  return (
    <Section
      id="experiencia"
      index="02"
      title="Onde trabalho"
      intro="Na Talk2buy cresci rápido: entrei como estagiário em maio/2025, virei júnior em dezembro e em março/2026 passei a liderar o time de desenvolvimento."
    >
      {jobs.map((job) => (
        <div key={job.company}>
          <div className="flex flex-wrap items-end justify-between gap-3 border-b border-white/20 pb-4">
            <div>
              <h3 className="font-display text-3xl font-extrabold text-white">{job.company}</h3>
              <p className="mt-1 text-slate-400">{job.location}</p>
            </div>
            <p className="font-display text-sm font-bold uppercase tracking-wider text-brand-cyan">
              {job.start} — {job.end ?? 'hoje'}
            </p>
          </div>

          <div className="mt-2 divide-y divide-white/10">
            {job.roles.map((role) => (
              <article key={role.title} className="grid gap-4 py-8 md:grid-cols-[10rem_1fr] md:gap-10">
                <div>
                  <p className="font-display text-sm font-bold text-brand-cyan">
                    {role.start}
                    <span className="text-slate-500"> — </span>
                    {role.end ?? 'hoje'}
                  </p>
                  {role.current && (
                    <p className="mt-2 inline-block rounded-md bg-brand-cyan/15 px-2 py-0.5 text-xs font-bold uppercase tracking-wide text-cyan-300">
                      em curso
                    </p>
                  )}
                </div>
                <div>
                  <h4 className="font-display text-xl font-bold text-white">{role.title}</h4>
                  <p className="mt-3 leading-relaxed text-slate-400">{role.description}</p>
                  {role.highlights && (
                    <ul className="mt-4 space-y-2">
                      {role.highlights.map((h) => (
                        <li key={h} className="flex gap-3 text-slate-300">
                          <span className="bg-gradient-brand mt-2 h-1.5 w-1.5 shrink-0 rounded-full" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-2 flex flex-wrap gap-2 border-t border-white/10 pt-6">
            {job.tags.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
        </div>
      ))}
    </Section>
  )
}
