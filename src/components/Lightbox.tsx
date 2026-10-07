import { useEffect } from 'react'
import { ArrowLeftIcon, ArrowRightIcon, CloseIcon } from './Icons.tsx'

type Props = {
  images: { src: string; caption: string }[]
  index: number | null
  onChange: (index: number | null) => void
}

export default function Lightbox({ images, index, onChange }: Props) {
  const hasMany = images.length > 1

  useEffect(() => {
    if (index === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onChange(null)
      if (e.key === 'ArrowRight') onChange((index + 1) % images.length)
      if (e.key === 'ArrowLeft') onChange((index - 1 + images.length) % images.length)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [index, images.length, onChange])

  if (index === null) return null
  const image = images[index]

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink-950/95 p-4 backdrop-blur"
      onClick={() => onChange(null)}
      role="dialog"
      aria-modal="true"
    >
      <button
        className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
        onClick={() => onChange(null)}
        aria-label="Fechar"
      >
        <CloseIcon />
      </button>

      {hasMany && (
        <button
          className="absolute left-4 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"
          onClick={(e) => {
            e.stopPropagation()
            onChange((index - 1 + images.length) % images.length)
          }}
          aria-label="Imagem anterior"
        >
          <ArrowLeftIcon />
        </button>
      )}

      <figure className="max-h-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
        <img src={image.src} alt={image.caption} className="max-h-[80vh] w-auto rounded-xl object-contain" />
        <figcaption className="mt-3 text-center text-sm text-slate-400">
          {image.caption}
          {hasMany && ` (${index + 1}/${images.length})`}
        </figcaption>
      </figure>

      {hasMany && (
        <button
          className="absolute right-4 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"
          onClick={(e) => {
            e.stopPropagation()
            onChange((index + 1) % images.length)
          }}
          aria-label="Próxima imagem"
        >
          <ArrowRightIcon />
        </button>
      )}
    </div>
  )
}
