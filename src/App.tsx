import { useEffect, useState } from 'react'
import type { FormEvent } from 'react'
import './App.css'

const asset = (path: string) => `./assets/${path}`
const logo = asset('original/logo.png')

const services = [
  ['01', 'Grundreinigung', 'Oberflächen, Ecken und schwer zugängliche Stellen – gründlich bis ins Detail.', '/assets/optimized/grundreinigung.jpg'],
  ['02', 'Glasreinigung', 'Streifenfreier Durchblick für Fenster, Glasflächen und Fassaden.', '/assets/optimized/glasreinigung.jpg'],
  ['03', 'Baureinigung', 'Staub, Bauschutt und Verschmutzungen verschwinden, bevor Sie einziehen.', '/assets/optimized/baureinigung.jpg'],
  ['04', 'Industriereinigung', 'Maschinen, Hallen, Produktionslinien und technische Anlagen – spezialisiert gereinigt.', '/assets/optimized/industrie.jpg'],
  ['05', 'Sonderfälle', 'Teppiche, Polster, Fassaden und spezielle Hygienedienste nach Bedarf.', '/assets/optimized/teppich.jpg'],
  ['06', 'Grünpflege', 'Rasen, Hecken und Beete für gepflegte Außenanlagen.', '/assets/optimized/gruenpflege.jpg'],
  ['07', 'Winterdienst', 'Schneeräumung, Streuen und Eisglätte-Bekämpfung für Wege und Zufahrten.', '/assets/optimized/winterdienst.jpg'],
]

