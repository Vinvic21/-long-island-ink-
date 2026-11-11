import { useEffect, useState } from 'react'
import { business as b, fmtHour } from '../data/businessInfo'
import { Phone, Pin, Clock, Facebook, Instagram } from './Icons'

function calc() {
  const parts = new Intl.DateTimeFormat('en-US', { timeZone: b.timeZone, weekday: 'long', hour: 'numeric', minute: 'numeric', hourCycle: 'h23' }).formatToParts(new Date())
  const get = (t) => parts.find((p) => p.type === t).value
  const today = b.hours.find((h) => h.day === get('weekday'))
  const t = Number(get('hour')) + Number(get('minute')) / 60
  return { today: today.day, open: t >= today.open && t < today.close, closes: today.close, opens: today.open }
}
function useOpenStatus() {
  const [s, setS] = useState(calc)
  useEffect(() => { const id = setInterval(() => setS(calc()), 60000); return () => clearInterval(id) }, [])
  return s
}

export function Hero() {
  const s = useOpenStatus()
  return (
    <section className="hero" id="top">
      <div className="container hero-inner">
        <p className="eyebrow">Douglasville, Georgia</p>
        <h1>Tattoos &amp; piercings,<br />done right.</h1>
        <p className="lead">Long Island Ink is a tattoo and piercing shop on GA-5 in Douglasville. Stop in or call to talk about your next piece.</p>
        <div className="actions">
          <a className="btn btn-gold" href={`tel:${b.phone}`}><Phone /> Call {b.phoneDisplay}</a>
          <a className="btn btn-ghost" href={b.mapsUrl} target="_blank" rel="noopener noreferrer"><Pin /> Get directions</a>
        </div>
        <p className={`status ${s.open ? 'is-open' : ''}`} role="status"><Clock /> {s.open ? `Open now, until ${fmtHour(s.closes)}` : `Closed now, opens ${fmtHour(s.opens)} today`} <small>(hours may differ on holidays)</small></p>
      </div>
    </section>
  )
}

export function About() {
  return (
    <section id="about" className="section">
      <div className="container narrow">
        <h2>About the shop</h2>
        <p>Long Island Ink Tattoos &amp; Piercings is a tattoo shop located at {b.address.street}, {b.address.city}, {b.address.region}. We do tattoos and body piercings, and we are open seven days a week.</p>
        <p>Not sure what you want yet? Call, message us on social media, or visit during opening hours.</p>
      </div>
    </section>
  )
}

const services = [
  ['Tattoos', 'Tattoo work in our Douglasville studio. Contact the shop to discuss your idea, size and placement.'],
  ['Piercings', `Body piercings, all ${b.piercingPrice}. Ask the shop about jewelry options.`],
]
export function Services() {
  return (
    <section id="services" className="section alt">
      <div className="container">
        <h2>Services</h2>
        <div className="cards">
          {services.map(([t, d]) => <article key={t} className="card"><h3>{t}</h3><p>{d}</p></article>)}
        </div>
        <p className="note">Piercing price as listed by the shop on Google Maps. Please confirm details when you call or visit.</p>
      </div>
    </section>
  )
}

export function Gallery() {
  if (!b.photos.length) return null
  return (
    <section id="gallery" className="section">
      <div className="container">
        <h2>Our work</h2>
        <ul className="gallery">
          {b.photos.map((p) => <li key={p.src}><img src={p.src} alt={p.alt} width={p.w} height={p.h} loading="lazy" decoding="async" /></li>)}
        </ul>
      </div>
    </section>
  )
}

export function Social() {
  return (
    <section className="section alt" aria-labelledby="social-h">
      <div className="container narrow center">
        <h2 id="social-h">See our latest work</h2>
        <p>Follow Long Island Ink for recent tattoos, piercings and shop updates.</p>
        <div className="actions center-actions">
          <a className="btn btn-ghost" href={b.social.instagram} target="_blank" rel="noopener noreferrer"><Instagram /> Instagram</a>
          <a className="btn btn-ghost" href={b.social.facebook} target="_blank" rel="noopener noreferrer"><Facebook /> Facebook</a>
        </div>
      </div>
    </section>
  )
}

export function Visit() {
  const s = useOpenStatus()
  return (
    <section id="visit" className="section">
      <div className="container split">
        <div>
          <h2>Hours</h2>
          <table className="hours">
            <caption className="sr-only">Opening hours</caption>
            <tbody>
              {b.hours.map((h) => (
                <tr key={h.day} className={h.day === s.today ? 'today' : ''}>
                  <th scope="row">{h.day}</th><td>{fmtHour(h.open)} – {fmtHour(h.close)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="note">Hours may differ on holidays. Call ahead if in doubt.</p>
        </div>
        <div>
          <h2 id="contact">Find us</h2>
          <address>
            <strong>{b.name}</strong><br />{b.address.street}<br />{b.address.city}, {b.address.region} {b.address.zip}
          </address>
          <p><a href={`tel:${b.phone}`}>{b.phoneDisplay}</a></p>
          <div className="actions">
            <a className="btn btn-gold" href={`tel:${b.phone}`}><Phone /> Call</a>
            <a className="btn btn-ghost" href={b.mapsUrl} target="_blank" rel="noopener noreferrer"><Pin /> Directions</a>
          </div>
          <iframe className="map" title="Map showing Long Island Ink Tattoos & Piercings in Douglasville, GA" src={b.mapsEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>
      </div>
    </section>
  )
}
