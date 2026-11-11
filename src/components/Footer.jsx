import { business as b } from '../data/businessInfo'
import { Facebook, Instagram } from './Icons'
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container foot">
        <div>
          <strong>{b.name}</strong>
          <address>{b.address.street}, {b.address.city}, {b.address.region} {b.address.zip}<br /><a href={`tel:${b.phone}`}>{b.phoneDisplay}</a></address>
        </div>
        <ul className="social" aria-label="Social media">
          <li><a href={b.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Long Island Ink on Instagram"><Instagram /></a></li>
          <li><a href={b.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Long Island Ink on Facebook"><Facebook /></a></li>
        </ul>
      </div>
      <p className="copy">© {new Date().getFullYear()} {b.name}. All rights reserved.</p>
    </footer>
  )
}
