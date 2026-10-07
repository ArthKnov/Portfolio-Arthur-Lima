import { useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { projects } from '../data/portfolio.ts'
import { ArrowLeftIcon, ArrowRightIcon, ExternalIcon, GithubIcon } from '../components/Icons.tsx'
import Lightbox from '../components/Lightbox.tsx'
import { Tag } from '../components/ui.tsx'

export default function ProjectPage() {
  const { slug } = useParams()
  const [lightbox, setLightbox] = useState<number | null>(null)

  const index = projects.findIndex((p) => p.slug === slug)
  if (index === -1) return <Navigate to="/" replace />

  const project = projects[index]
  const prev = projects[index - 1]
  const next = projects[index + 1]

  return (
    <article className="mx-auto w-full max-w-6xl px-5 pb-20 pt-28 sm:px-8 sm:pt-32">
      <Link
        to="/"
        state={{ scrollTo: 'projetos' }}
        className="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"
      >
        <ArrowLeftIcon width={16} height={16} /> Voltar aos works
      </Link>

      <header className="mt-6">
        <span className="rounded-full bg-brand-violet/15 px-3 py-1 text-sm font-medium text-violet-200">
          {project.semester} · {project.period}
        </span>
        <h1 className="mt-4 font-display text-4xl font-bold text-white sm:text-5xl">{project.name}</h1>
        <p className="text-gradient mt-2 font-display text-xl font-semibold">{project.subtitle}</p>

        <div className="mt-6 flex flex-wrap gap-3">
          {project.repos.map((r) => (
            <a
              key={r.url}
              href={r.url}
              target="_blank"
              rel="noreferrer"
              className="bg-gradient-brand inline-flex items-center gap-2 rounded-xl px-4 py-2.5 font-semibold text-ink-950 transition hover:opacity-90"
            >
              <GithubIcon width={18} height={18} /> {r.label}
            </a>
          ))}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="glass inline-flex items-center gap-2 rounded-xl px-4 py-2.5 font-semibold text-white transition hover:border-brand-cyan/40"
            >
                <ExternalIcon width={18} height={18} /> Abrir demo
              </a>
          )}
        </div>
      </header>

      <section className="mt-10">
        <div className={`grid gap-4 ${project.screenshots.length > 1 ? 'sm:grid-cols-2' : ''}`}>
          {project.screenshots.map((s, i) => (
            <button
              key={s.src}
              onClick={() => setLightbox(i)}
              className="glass group overflow-hidden rounded-2xl p-2 text-left"
              aria-label={`Ampliar: ${s.caption}`}
            >
              <img
                src={s.src}
                alt={s.caption}
                className="max-h-[560px] w-full rounded-xl object-contain transition duration-500 group-hover:scale-[1.01]"
              />
              <p className="px-2 pb-1 pt-3 text-sm text-slate-400">{s.caption} · clique para ampliar</p>
            </button>
          ))}
        </div>
      </section>

      <div className="mt-12 grid gap-6 lg:grid-cols-[2fr_1fr]">
        <div className="space-y-6">
          <section className="glass rounded-2xl p-6 sm:p-8">
            <h2 className="font-display text-2xl font-semibold text-white">O que é</h2>
            {project.description.map((d) => (
              <p key={d} className="mt-4 leading-relaxed text-slate-400">
                {d}
              </p>
            ))}
            <h3 className="mt-8 font-display text-lg font-semibold text-white">O que o sistema faz</h3>
            <ul className="mt-4 space-y-2">
              {project.features.map((f) => (
                <li key={f} className="flex gap-3 text-slate-300">
                  <span className="bg-gradient-brand mt-2 h-1.5 w-1.5 shrink-0 rounded-full" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="glass rounded-2xl border-brand-violet/30 p-6 sm:p-8">
            <h2 className="font-display text-2xl font-semibold text-white">O que eu fiz</h2>
            {project.participation.map((p) => (
              <p key={p} className="mt-4 leading-relaxed text-slate-400">
                {p}
              </p>
            ))}
            <h3 className="mt-8 text-sm font-semibold uppercase tracking-wider text-brand-cyan">
              O que usei nesse trabalho
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.myTech.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          </section>
        </div>

        <aside>
          <div className="glass rounded-2xl p-6 lg:sticky lg:top-24">
            <h2 className="font-display text-lg font-semibold text-white">Stack do projeto</h2>
            <div className="mt-5 space-y-5">
              {project.techGroups.map((g) => (
                <div key={g.group}>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-brand-cyan">{g.group}</h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {g.items.map((i) => (
                      <span key={i} className="rounded-lg bg-white/5 px-2.5 py-1 text-sm text-slate-200">
                        {i}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>

      <nav className="mt-16 grid gap-4 border-t border-white/5 pt-8 sm:grid-cols-2">
        {prev ? (
          <Link to={`/projetos/${prev.slug}`} className="glass group rounded-2xl p-5 transition hover:border-brand-violet/40">
            <span className="inline-flex items-center gap-2 text-sm text-slate-500">
              <ArrowLeftIcon width={16} height={16} /> Case anterior
            </span>
            <p className="mt-1 font-display text-lg font-semibold text-white group-hover:text-brand-cyan">{prev.name}</p>
          </Link>
        ) : (
          <span />
        )}
        {next && (
          <Link
            to={`/projetos/${next.slug}`}
            className="glass group rounded-2xl p-5 text-right transition hover:border-brand-violet/40"
          >
            <span className="inline-flex items-center gap-2 text-sm text-slate-500">
              Próximo case <ArrowRightIcon width={16} height={16} />
            </span>
            <p className="mt-1 font-display text-lg font-semibold text-white group-hover:text-brand-cyan">{next.name}</p>
          </Link>
        )}
      </nav>

      <Lightbox images={project.screenshots} index={lightbox} onChange={setLightbox} />
    </article>
  )
}
