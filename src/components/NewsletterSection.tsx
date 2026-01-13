"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Mail, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

const NewsletterSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitted(true)
    setEmail("")
    setIsLoading(false)

    // Reset success message after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <section id="newsletter" className="py-24 gradient-sky relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/5 blur-3xl"
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-accent/5 blur-3xl"
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          {/* Content */}
          <div className="mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl gradient-ocean mb-6 shadow-glow"
            >
              <Mail className="w-8 h-8 text-primary-foreground" />
            </motion.div>

            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
              Stay Updated with
              <span className="text-gradient"> Industry News</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Subscribe to our newsletter for shipping tips, market updates, and exclusive offers for our B2B partners.
            </p>
          </div>

          {/* Newsletter Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-3 mb-6"
          >
            <div className="flex-1">
              <input
                type="email"
                placeholder="Enter your business email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isLoading}
                className="w-full px-6 py-3 rounded-xl bg-card border border-border focus:border-primary focus:outline-none text-foreground placeholder-muted-foreground transition-all disabled:opacity-50"
              />
            </div>
            <Button
              type="submit"
              disabled={isLoading}
              className="px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow transition-all duration-300 hover:shadow-glow-lg font-semibold"
            >
              {isLoading ? (
                <span className="animate-spin">⏳</span>
              ) : (
                <>
                  <span>Subscribe</span>
                  <Send className="w-4 h-4 ml-2" />
                </>
              )}
            </Button>
          </motion.form>

          {/* Success Message */}
          <AnimatePresence>
            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="px-4 py-3 rounded-lg bg-green-500/10 border border-green-500/20 text-green-600 font-medium"
              >
                Thanks for subscribing! Check your email for confirmation.
              </motion.div>
            )}
          </AnimatePresence>

          {/* Trust badges */}
          <p className="text-sm text-muted-foreground">
            We respect your privacy. Unsubscribe at any time. No spam, ever.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

// Add AnimatePresence import
import { AnimatePresence } from "framer-motion"

export default NewsletterSection
