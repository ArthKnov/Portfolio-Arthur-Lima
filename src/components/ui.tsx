import { useEffect, useRef, type ReactNode } from 'react'

export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible')
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return ref
}

export function Section({
  id,
  index,
  title,
  intro,
  children,
  tone = 'default',
}: {
  id: string
  index: string
  title: string
  intro?: string
  children: ReactNode
  tone?: 'default' | 'band' | 'accent'
}) {
  const ref = useReveal<HTMLElement>()
  const shell = tone === 'band' ? 'band' : tone === 'accent' ? 'band-accent' : ''

  return (
    <section id={id} ref={ref} className={`reveal ${shell}`}>
      <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8">
        <div className="mb-10 max-w-3xl">
          <p className="text-gradient font-display text-sm font-bold uppercase tracking-[0.22em]">
            {index}
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {title}
          </h2>
          {intro && <p className="mt-3 leading-relaxed text-slate-400">{intro}</p>}
        </div>
        {children}
      </div>
    </section>
  )
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-brand-violet/30 bg-brand-violet/10 px-3 py-1 text-xs font-medium text-violet-200">
      {children}
    </span>
  )
}

export function Info({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs uppercase tracking-[0.14em] text-slate-500">{label}</dt>
      <dd className="mt-1 font-medium text-slate-200">{value}</dd>
    </div>
  )
}
