'use client';

/* oxlint-disable next/no-img-element -- This is a Vite app; the local hero image is explicitly sized and eagerly loaded. */

import { AnimatePresence, motion, useReducedMotion, useScroll, useSpring } from 'framer-motion';
import {
  ArrowDownRight,
  ArrowUp,
  Award,
  BriefcaseBusiness,
  Check,
  ChevronRight,
  Download,
  GraduationCap,
  Layers3,
  Mail,
  MapPin,
  Menu,
  Moon,
  Network,
  Send,
  Smartphone,
  Sun,
  Wrench,
  X,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn, FaSnapchatGhost, FaWhatsapp } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { portfolio } from '@/src/data/portfolio';
import { Reveal } from './Reveal';

const skillIcons = [Smartphone, Network, Wrench, Layers3];
const socialIcons = {
  facebook: FaFacebookF,
  instagram: FaInstagram,
  gmail: SiGmail,
  snapchat: FaSnapchatGhost,
  whatsapp: FaWhatsapp,
  linkedin: FaLinkedinIn,
  github: FaGithub,
};

function SocialDock() {
  return (
    <nav className="social-dock" aria-label="Social profiles">
      {portfolio.socialLinks.map((social) => {
        const Icon = socialIcons[social.icon];
        const external = !social.url.startsWith('mailto:');
        return (
          <a
            key={social.label}
            href={social.url}
            aria-label={`Open ${social.label}`}
            title={social.label}
            target={external ? '_blank' : undefined}
            rel={external ? 'noreferrer' : undefined}
            data-cursor="social"
          >
            <Icon aria-hidden="true" />
            <span>{social.label}</span>
          </a>
        );
      })}
    </nav>
  );
}

function InteractiveBackdrop() {
  const reduceMotion = useReducedMotion();
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const videoMedia = window.matchMedia('(prefers-reduced-motion: no-preference)');
    const syncVideo = () => setShowVideo(videoMedia.matches);
    syncVideo();
    videoMedia.addEventListener('change', syncVideo);
    if (reduceMotion || !window.matchMedia('(pointer: fine)').matches) {
      return () => videoMedia.removeEventListener('change', syncVideo);
    }
    const onMove = (event: PointerEvent) => {
      document.documentElement.style.setProperty('--pointer-x', `${event.clientX}px`);
      document.documentElement.style.setProperty('--pointer-y', `${event.clientY}px`);
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => {
      videoMedia.removeEventListener('change', syncVideo);
      window.removeEventListener('pointermove', onMove);
    };
  }, [reduceMotion]);
  return (
    <div className="site-background" aria-hidden="true">
      {showVideo && (
        <video className="site-video" autoPlay muted loop playsInline preload="metadata">
          <source src="/media/ui-motion-background.mp4" type="video/mp4" />
        </video>
      )}
      <i className="ambient-orb orb-one" /><i className="ambient-orb orb-two" /><i className="ambient-orb orb-three" />
    </div>
  );
}

function SectionHeading({ eyebrow, title, copy }: { eyebrow: string; title: string; copy: string }) {
  return (
    <Reveal className="section-heading">
      <p className="section-kicker">{eyebrow}</p>
      <h2>{title}</h2>
      <p>{copy}</p>
    </Reveal>
  );
}

