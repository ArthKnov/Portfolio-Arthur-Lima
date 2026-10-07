import { projects } from '../data/portfolio.ts'
import ProjectCard from './ProjectCard.tsx'
import { Section } from './ui.tsx'

export default function Projects() {
  const [first, ...rest] = projects

  return (
    <Section
      id="projetos"
      index="05"
      title="Trabalhos da FATEC"
      intro="Do 1º ao 5º semestre: abra cada item para ver o que foi feito, o que eu fiz, as techs e os prints."
      tone="band"
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <ProjectCard project={first} featured />
        {rest.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </Section>
  )
}
