import { useState } from 'react'
import { business } from '../data/businessInfo'
import { Menu, Close, Phone } from './Icons'
const links = [['About', '#about'], ['Services', '#services'], ['Hours', '#visit'], ['Contact', '#contact']]
export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="site-header">
      <div className="container bar">
        <a href="#top" className="brand" onClick={() => setOpen(false)}><span>Long Island Ink</span><small>Tattoos &amp; Piercings</small></a>
        <button className="icon-btn menu-btn" aria-expanded={open} aria-controls="nav" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>{open ? <Close /> : <Menu />}</button>
        <nav id="nav" aria-label="Main" className={open ? 'open' : ''}>
          <ul>{links.map(([l, h]) => <li key={h}><a href={h} onClick={() => setOpen(false)}>{l}</a></li>)}</ul>
          <a className="btn btn-gold" href={`tel:${business.phone}`}><Phone /> Call {business.phoneDisplay}</a>
        </nav>
      </div>
    </header>
  )
}
