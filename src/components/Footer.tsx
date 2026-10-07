import { profile } from '../data/portfolio.ts'

export default function Footer() {
  return (
    <footer className="border-t border-white/5">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <p>DSM · FATEC Zona Leste · trabalhos de 2024 a 2026</p>
      </div>
    </footer>
  )
}
