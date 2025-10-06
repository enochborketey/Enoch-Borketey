"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, ChevronRight, ExternalLink, ArrowDownRight, X, Phone, MessageCircle, } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

/**
 * Enoch Borketey Borlabi — Modern & Minimal Portfolio (Single-File React)
 *
 * How to use
 * - Drop this into a React project/page. (Works in Next.js too.)
 * - Tailwind classes are used throughout.
 * - Replace the PHOTO_URL with your hosted image (transparent PNG recommended).
 * - Update links (GitHub demo/code) and copy as needed.
 *
 * Design choices
 * - Accent color: Amber #F59E0B
 * - Clean, grid-based layout with soft shadows and rounded-2xl corners
 * - Subtle Motion via Framer Motion
 */

const _ACCENT = "#F59E0B"; // Amber
const _IMAGE = "/meee.png"; // Your profile photo

// Contact details
const CONTACT_DETAILS = {
  email: "enochborketeyborlabi@gmail.com",
  linkedin: "https://linkedin.com/in/enoch-borlabi-borketey-313740234",
  whatsapp: "https://wa.me/+233553551871", // Replace with your actual WhatsApp number
  github: "https://github.com/enochborketey",
  phone: "+233 205 584 578", // Replace with your actual phone number
  telegram: "https://t.me/enochTrades" // Replace with your actual Telegram username
};

const Section: React.FC<React.PropsWithChildren<{ id?: string; className?: string }>> = ({ id, className, children }) => (
  <section id={id} className={`mx-auto w-full max-w-6xl px-6 md:px-10 ${className || ""}`}>{children}</section>
);

const Pill: React.FC<React.PropsWithChildren<{ className?: string }>> = ({ className, children }) => (
  <span className={`inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/80 px-3 py-1 text-xs text-neutral-600 shadow-sm backdrop-blur dark:border-neutral-700 dark:bg-neutral-900/80 dark:text-neutral-300 ${className || ""}`}>{children}</span>
);


