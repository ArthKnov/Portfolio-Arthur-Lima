import { profile } from '../data/portfolio.ts'
import { GithubIcon, LinkedinIcon, MailIcon, MapPinIcon, WhatsappIcon } from './Icons.tsx'
import { Section } from './ui.tsx'

const channels = [
  { label: 'E-mail', value: profile.email, href: `mailto:${profile.email}`, Icon: MailIcon },
  { label: 'WhatsApp', value: profile.phone, href: profile.whatsapp, Icon: WhatsappIcon },
  { label: 'GitHub', value: profile.githubLabel, href: profile.github, Icon: GithubIcon },
  { label: 'LinkedIn', value: profile.linkedinLabel, href: profile.linkedin, Icon: LinkedinIcon },
]

export default function Contact() {
  return (
    <Section
      id="contato"
      index="06"
      title="Canais"
      intro="Prefere e-mail, WhatsApp, GitHub ou LinkedIn? Qualquer um desses chega até mim."
    >
      <div className="grid gap-3 sm:grid-cols-2">
        {channels.map(({ label, value, href, Icon }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith('mailto:') ? undefined : '_blank'}
            rel="noreferrer"
            className="glass group flex items-center gap-4 rounded-2xl p-5 transition hover:border-brand-cyan/40"
          >
            <span className="bg-gradient-brand grid h-11 w-11 shrink-0 place-items-center rounded-xl text-ink-950">
              <Icon />
            </span>
            <span className="min-w-0">
              <span className="block text-xs uppercase tracking-[0.14em] text-slate-500">{label}</span>
              <span className="block truncate font-medium text-white group-hover:text-brand-cyan">{value}</span>
            </span>
          </a>
        ))}
      </div>
      <p className="mt-6 inline-flex items-center gap-2 text-slate-400">
        <MapPinIcon width={16} height={16} /> {profile.location}
      </p>
    </Section>
  )
}
