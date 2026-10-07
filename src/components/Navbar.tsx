import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { CloseIcon, MenuIcon } from './Icons.tsx'
import { scrollToSection } from './ScrollManager.tsx'

const links = [
  { id: 'formacao', label: 'Estudos' },
  { id: 'experiencia', label: 'Carreira' },
  { id: 'extensao', label: 'Cursos' },
  { id: 'idiomas', label: 'Stack' },
  { id: 'projetos', label: 'Works' },
  { id: 'contato', label: 'Fale comigo' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const goTo = (id: string) => {
    setOpen(false)
    if (pathname === '/') {
      if (id === 'topo') window.scrollTo({ top: 0, behavior: 'smooth' })
      else scrollToSection(id)
    } else {
      navigate('/', { state: id === 'topo' ? undefined : { scrollTo: id } })
    }
  }

  return (
    <header className="fixed inset-x-0 top-0 z-40 px-4 pt-4 sm:px-6">
      <nav
        className={`mx-auto flex max-w-5xl items-center justify-between gap-4 rounded-2xl border px-4 py-2.5 transition-all duration-300 ${
          scrolled || open
            ? 'border-white/10 bg-ink-950/90 shadow-xl shadow-black/30 backdrop-blur-xl'
            : 'border-white/5 bg-ink-900/40 backdrop-blur-md'
        }`}
      >
        <button
          onClick={() => goTo('topo')}
          className="flex items-center gap-2.5"
          aria-label="Ir para o início"
        >
          <span className="bg-gradient-brand grid h-9 w-9 place-items-center rounded-lg font-display text-sm font-extrabold text-ink-950">
            AL
          </span>
          <span className="hidden font-display text-sm font-bold text-white sm:block">
            Arthur Lima
          </span>
        </button>

        <ul className="hidden items-center gap-0.5 lg:flex">
          {links.map((l) => (
            <li key={l.id}>
              <button
                onClick={() => goTo(l.id)}
                className="rounded-lg px-2.5 py-1.5 text-xs font-medium text-slate-300 transition hover:bg-white/5 hover:text-white"
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        <a
          href="https://github.com/ArthKnov"
          target="_blank"
          rel="noreferrer"
          className="hidden rounded-lg border border-white/10 px-3 py-1.5 text-xs font-semibold text-slate-200 transition hover:border-brand-cyan/40 hover:text-white sm:inline-flex"
        >
          GitHub ↗
        </a>

        <button
          onClick={() => setOpen((o) => !o)}
          className="rounded-lg p-2 text-slate-200 lg:hidden"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>

      {open && (
        <ul className="mx-auto mt-2 flex max-w-5xl flex-col gap-1 rounded-2xl border border-white/10 bg-ink-950/95 p-3 backdrop-blur-xl lg:hidden">
          {links.map((l) => (
            <li key={l.id}>
              <button
                onClick={() => goTo(l.id)}
                className="w-full rounded-xl px-3 py-3 text-left text-sm text-slate-200 hover:bg-white/5"
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
