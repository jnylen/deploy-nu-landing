"use client"

import Link from "next/link"
import { Rocket, Github, Twitter } from "lucide-react"

const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Rocket className="w-3 h-3 text-primary-foreground" />
              </div>
              <span className="font-bold">Deploy</span>
            </Link>
            <span className="text-muted-foreground text-sm">Coming Soon</span>
          </div>

          <p className="text-sm text-muted-foreground">
            Ship to your own servers with the ease of a managed platform.
          </p>

          <div className="flex items-center gap-4">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