function Navbar({ activeSection, dark, onTheme }: { activeSection: string; dark: boolean; onTheme: () => void }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 mx-auto max-w-7xl px-4 pt-4 sm:px-6">
      <nav className="glass nav-shell" aria-label="Primary navigation">
        <a href="#home" className="nav-brand" aria-label="Nitish Kumar Singh — home" onClick={() => setOpen(false)}>
          <span>{portfolio.personal.initials}</span>
          <span className="nav-brand-copy"><strong>{portfolio.personal.name}</strong><small>Mobile developer</small></span>
        </a>
        <div className="nav-links">
          {portfolio.navigation.map((item) => (
            <a key={item.id} href={`#${item.id}`} className={activeSection === item.id ? 'active' : ''}>{item.label}</a>
          ))}
        </div>
        <div className="nav-actions">
          <Button variant="ghost" size="icon" aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'} onClick={onTheme} className="round-icon">
            {dark ? <Sun /> : <Moon />}
          </Button>
          <a href="#contact" className="nav-cta">Let&apos;s talk</a>
          <Button variant="ghost" size="icon" aria-label={open ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={open} onClick={() => setOpen(!open)} className="round-icon menu-button">
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div className="glass mobile-menu" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
            {portfolio.navigation.map((item, index) => (
              <a key={item.id} href={`#${item.id}`} onClick={() => setOpen(false)}><span>0{index + 1}</span>{item.label}<ChevronRight size={16} /></a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Hero() {
  const reduceMotion = useReducedMotion();
  return (
    <section id="home" className="hero section-pad">
      <div className="hero-copy">
        <motion.div className="eyebrow" initial={reduceMotion ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .2 }}>
          <span className="pulse-dot" /> Mobile development · Networking
        </motion.div>
        <motion.p className="hero-name" initial={reduceMotion ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .3 }}>{portfolio.personal.name}</motion.p>
        <motion.h1 initial={reduceMotion ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .36, ease: [0.22, 1, 0.36, 1] }}>
          Crafting seamless mobile experiences with a <em>systems-driven mindset.</em>
        </motion.h1>
        <motion.p className="hero-intro" initial={reduceMotion ? false : { opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .52 }}>
          {portfolio.personal.intro} Based in Kathmandu, I bring together application delivery, networking fundamentals, and collaborative problem-solving.
        </motion.p>
        <motion.div className="hero-actions" initial={reduceMotion ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .62 }}>
          <a href="#experience" className="primary-button">View my work <ArrowDownRight /></a>
          <a href={portfolio.personal.resumeUrl} download className="secondary-button">Download resume <Download /></a>
          <a href="#contact" className="secondary-button">Contact me <Mail /></a>
        </motion.div>
      </div>
      <motion.aside className="hero-card-wrap" initial={reduceMotion ? false : { opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .75, delay: .35 }} aria-label="Profile summary">
        <div className="profile-glow" />
        <div className="glass profile-card">
          <div className="window-bar"><span><i /><i /><i /></span><small>PROFILE.TSX</small></div>
          <div className="profile-placeholder profile-photo-frame">
            <img
              src="/profile1.jpeg"
              alt="Nitish Kumar Singh"
              className="profile-photo"
              width="603"
              height="821"
              loading="eager"
              fetchPriority="high"
            />
          </div>
          <div className="profile-content">
            <span className="status-pill"><i /> Open to professional opportunities</span>
            <h2>{portfolio.personal.name}</h2>
            <p>{portfolio.personal.title} <span>·</span> {portfolio.personal.secondaryTitle}</p>
            <div className="profile-location"><MapPin /> {portfolio.personal.location}</div>
            <SocialDock />
          </div>
        </div>
      </motion.aside>
      <a className="scroll-cue" href="#about"><span>Scroll to explore</span><ArrowDownRight /></a>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section-pad content-section">
      <SectionHeading eyebrow="01 / About" title="A developer who sees the full system." copy="I care about dependable software, clear collaboration, and understanding the infrastructure behind the experience." />
      <div className="about-grid">
        <Reveal className="glass about-story">
          <p className="terminal-label">~/ABOUT/PROFILE.MD</p>
          <p className="about-lead">{portfolio.personal.summary}</p>
          <p>My experience spans mobile application work, UI/UX collaboration, testing, deployment support, graphic design, documentation, and foundational networking. I&apos;m motivated by steady learning and becoming a well-rounded software and networking professional.</p>
        </Reveal>
        <div className="about-notes">
          {[
            ['2025', 'BSc (Hons) graduate'],
            ['Mobile', 'Application delivery experience'],
            ['Systems', 'Networking & virtualization focus'],
          ].map(([value, label], index) => <Reveal key={label} className="glass note-card" delay={index * .08}><strong>{value}</strong><span>{label}</span></Reveal>)}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section-pad content-section">
      <SectionHeading eyebrow="02 / Capabilities" title="Practical skills across software and systems." copy="A grounded toolkit shaped by internship delivery, technical study, collaboration, and hands-on support work — without arbitrary proficiency scores." />
      <div className="skill-grid">
        {portfolio.skills.map((group, index) => {
          const Icon = skillIcons[index];
          return <Reveal key={group.title} className="glass skill-card" delay={index * .06}>
            <div className="skill-card-top"><span className="icon-box"><Icon /></span><span className="skill-index">0{index + 1}</span></div>
            <h3>{group.title}</h3><p>{group.note}</p>
            <ul>{group.items.map((skill) => <li key={skill}><Check />{skill}</li>)}</ul>
          </Reveal>;
        })}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="section-pad content-section">
      <SectionHeading eyebrow="03 / Experience" title="Learning by shipping, supporting, and collaborating." copy="Real-world roles spanning mobile application delivery and practical design and office technology work." />
      <div className="timeline">
        {portfolio.experience.map((item, index) => <Reveal key={`${item.company}-${item.role}`} className="timeline-row">
          <div className="timeline-rail"><span>{index + 1}</span></div>
          <article className="glass experience-card">
            <div className="experience-head">
              <div><p>{item.company}</p><h3>{item.role}</h3></div><time>{item.dates}</time>
            </div>
            <p className="experience-focus"><BriefcaseBusiness /> {item.focus}</p>
            <ul>{item.responsibilities.map((responsibility) => <li key={responsibility}>{responsibility}</li>)}</ul>
          </article>
        </Reveal>)}
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="section-pad content-section">
      <SectionHeading eyebrow="04 / Education" title="A foundation in computing and systems engineering." copy="Formal study in computer systems engineering, supported by an earlier concentration in computer science." />
      <div className="education-grid">
        {portfolio.education.map((item, index) => <Reveal key={item.qualification} className={`glass education-card ${index === 0 ? 'featured' : ''}`} delay={index * .07}>
          <div className="education-top"><GraduationCap /><time>{item.year}</time></div>
          <h3>{item.qualification}</h3><p>{item.institution}</p><span>{item.result}</span>
        </Reveal>)}
      </div>
    </section>
  );
}

function Certification() {
  return (
    <section id="certification" className="section-pad content-section">
      <SectionHeading eyebrow="05 / Certification" title="Applied digital productivity training." copy="Additional certified training supporting professional documentation, data handling, and day-to-day office workflows." />
      <Reveal className="glass certification-card">
        <span className="certificate-icon"><Award /></span>
        <div><p>Professional certification</p><h3>{portfolio.certifications[0].name}</h3><span>{portfolio.certifications[0].issuer} · {portfolio.certifications[0].year}</span></div>
        <span className="verified"><Check /> Resume verified</span>
      </Reveal>
    </section>
  );
}

function Contact() {
  const submitContact = (event: { preventDefault: () => void; currentTarget: HTMLFormElement }) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const readField = (key: string) => {
      const value = data.get(key);
      return typeof value === 'string' ? value : '';
    };
    const name = readField('name') || 'Portfolio visitor';
    const email = readField('email');
    const message = readField('message');
    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:${portfolio.personal.email}?subject=${subject}&body=${body}`;
  };
  return (
    <section id="contact" className="section-pad contact-section">
      <div className="contact-grid">
        <Reveal className="contact-copy">
          <p className="section-kicker">06 / Contact</p>
          <h2>Let&apos;s build something dependable.</h2>
          <p>I&apos;m interested in thoughtful opportunities across mobile application development, software delivery, and networking-focused technical work.</p>
          <div className="contact-links">
            <a href={`mailto:${portfolio.personal.email}`}><span><Mail /></span><div><small>Email</small><strong>{portfolio.personal.email}</strong></div><ArrowDownRight /></a>
            <div><span><MapPin /></span><div><small>Location</small><strong>{portfolio.personal.location}</strong></div></div>
          </div>
        </Reveal>
        <Reveal className="glass contact-form-card" delay={.08}>
          <div className="form-head"><div><span /><span /><span /></div><small>CONTACT.JSON</small></div>
          <form onSubmit={submitContact}>
            <label htmlFor="name">Name</label><Input id="name" name="name" required placeholder="Your name" autoComplete="name" />
            <label htmlFor="email">Email</label><Input id="email" name="email" required type="email" placeholder="you@example.com" autoComplete="email" />
            <label htmlFor="message">Message</label><Textarea id="message" name="message" required placeholder="Tell me about the opportunity or project..." rows={5} />
            <Button type="submit" className="submit-button">Open email draft <Send /></Button>
            <p className="form-note">This form opens your email app. No data is stored on this website.</p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

export function PortfolioPage() {
  const [dark, setDark] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [loading, setLoading] = useState(true);
  const [showTop, setShowTop] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 110, damping: 28, mass: .25 });

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 700);
    const onScroll = () => setShowTop(window.scrollY > 650);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => { window.clearTimeout(timer); window.removeEventListener('scroll', onScroll); };
  }, []);

  useEffect(() => {
    const sections = ['home', ...portfolio.navigation.map((item) => item.id)];
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActiveSection(visible.target.id);
    }, { rootMargin: '-30% 0px -55%', threshold: [0, .2, .5] });
    sections.forEach((id) => { const element = document.getElementById(id); if (element) observer.observe(element); });
    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle('dark', next);
    window.localStorage.setItem('portfolio-theme', next ? 'dark' : 'light');
  };

  return (
    <>
      <AnimatePresence>{loading && <motion.div className="page-loader" exit={{ opacity: 0 }} transition={{ duration: .35 }}><motion.div initial={{ scale: .75, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}><span>NS</span><i /></motion.div></motion.div>}</AnimatePresence>
      <motion.div className="scroll-progress" style={{ scaleX: progress }} />
      <InteractiveBackdrop />
      <Navbar activeSection={activeSection} dark={dark} onTheme={toggleTheme} />
      <main><Hero /><About /><Skills /><Experience /><Education /><Certification /><Contact /></main>
      <footer><span>© {new Date().getFullYear()} {portfolio.personal.name}</span><span>Designed for clarity. Built for growth.</span></footer>
      <AnimatePresence>{showTop && <motion.div className="to-top" initial={{ opacity: 0, scale: .8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: .8 }}><Button size="icon" aria-label="Scroll to top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}><ArrowUp /></Button></motion.div>}</AnimatePresence>
    </>
  );
}