function Arrow() { return <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M3 10h13M11 4.5 16.5 10 11 15.5" /></svg> }

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [sent, setSent] = useState(false)
  useEffect(() => {
    document.querySelectorAll<HTMLImageElement>('img[src^="/assets/"]').forEach((image) => {
      image.src = `.${image.getAttribute('src')}`
    })
  }, [])
  const closeMenu = () => setMenuOpen(false)
  const submit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); setSent(true) }

  return <div className="page">
    <div className="topline"><div><span className="status-dot" /> Clean Police · Gebäudereinigung in Fürstenberg</div><a href="tel:+4915750839085">0157 508 390 85 <Arrow /></a></div>
    <header className="header"><a href="#start" className="logo-link" onClick={closeMenu}><img src={logo} alt="Clean Police Gebäudeservice" /></a><button className="menu-button" type="button" aria-label="Menü öffnen" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><span /><span /></button><nav aria-label="Hauptnavigation" className={menuOpen ? 'nav open' : 'nav'}><a href="#leistungen" onClick={closeMenu}>Leistungen</a><a href="#ueber-uns" onClick={closeMenu}>Über uns</a><a href="#ablauf" onClick={closeMenu}>Ablauf</a><a className="nav-button" href="#kontakt" onClick={closeMenu}>Angebot anfragen <Arrow /></a></nav></header>

    <main id="start">
      <section className="hero"><div className="hero-content"><div className="label">Sauber. Persönlich. Zuverlässig.</div><h1>Ihre Räume.<br /><em>Unser Anspruch.</em></h1><p>Bei Clean Police sorgen wir dafür, dass Räume sauber, hygienisch und einladend bleiben – privat und gewerblich.</p><div className="hero-actions"><a className="button primary" href="#kontakt">Unverbindliches Angebot <Arrow /></a><a className="phone-link" href="tel:+4952719519851">05271 951 98 51</a></div><div className="hero-meta"><div><strong>Clean Police</strong><span>Gebäudeservice</span></div><div><strong>Fürstenberg</strong><span>und Umgebung</span></div></div></div><div className="hero-photo"><img src="/assets/hero-clean-police.jpg" alt="Professionelle Reinigungskraft bei der Glasreinigung" fetchPriority="high" /><div className="photo-stamp"><span>CP</span><small>Clean<br />Police</small></div><div className="photo-caption"><span>Professionelle Glasreinigung</span><span>Clean Police</span></div></div></section>

      <section className="intro band" id="ueber-uns"><div className="section-label">// Über Clean Police</div><div className="intro-grid"><div><h2>Sauberkeit ist das <span>erste gute Gefühl.</span></h2><p className="lead">Ob privat oder gewerblich – Schmutz ist für uns kein Problem.</p></div><div className="intro-copy"><p>Wir von Clean Police verstehen, dass Sauberkeit das A und O für ein angenehmes und gepflegtes Umfeld ist. Deshalb kümmern wir uns persönlich um Räume, in denen Menschen leben, arbeiten und sich wohlfühlen.</p><div className="person"><img src="/assets/optimized/luan.jpg" alt="Luan Shabani, Clean Police" loading="lazy" /><div><strong>Luan Shabani</strong><span>Ihr Ansprechpartner</span></div></div></div></div></section>

      <section className="services band" id="leistungen"><div className="section-head"><div><div className="section-label">// Unser Angebot</div><h2>Eine saubere Lösung <span>für jeden Raum.</span></h2></div><p>Von der Grundreinigung bis zur Grünpflege: Bei uns finden Sie die Dienstleistung, die zu Ihnen passt.</p></div><div className="service-grid">{services.map(([, title, text, image]) => <article className="service-card" key={title}><div className="card-image"><img src={image} loading="lazy" alt={title} /></div><div className="card-body"><h3>{title}</h3><p>{text}</p><a href="#kontakt">Mehr erfahren <Arrow /></a></div></article>)}</div></section>

      <section className="statement"><div className="statement-mark">CP</div><div><div className="section-label">// Das ist Clean Police</div><h2>Wir kommen nicht nur, <em>wir kümmern uns.</em></h2></div><p>Ein Ansprechpartner, klare Absprachen und ein Ergebnis, das man sieht. Genau so einfach darf professionelle Reinigung sein.</p></section>

      <section className="process band" id="ablauf"><div className="process-photo"><img src="/assets/optimized/baureinigung.jpg" loading="lazy" alt="Professionelle Reinigung bei Clean Police" /><span>Gründlich vom ersten<br />bis zum letzten Schritt.</span></div><div className="process-content"><div className="section-label">// So einfach geht's</div><h2>Ihr Bedarf. <span>Unser Plan.</span></h2><ol><li><div><strong>Kontakt aufnehmen</strong><p>Sie erzählen uns, was sauber werden soll.</p></div></li><li><div><strong>Unverbindlich besprechen</strong><p>Wir schauen gemeinsam, was wirklich passt.</p></div></li><li><div><strong>Sauber loslegen</strong><p>Wir übernehmen den Rest – zuverlässig und persönlich.</p></div></li></ol><a className="button navy" href="#kontakt">Gespräch vereinbaren <Arrow /></a></div></section>

      <section className="contact" id="kontakt"><div className="contact-copy"><div className="section-label">// Buchen Sie uns jetzt</div><h2>Bereit für <em>mehr Sauberkeit?</em></h2><p>Kontaktieren Sie uns noch heute für ein unverbindliches Angebot. Wir freuen uns darauf, Ihr Reinigungsprojekt zu übernehmen.</p><div className="contact-list"><a href="tel:+4952719519851">05271 951 98 51</a><a href="tel:+4915750839085">0157 508 390 85</a><a href="mailto:info@cleanpolice.de">info@cleanpolice.de</a><span>Derentaler Straße 18<br />37699 Fürstenberg</span></div></div><form className="form" onSubmit={submit}>{sent ? <div className="success"><strong>Vielen Dank.</strong><span>Ihre Nachricht wurde vorbereitet. Wir melden uns so schnell wie möglich bei Ihnen.</span></div> : <><label htmlFor="contact-name">Name <input id="contact-name" name="name" autoComplete="name" required placeholder="Ihr Name" /></label><label htmlFor="contact-email">E-Mail <input id="contact-email" name="email" autoComplete="email" required type="email" placeholder="ihre@email.de" /></label><label htmlFor="contact-message">Nachricht <textarea id="contact-message" name="message" rows={4} placeholder="Wobei dürfen wir helfen?" /></label><label className="consent"><input type="checkbox" required /> <span>Ich stimme der Verarbeitung meiner Daten zur Kontaktaufnahme zu.</span></label><button className="button cyan" type="submit">Nachricht senden <Arrow /></button></>}</form></section>
    </main>
    <footer className="footer"><img src={logo} alt="Clean Police" /><span>© 2025 Clean Police</span><div><a href="https://www.cleanpolice.de/impressum/">Impressum</a><a href="https://www.cleanpolice.de/datenschutz/">Datenschutz</a></div></footer>
  </div>
}

export default App
