import { site } from "@/content/site";
import CopyEmail from "./CopyEmail";
import styles from "./Contact.module.css";

const mailto = `mailto:${site.email}?subject=${encodeURIComponent("Frontend / full-stack opportunity")}&body=${encodeURIComponent("Hi Emmanuel,\n\nI came across your portfolio. Here is what we are building and the role or project I have in mind:\n\n")}`;
const elsewhere = [
  { name: "GitHub", handle: "@0xEmmo", href: site.links.github },
  { name: "X", handle: "@lumistro", href: site.links.x },
  { name: "LinkedIn", handle: "Emmanuel Balogun", href: site.links.linkedin },
  { name: "Instagram", handle: "@lumistro_", href: site.links.instagram },
];

export default function Contact() {
  return <div className={styles.wrap}>
    <div data-reveal="pending">
      <h3 className={`serif ${styles.pitch}`}>If you’re looking for someone who can design the interface and build the system behind it, I’d like to talk.</h3>
      <ul className={styles.tags}>{site.openTo.map((item) => <li key={item}>{item}</li>)}</ul>
      <div className={styles.emailBlock}><span className="label">Direct</span><a href={mailto} className={styles.email}>{site.email}</a><CopyEmail email={site.email} /></div>
      <p className={styles.note}>Email is the fastest route. If you would rather see the work first, the projects above are live and the source links are collected on GitHub.</p>
    </div>
    <aside className={styles.links} data-reveal="pending" style={{ "--reveal-delay": "120ms" } as React.CSSProperties}>
      <div className={styles.linksHead}><span className="label">Elsewhere</span></div>
      {elsewhere.map((link) => <a key={link.name} href={link.href} target="_blank" rel="noreferrer" className={styles.link}><span className={styles.linkName}>{link.name}</span><span className={styles.linkHandle}>{link.handle}</span><span className={styles.linkArrow} aria-hidden="true">↗</span></a>)}
    </aside>
  </div>;
}
