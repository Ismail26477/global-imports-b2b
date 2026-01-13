"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { TrendingUp, Users, Package, Globe, Award, Target } from "lucide-react"

const timelineData = [
  {
    year: "2009",
    title: "Company Founded",
    description: "Started with a vision to revolutionize B2B trading between China and India",
    achievement: "Established first office",
    icon: Target,
    stats: { value: "10+", label: "Initial Clients" },
  },
  {
    year: "2012",
    title: "Expansion Phase",
    description: "Expanded operations to 5 major cities with dedicated logistics team",
    achievement: "Handled 1000+ shipments",
    icon: TrendingUp,
    stats: { value: "50+", label: "Team Members" },
  },
  {
    year: "2015",
    title: "International Recognition",
    description: "Recognized as top B2B trading partner with ISO certifications",
    achievement: "Won Best Logistics Provider Award",
    icon: Award,
    stats: { value: "200+", label: "Corporate Clients" },
  },
  {
    year: "2018",
    title: "Technology Integration",
    description: "Launched AI-powered tracking and digital marketplace platform",
    achievement: "Real-time shipment tracking system",
    icon: Globe,
    stats: { value: "10K+", label: "Monthly Shipments" },
  },
  {
    year: "2021",
    title: "Global Expansion",
    description: "Expanded to Southeast Asia with new warehousing facilities",
    achievement: "Opened regional hubs in 3 countries",
    icon: Package,
    stats: { value: "50K+", label: "Total Shipments" },
  },
  {
    year: "2024",
    title: "Market Leader",
    description: "Became the leading B2B trading platform in Asia-Pacific region",
    achievement: "99.5% delivery success rate",
    icon: Users,
    stats: { value: "500+", label: "Active Clients" },
  },
]

const SuccessTimelineSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="timeline" className="py-24 bg-card relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Our Journey
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
            Year by Year
            <span className="text-gradient"> Success Story</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From a small startup to becoming Asia's leading B2B trading platform. Here's how we transformed the
            logistics industry.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-primary to-transparent opacity-30" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {timelineData.map((item, index) => {
              const Icon = item.icon
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex items-center gap-8 ${isEven ? "flex-row" : "flex-row-reverse"}`}
                >
                  {/* Content Card */}
                  <div className="flex-1">
                    <motion.div
                      whileHover={{ translateY: -4 }}
                      className="p-6 rounded-2xl bg-background border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card-hover group"
                    >
                      {/* Year Badge */}
                      <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold mb-3">
                        {item.year}
                      </div>

                      {/* Title and Achievement */}
                      <h3 className="text-2xl font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-accent font-medium text-sm mb-3">✓ {item.achievement}</p>

                      {/* Description */}
                      <p className="text-muted-foreground mb-4 leading-relaxed">{item.description}</p>

                      {/* Stat */}
                      <div className="flex items-center gap-3">
                        <div className="text-2xl font-display font-bold text-gradient">{item.stats.value}</div>
                        <div className="text-xs text-muted-foreground font-medium">{item.stats.label}</div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Center Icon Circle */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                    whileHover={{ scale: 1.15 }}
                    className="relative flex-shrink-0"
                  >
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg relative z-10">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    {/* Pulse effect */}
                    <motion.div
                      className="absolute inset-0 rounded-full bg-primary/30"
                      animate={{ scale: [1, 1.5], opacity: [1, 0] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    />
                  </motion.div>

                  {/* Empty space on other side */}
                  <div className="flex-1" />
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-6">Ready to be part of our next chapter of success?</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-semibold hover:shadow-lg transition-all duration-300"
          >
            Start Your Journey
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default SuccessTimelineSection
