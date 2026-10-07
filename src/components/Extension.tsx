import { courses } from '../data/portfolio.ts'
import { Info, Section, Tag } from './ui.tsx'

export default function Extension() {
  return (
    <Section
      id="extensao"
      index="03"
      title="Além da faculdade"
      intro="Cursos e formações que fiz por conta própria para reforçar a stack."
      tone="band"
    >
      <div className="space-y-6">
        {courses.map((c) => (
          <article key={c.name} className="glass rounded-2xl p-6 sm:p-8">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h3 className="font-display text-2xl font-bold text-white">{c.name}</h3>
                <p className="mt-1 text-brand-cyan">{c.institution}</p>
              </div>
              <p className="bg-gradient-brand rounded-lg px-3 py-1 font-display text-sm font-bold text-ink-950">
                {c.hours} horas
              </p>
            </div>
            <p className="mt-4 max-w-2xl text-slate-400">{c.description}</p>
            <dl className="mt-6 grid gap-4 sm:grid-cols-3">
              <Info label="Onde" value={c.institution} />
              <Info label="Formato" value={c.location} />
              <Info label="Duração" value={`${c.hours} horas`} />
              {c.start && (
                <Info label="Período" value={c.end ? `${c.start} – ${c.end}` : c.start} />
              )}
            </dl>
            <div className="mt-5 flex flex-wrap gap-2">
              {c.tags.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