// Contact Modal Component
const ContactModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;


  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative w-full max-w-md rounded-2xl border border-neutral-200 bg-white p-6 shadow-xl"
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-1 hover:bg-neutral-100"
        >
          <X className="h-5 w-5" />
        </button>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-neutral-900">Get in Touch</h3>
          <p className="text-sm text-neutral-600">Choose your preferred way to connect</p>
        </div>

        <div className="space-y-3">
          {/* Email */}
          <div className="flex items-center gap-3 rounded-lg border border-neutral-200 p-3 hover:bg-neutral-50">
            <Mail className="h-5 w-5 text-neutral-600" />
            <div className="flex-1">
              <p className="text-sm font-medium">Email</p>
              <p className="text-sm text-neutral-600">{CONTACT_DETAILS.email}</p>
            </div>
            <button
              onClick={() => window.open(`mailto:${CONTACT_DETAILS.email}`, '_blank')}
              className="rounded-full bg-neutral-900 px-3 py-1 text-xs text-white hover:bg-neutral-800"
            >
              Send
            </button>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-3 rounded-lg border border-neutral-200 p-3 hover:bg-neutral-50">
            <Phone className="h-5 w-5 text-neutral-600" />
            <div className="flex-1">
              <p className="text-sm font-medium">Phone</p>
              <p className="text-sm text-neutral-600">{CONTACT_DETAILS.phone}</p>
            </div>
            <button
              onClick={() => window.open(`tel:${CONTACT_DETAILS.phone}`, '_blank')}
              className="rounded-full bg-neutral-900 px-3 py-1 text-xs text-white hover:bg-neutral-800"
            >
              Call
            </button>
          </div>

          {/* WhatsApp */}
          <div className="flex items-center gap-3 rounded-lg border border-neutral-200 p-3 hover:bg-neutral-50">
            <MessageCircle className="h-5 w-5 text-green-600" />
            <div className="flex-1">
              <p className="text-sm font-medium">WhatsApp</p>
              <p className="text-sm text-neutral-600">Chat with me</p>
            </div>
            <button
              onClick={() => window.open(CONTACT_DETAILS.whatsapp, '_blank')}
              className="rounded-full bg-green-600 px-3 py-1 text-xs text-white hover:bg-green-700"
            >
              Chat
            </button>
          </div>

          {/* LinkedIn */}
          <div className="flex items-center gap-3 rounded-lg border border-neutral-200 p-3 hover:bg-neutral-50">
            <svg className="h-5 w-5 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            <div className="flex-1">
              <p className="text-sm font-medium">LinkedIn</p>
              <p className="text-sm text-neutral-600">Professional profile</p>
            </div>
            <button
              onClick={() => window.open(CONTACT_DETAILS.linkedin, '_blank')}
              className="rounded-full bg-blue-600 px-3 py-1 text-xs text-white hover:bg-blue-700"
            >
              Connect
            </button>
          </div>

          {/* GitHub */}
          <div className="flex items-center gap-3 rounded-lg border border-neutral-200 p-3 hover:bg-neutral-50">
            <Github className="h-5 w-5 text-neutral-600" />
            <div className="flex-1">
              <p className="text-sm font-medium">GitHub</p>
              <p className="text-sm text-neutral-600">View my code</p>
            </div>
            <button
              onClick={() => window.open(CONTACT_DETAILS.github, '_blank')}
              className="rounded-full bg-neutral-900 px-3 py-1 text-xs text-white hover:bg-neutral-800"
            >
              View
            </button>
          </div>

          {/* Telegram */}
          <div className="flex items-center gap-3 rounded-lg border border-neutral-200 p-3 hover:bg-neutral-50">
            <svg className="h-5 w-5 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
            </svg>
            <div className="flex-1">
              <p className="text-sm font-medium">Telegram</p>
              <p className="text-sm text-neutral-600">Send a message</p>
            </div>
            <button
              onClick={() => window.open(CONTACT_DETAILS.telegram, '_blank')}
              className="rounded-full bg-blue-500 px-3 py-1 text-xs text-white hover:bg-blue-600"
            >
              Message
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default function PortfolioSite() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);


  return (
    <div className="min-h-screen scroll-smooth bg-neutral-50 text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
      {/* NAVBAR */}
      <header className="sticky top-0 z-40 w-full border-b border-neutral-200 bg-white/80 backdrop-blur dark:border-neutral-800 dark:bg-neutral-900/80">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 md:px-10">
          <div className="flex items-center gap-2 font-semibold">
            <span className="h-2.5 w-2.5 rounded-full" style={{ background: _ACCENT }} />
            <span>Enoch B. Borlabi</span>
          </div>
          <div className="hidden items-center gap-6 text-sm md:flex">
            <a href="#work" className="hover:text-neutral-600 dark:hover:text-neutral-300">Work</a>
            <a href="#about" className="hover:text-neutral-600 dark:hover:text-neutral-300">About</a>
            <a href="#skills" className="hover:text-neutral-600 dark:hover:text-neutral-300">Skills</a>
            <a href="#contact" className="hover:text-neutral-600 dark:hover:text-neutral-300">Contact</a>
          </div>
          <div className="hidden items-center gap-2 md:flex">
          
            <Button 
              onClick={() => setIsContactModalOpen(true)}
              className="rounded-full border border-neutral-200 bg-white text-neutral-900 hover:bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100 dark:hover:bg-neutral-800"
            >
              <Mail className="mr-2 h-4 w-4" /> Contact Me
            </Button>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <div className="relative overflow-hidden">
        {/* abstract dev background */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -right-40 top-[-10%] h-[520px] w-[520px] rounded-full opacity-20 blur-2xl" style={{ background: _ACCENT }} />
          <svg className="absolute bottom-0 right-0 h-64 w-96 opacity-10" viewBox="0 0 400 300" aria-hidden>
            <defs>
              <linearGradient id="g1" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0%" stopColor="#000" />
                <stop offset="100%" stopColor="#000" />
              </linearGradient>
            </defs>
            <rect width="400" height="300" fill="url(#g1)" />
            <g fill="#000">
              <text x="20" y="60" fontSize="14" opacity=".25">const Button = () =&gt; &lt;button/&gt;</text>
              <text x="20" y="90" fontSize="14" opacity=".2">npm run build</text>
              <text x="20" y="120" fontSize="14" opacity=".2">fetch('/api/projects')</text>
              <text x="20" y="150" fontSize="14" opacity=".2">return res.json()</text>
            </g>
          </svg>
        </div>

        <Section className="grid grid-cols-1 items-center gap-10 pb-20 pt-16 md:grid-cols-2 md:gap-12 md:pb-28 md:pt-24">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Pill className="mb-4">
              <span className="h-2 w-2 rounded-full" style={{ background: _ACCENT }} />
              <span>Available for hire</span>
            </Pill>
            <h1 className="mb-4 text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              Hi, I&apos;m Enoch Borketey Borlabi
            </h1>
            <h2 className="mb-6 text-2xl font-semibold md:text-3xl" style={{ color: _ACCENT }}>
              Software Engineer
            </h2>
            <p className="mb-8 max-w-xl text-lg text-neutral-700 dark:text-neutral-300">
              I design and build scalable, user-friendly web and mobile applications that deliver real-world impact.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Button asChild className="rounded-full bg-neutral-900 px-6 text-white hover:bg-neutral-800">
                <a href="#work">
                  View My Work <ChevronRight className="ml-1 h-4 w-4" />
                </a>
              </Button>
              <Button 
                onClick={() => setIsContactModalOpen(true)}
                variant="outline" 
                className="rounded-full border-neutral-300 bg-white px-6 text-neutral-900 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100"
              >
                Contact Me <ArrowDownRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </motion.div>

          {/* Photo */}
          <motion.div initial={{ opacity: 0, scale: .97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }} className="relative mx-auto w-full max-w-lg">
            <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full opacity-30 blur-xl" style={{ background: _ACCENT }} />
            <div className="relative rounded-[2rem] border border-neutral-200 bg-white p-3 shadow-lg dark:border-neutral-800 dark:bg-neutral-900">
              <div className="aspect-square overflow-hidden rounded-[1.6rem] bg-neutral-100 dark:bg-neutral-800">
                <Image src={_IMAGE} alt="Enoch portrait" fill className="h-full w-full object-cover object-center" />
              </div>
            </div>
          </motion.div>
        </Section>
      </div>

      {/* ABOUT */}
      <Section id="about" className="pb-12 md:pb-20">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
          <div className="md:col-span-1">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-500">About</h3>
          </div>
          <div className="md:col-span-2">
            <Card className="rounded-2xl border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900">
              <CardHeader>
                <CardTitle className="text-2xl">Turning ideas into reliable, elegant digital products.</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-neutral-700 dark:text-neutral-300">
                <p>
                  I&apos;m a passionate Software Engineer focused on building clean, scalable applications for the web and mobile. My approach combines technical depth with design thinking ensuring every product is not only functional but user focused.
                </p>
                <p>
                  I thrive in collaborative team environments and bring value, innovation, and reliability to every company I work with.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* WORK (VirtuPro) */}
      <Section id="work" className="pb-12 md:pb-20">
        <div className="mb-6 flex items-center justify-between">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-500">Featured Work</h3>
          <a href="#contact" className="text-sm text-neutral-600 underline-offset-4 hover:text-neutral-900 hover:underline dark:text-neutral-400 dark:hover:text-neutral-200">
            Hire me
          </a>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* VirtuPro Project */}
          <Card className="rounded-2xl border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>VirtuPro — Professional Networking & Portfolios</span>
                <Badge className="bg-neutral-900" style={{ background: _ACCENT }}>Full‑Stack</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-neutral-700 dark:text-neutral-300">
              <p>
                VirtuPro is a professional networking and portfolio platform built for creators and businesses. I developed it as a fullstack web application using <strong>React</strong>, <strong>Node.js</strong>, and <strong>MongoDB</strong>, focusing on scalability, performance, and a clean UI.
              </p>
              <p>
                Result: a responsive and intuitive platform that helps users showcase their skills and connect with opportunities.
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge variant="outline" className="rounded-full">React</Badge>
                <Badge variant="outline" className="rounded-full">Node</Badge>
                <Badge variant="outline" className="rounded-full">MongoDB</Badge>
                <Badge variant="outline" className="rounded-full">REST API</Badge>
                <Badge variant="outline" className="rounded-full">Responsive UI</Badge>
              </div>
              <div className="flex flex-wrap gap-3 pt-2">
                <Button asChild className="rounded-full bg-neutral-900 text-white hover:bg-neutral-800">
                  <a href="https://virtuproghana.com/" target="_blank" rel="noreferrer">
                    View Project <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" className="rounded-full border-neutral-300 bg-white text-neutral-900 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100">
                  <a href="https://github.com/enochborketey" target="_blank" rel="noreferrer">
                    View Code <Github className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* African Beat Project */}
          <Card className="rounded-2xl border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>African Beat — Cultural Entertainment Platform</span>
                <Badge className="bg-neutral-900" style={{ background: _ACCENT }}>FullStack</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-neutral-700 dark:text-neutral-300">
              <p>
                African Beat is a leading provider of authentic African drumming and dance experiences in Australia. I developed their digital platform featuring interactive booking systems, educational content, and cultural showcase capabilities using modern web technologies.
              </p>
              <p>
                Result: a vibrant digital presence that connects communities through the power of African music and culture, serving schools, corporate events, and cultural celebrations nationwide.
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge variant="outline" className="rounded-full">Webflow</Badge>
             
                <Badge variant="outline" className="rounded-full">Booking System</Badge>
               
              </div>
              <div className="flex flex-wrap gap-3 pt-2">
                <Button asChild className="rounded-full bg-neutral-900 text-white hover:bg-neutral-800">
                  <a href="https://africanbeat.com.au/" target="_blank" rel="noreferrer">
                    View Project <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" className="rounded-full border-neutral-300 bg-white text-neutral-900 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100">
                  <a href="https://github.com/enochborketey" target="_blank" rel="noreferrer">
                    View Code <Github className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* SKILLS */}
      <Section id="skills" className="pb-12 md:pb-20">
        <Card className="rounded-2xl border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900">
          <CardHeader>
            <CardTitle>Skills & Technologies</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div>
                <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-neutral-500">Frontend</h4>
                <ul className="space-y-2 text-neutral-700 dark:text-neutral-300">
                  <li>React, Next.js</li>
                  <li>Flutter</li>
                  <li>Tailwind CSS, shadcn/ui</li>
                </ul>
              </div>
              <div>
                <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-neutral-500">Backend</h4>
                <ul className="space-y-2 text-neutral-700 dark:text-neutral-300">
                  <li>Node.js, Express</li>
                  <li>MongoDB, PostgreSQL</li>
                  <li>REST, Auth, Caching</li>
                </ul>
              </div>
              <div>
                <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-neutral-500">Tools</h4>
                <ul className="space-y-2 text-neutral-700 dark:text-neutral-300">
                  <li>Git & GitHub</li>
                  <li>Figma</li>
                  <li>Docker, CI/CD</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </Section>

      {/* CONTACT */}
      <Section id="contact" className="pb-24">
        <div className="rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm md:p-12 dark:border-neutral-800 dark:bg-neutral-900">
          <div className="mb-6 flex items-center gap-3">
            <span className="inline-block h-2.5 w-2.5 rounded-full" style={{ background: _ACCENT }} />
            <h3 className="text-xl font-semibold">Let&apos;s build something together</h3>
          </div>
          <p className="mb-6 max-w-2xl text-neutral-700 dark:text-neutral-300">
            Interested in working together or hiring me for your team? I&apos;m always open to exciting opportunities and collaborations.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Button 
              onClick={() => setIsContactModalOpen(true)}
              className="rounded-full bg-neutral-900 text-white hover:bg-neutral-800"
            >
              <Mail className="mr-2 h-4 w-4" /> Contact Me
            </Button>
            <Button asChild variant="outline" className="rounded-full border-neutral-300 bg-white text-neutral-900 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100" >
              <a href="#work">
                View My Work <ChevronRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="border-t border-neutral-200 bg-white/70 dark:border-neutral-800 dark:bg-neutral-900/70">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 text-sm text-neutral-500 dark:text-neutral-400 md:px-10">
          <span>© {new Date().getFullYear()} Enoch Borketey Borlabi</span>
          <span>
            Built with ❤️ and clean code
          </span>
        </div>
      </footer>

      {/* Contact Modal */}
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </div>
  );
}
