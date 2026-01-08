"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Rocket } from "lucide-react"

const Header = () => {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl"
    >
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <Rocket className="w-4 h-4 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-foreground">Deploy</span>
        </Link>

        <a
          href="mailto:hello@deploy.nu"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          Contact
        </a>
      </div>
    </motion.header>
  )
}

export default Header
