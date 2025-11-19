function Projects() {
  const projects = [
    {
      title: 'SaaS Dashboard',
      desc: 'Analytics, team management, and billing powered by modern APIs.',
      tags: ['React', 'Tailwind', 'Charts'],
      link: '#'
    },
    {
      title: 'AI Assistant',
      desc: 'Conversational UI integrated with backend tooling and vector search.',
      tags: ['FastAPI', 'OpenAI', 'Pinecone'],
      link: '#'
    },
    {
      title: 'E-commerce Kit',
      desc: 'Headless storefront with payments, inventory, and CMS integration.',
      tags: ['Next.js', 'Stripe', 'MongoDB'],
      link: '#'
    },
  ]

  return (
    <section id="projects" className="py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Featured Projects</h2>
          <a href="#contact" className="text-blue-300 hover:text-blue-200">Let’s work together →</a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <a key={i} href={p.link} className="group rounded-xl border border-slate-800 bg-gradient-to-b from-slate-800/60 to-slate-900 p-6 hover:border-blue-500/40 transition relative overflow-hidden">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-tr from-blue-500/10 to-emerald-400/10" />
              <h3 className="relative text-xl font-semibold text-white">{p.title}</h3>
              <p className="relative mt-2 text-slate-300">{p.desc}</p>
              <div className="relative mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded bg-white/5 border border-white/10 text-slate-200">{t}</span>
                ))}
              </div>
              <span className="relative mt-6 inline-block text-blue-300">View project →</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
