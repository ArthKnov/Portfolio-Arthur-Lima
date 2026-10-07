import { education } from '../data/portfolio.ts'
import { Info, Section } from './ui.tsx'

export default function Education() {
  return (
    <Section
      id="formacao"
      index="01"
      title="Onde estudei"
      intro="Da ETEC à FATEC: formação técnica concluída e tecnólogo em andamento."
      tone="band"
    >
      <ol className="space-y-0">
        {education.map((e, i) => (
          <li
            key={e.degree}
            className="grid gap-6 border-b border-white/10 py-8 last:border-b-0 md:grid-cols-[7rem_1fr] md:gap-10"
          >
            <div className="font-display text-sm font-bold uppercase tracking-wider text-brand-cyan">
              {i === 0 ? 'Atual' : 'Anterior'}
            </div>
            <div>
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="font-display text-2xl font-bold text-white">{e.degree}</h3>
                <span
                  className={`text-sm font-semibold ${
                    i === 0 ? 'text-emerald-300' : 'text-slate-400'
                  }`}
                >
                  {e.status}
                </span>
              </div>
              <p className="mt-1 text-lg text-brand-cyan">{e.institution}</p>
              <p className="mt-3 max-w-2xl text-slate-400">{e.description}</p>
              <dl className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <Info label="Escola" value={e.institution} />
                <Info label="Cidade" value={e.location} />
                <Info label="Começo" value={e.start} />
                <Info label="Término" value={e.end} />
              </dl>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
