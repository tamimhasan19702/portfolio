'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Home, User, Briefcase, FolderOpen, MessageSquare } from 'lucide-react'
import { Button } from '@/app/(frontend)/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/app/(frontend)/components/ui/sheet'
import { ThemeToggle } from '@/app/(frontend)/components/theme/ThemeToggle'

const navLinks = [
  { href: '#home', label: 'Home', icon: Home },
  { href: '#about', label: 'About', icon: User },
  { href: '#skills', label: 'Skills', icon: Briefcase },
  { href: '#work', label: 'Work', icon: FolderOpen },
  { href: '#contact', label: 'Contact', icon: MessageSquare },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-body/80 backdrop-blur-md border-b border-border">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="text-xl font-bold text-title">
          Ta<span className="text-primary">req</span>mim
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-text hover:text-primary transition-colors flex items-center gap-2"
            >
              <link.icon className="h-4 w-4" />
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <Button variant="ghost" size="icon" className="cursor-pointer">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </Button>
              }
            />
            <SheetContent side="right" className="w-64">
              <div className="flex flex-col gap-4 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-lg text-text hover:text-primary transition-colors flex items-center gap-3"
                  >
                    <link.icon className="h-5 w-5" />
                    {link.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
