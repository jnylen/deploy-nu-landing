"use client"

import { motion } from "framer-motion"
import { Server, Shield, Zap, GitBranch, Globe, Lock } from "lucide-react"

const features = [
  {
    icon: Server,
    title: "Your Infrastructure",
    description: "Deploy to any server you control. AWS, DigitalOcean, bare metal — you choose.",
  },
  {
    icon: Zap,
    title: "Instant Deployments",
    description: "Push your code and watch it go live in seconds with zero-downtime deployments.",
  },
  {
    icon: GitBranch,
    title: "Git Integration",
    description: "Connect your GitHub, GitLab, or Bitbucket repos for automatic deployments on push.",
  },
  {
    icon: Shield,
    title: "Built-in SSL",
    description: "Automatic HTTPS for all your domains with Let's Encrypt certificates.",
  },
  {
    icon: Globe,
    title: "Global Edge Network",
    description: "Optional CDN integration for lightning-fast content delivery worldwide.",
  },
  {
    icon: Lock,
    title: "No Vendor Lock-in",
    description: "Your code, your servers, your data. Leave anytime with full portability.",
  },
]

const Features = () => {
  return (
    <section id="features" className="py-32 relative">
      <div className="absolute inset-0 bg-radial-glow opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Everything you need to <span className="text-gradient">ship fast</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            All the power of a managed platform with the freedom of self-hosting
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="gradient-border rounded-xl p-6 h-full bg-card hover:bg-surface-elevated transition-colors duration-300">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:from-primary/30 group-hover:to-accent/30 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
