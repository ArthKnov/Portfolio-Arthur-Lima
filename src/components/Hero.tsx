import { education, jobs, profile } from '../data/portfolio.ts'
import { GithubIcon, LinkedinIcon, MailIcon } from './Icons.tsx'
import { scrollToSection } from './ScrollManager.tsx'

export default function Hero() {
  const course = education[0]
  const job = jobs[0]

  return (
    <section id="topo" className="mx-auto w-full max-w-6xl px-5 pb-16 pt-28 sm:px-8 sm:pt-32">
      <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,26rem)_1fr] lg:gap-14 xl:grid-cols-[minmax(0,30rem)_1fr]">
        <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none">
          <img
            src={profile.photo}
            alt={`Foto de ${profile.name}`}
            className="h-auto w-full rounded-2xl"
          />
        </div>

        <div>
          <p className="animate-rise text-sm font-semibold uppercase tracking-[0.18em] text-brand-cyan">
            {profile.location}
          </p>

          <h1 className="animate-rise mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]">
            {profile.name}
          </h1>

          <p className="animate-rise text-gradient mt-4 font-display text-xl font-semibold sm:text-2xl">
            {profile.role}
          </p>
          <p className="animate-rise mt-2 text-slate-400">{profile.headline}</p>

          <p className="animate-rise mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
            {profile.summary}
          </p>

          <div className="animate-rise mt-8 flex flex-wrap gap-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="bg-gradient-brand inline-flex items-center gap-2 rounded-xl px-5 py-3 font-semibold text-ink-950 transition hover:opacity-90"
            >
              <GithubIcon /> GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="glass inline-flex items-center gap-2 rounded-xl px-5 py-3 font-semibold text-white transition hover:border-brand-cyan/40"
            >
              <LinkedinIcon /> LinkedIn
            </a>
            <button
              onClick={() => scrollToSection('contato')}
              className="glass inline-flex items-center gap-2 rounded-xl px-5 py-3 font-semibold text-white transition hover:border-brand-cyan/40"
            >
              <MailIcon /> Contato
            </button>
          </div>

          <dl className="animate-rise mt-10 grid gap-4 border-t border-white/10 pt-8 sm:grid-cols-3">
            <div>
              <dt className="text-xs uppercase tracking-[0.14em] text-slate-500">Curso</dt>
              <dd className="mt-1 font-medium text-white">DSM · 6º semestre</dd>
              <dd className="text-sm text-slate-400">
                {course.start.split(' ')[0]} → {course.end.split(' ')[0]}
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.14em] text-slate-500">Trabalho</dt>
              <dd className="mt-1 font-medium text-white">{job.company}</dd>
              <dd className="text-sm text-slate-400">desde {job.start}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.14em] text-slate-500">Stack</dt>
              <dd className="mt-1 font-medium text-white">Full stack</dd>
              <dd className="text-sm text-slate-400">React · .NET · Node</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}
