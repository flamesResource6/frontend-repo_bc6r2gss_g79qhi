function Timeline() {
  const items = [
    {
      year: '2025',
      title: 'Senior Frontend Engineer',
      company: 'Acme Cloud',
      desc: 'Led the UI platform and design system used across 10+ apps.'
    },
    {
      year: '2023',
      title: 'Full-Stack Developer',
      company: 'Startify',
      desc: 'Built and launched a multi-tenant SaaS with payments and analytics.'
    },
    {
      year: '2021',
      title: 'Frontend Developer',
      company: 'Pixel Labs',
      desc: 'Shipped high-quality React experiences with performance focus.'
    },
  ]

  return (
    <section id="timeline" className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.15),transparent_60%)]" />
      <div className="relative max-w-6xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">Experience</h2>
        <div className="relative border-l border-slate-800 ml-4">
          {items.map((item, idx) => (
            <div key={idx} className="relative pl-8 pb-10">
              <span className="absolute -left-2 top-1.5 h-3 w-3 rounded-full bg-blue-400 ring-4 ring-slate-900" />
              <p className="text-sm text-blue-300/80">{item.year}</p>
              <h3 className="text-xl font-semibold text-white mt-1">{item.title} • <span className="text-slate-300">{item.company}</span></h3>
              <p className="text-slate-300 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Timeline
