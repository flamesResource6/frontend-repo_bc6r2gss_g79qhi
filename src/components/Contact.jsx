import { useState } from 'react'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', budget: '', message: '' })
  const [status, setStatus] = useState({ loading: false, success: null, error: null })

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus({ loading: true, success: null, error: null })
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: form.name, email: form.email, message: form.message, company: form.company || undefined, budget: form.budget || undefined })
      })
      if (!res.ok) throw new Error('Request failed')
      const data = await res.json()
      setStatus({ loading: false, success: data.message || 'Sent!', error: null })
      setForm({ name: '', email: '', company: '', budget: '', message: '' })
    } catch (err) {
      setStatus({ loading: false, success: null, error: err.message || 'Something went wrong' })
    }
  }

  return (
    <section id="contact" className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Let’s build something great</h2>
            <p className="mt-3 text-slate-300">Tell me about your project, timeline, and goals. I’ll get back within 24 hours.</p>
            <div className="mt-6 rounded-xl border border-slate-800 p-6 bg-white/5 text-slate-200">
              <p className="font-medium">What I can help with:</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                <li>• Full-stack web apps</li>
                <li>• Design systems & component libraries</li>
                <li>• Performance audits and refactors</li>
                <li>• Integrations: auth, billing, analytics</li>
              </ul>
            </div>
          </div>

          <form onSubmit={onSubmit} className="rounded-xl border border-slate-800 bg-slate-900 p-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-slate-300 mb-1">Name</label>
                <input name="name" value={form.name} onChange={onChange} required className="w-full rounded-lg bg-slate-800 text-white px-3 py-2 border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm text-slate-300 mb-1">Email</label>
                <input name="email" type="email" value={form.email} onChange={onChange} required className="w-full rounded-lg bg-slate-800 text-white px-3 py-2 border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm text-slate-300 mb-1">Company (optional)</label>
                <input name="company" value={form.company} onChange={onChange} className="w-full rounded-lg bg-slate-800 text-white px-3 py-2 border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm text-slate-300 mb-1">Budget (optional)</label>
                <input name="budget" value={form.budget} onChange={onChange} className="w-full rounded-lg bg-slate-800 text-white px-3 py-2 border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm text-slate-300 mb-1">Message</label>
                <textarea name="message" value={form.message} onChange={onChange} required rows={5} className="w-full rounded-lg bg-slate-800 text-white px-3 py-2 border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
            </div>

            <button type="submit" disabled={status.loading} className="mt-4 w-full px-5 py-2.5 rounded-lg bg-blue-500 text-white font-medium hover:bg-blue-600 disabled:opacity-60">
              {status.loading ? 'Sending...' : 'Send message'}
            </button>
            {status.success && <p className="mt-3 text-emerald-400 text-sm">{status.success}</p>}
            {status.error && <p className="mt-3 text-red-400 text-sm">{status.error}</p>}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
