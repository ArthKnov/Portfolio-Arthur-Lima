import { languages, skills } from '../data/portfolio.ts'
import { Section } from './ui.tsx'

export default function LanguagesSkills() {
  return (
    <Section
      id="idiomas"
      index="04"
      title="Línguas e ferramentas"
      intro="O que falo e as tecnologias que uso no trabalho e na faculdade."
      tone="accent"
    >
      <div className="grid gap-4 sm:grid-cols-3">
        {languages.map((l) => (
          <div key={l.name} className="glass rounded-2xl p-5 text-center">
            <p className="font-display text-2xl font-bold text-white">{l.name}</p>
            <p className="mt-2 inline-block rounded-md bg-brand-cyan/15 px-2.5 py-1 text-sm font-semibold text-cyan-300">
              {l.level}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-10 overflow-hidden rounded-2xl border border-white/10">
        {skills.map((s, i) => (
          <div
            key={s.group}
            className={`grid gap-3 px-5 py-4 sm:grid-cols-[10rem_1fr] sm:items-center ${
              i % 2 === 0 ? 'bg-white/[0.03]' : 'bg-transparent'
            }`}
          >
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-brand-cyan">{s.group}</p>
            <p className="leading-relaxed text-slate-200">{s.items.join('  ·  ')}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
