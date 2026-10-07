import { Link } from 'react-router-dom'
import type { Project } from '../data/portfolio.ts'
import { ArrowRightIcon } from './Icons.tsx'

export default function ProjectCard({
  project,
  featured = false,
}: {
  project: Project
  featured?: boolean
}) {
  return (
    <Link
      to={`/projetos/${project.slug}`}
      className={`group relative block overflow-hidden rounded-2xl border border-white/10 bg-ink-900 transition duration-300 hover:border-brand-violet/50 hover:shadow-2xl hover:shadow-brand-violet/15 ${
        featured ? 'sm:col-span-2 lg:col-span-2' : ''
      }`}
    >
      <div className={`relative overflow-hidden ${featured ? 'aspect-[21/10] sm:aspect-[2.2/1]' : 'aspect-[4/3]'}`}>
        <img
          src={project.cover}
          alt={`Captura de tela do projeto ${project.name}`}
          loading="lazy"
          className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/55 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-cyan">
            {project.semester} · {project.period}
          </p>
          <h3 className={`mt-2 font-display font-bold text-white ${featured ? 'text-2xl sm:text-3xl' : 'text-xl'}`}>
            {project.name}
          </h3>
          <p className="mt-1 line-clamp-2 text-sm text-slate-300">{project.subtitle}</p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {project.tags.slice(0, featured ? 6 : 4).map((t) => (
              <span key={t} className="rounded-md bg-white/10 px-2 py-0.5 text-[11px] text-slate-200 backdrop-blur">
                {t}
              </span>
            ))}
          </div>
          <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white">
            Ver case
            <ArrowRightIcon width={16} height={16} className="transition group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </Link>
  )
}
