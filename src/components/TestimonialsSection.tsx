"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    name: "Rajesh Kumar",
    company: "Kumar Electronics Ltd",
    role: "Procurement Manager",
    content:
      "Global Imports has been instrumental in streamlining our import process. Their expertise in customs clearance saved us significant time and costs.",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=rajesh",
  },
  {
    name: "Liu Wei",
    company: "Shanghai Manufacturing Co.",
    role: "Export Manager",
    content:
      "Reliable, professional, and always responsive. They understand both markets perfectly and make the entire process seamless.",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=liu",
  },
  {
    name: "Priya Sharma",
    company: "Delhi Trade Associates",
    role: "Business Director",
    content:
      "Best partnership we could ask for. Their logistics network is extensive and their customer service is exceptional.",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=priya",
  },
  {
    name: "Chen Ming",
    company: "Guangzhou Textiles",
    role: "Supply Chain Head",
    content:
      "Working with Global Imports transformed our India operations. Fast, efficient, and always transparent about pricing.",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=chen",
  },
  {
    name: "Amit Patel",
    company: "Mumbai Trade Corp",
    role: "Operations Manager",
    content:
      "Outstanding service and dedication to excellence. They've helped us reduce shipping times by 40% while maintaining quality standards.",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=amit",
  },
  {
    name: "Sarah Johnson",
    company: "Western Import Solutions",
    role: "Logistics Director",
    content:
      "Global Imports attention to detail is unmatched. Every shipment is handled with care and professionalism we've come to expect.",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
  },
  {
    name: "Marco Rossi",
    company: "Europa Trade Partners",
    role: "CEO",
    content:
      "They've become an integral part of our success story. Their global reach and local expertise make them invaluable partners.",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=marco",
  },
  {
    name: "Yuki Tanaka",
    company: "Tokyo Distribution Network",
    role: "Trade Manager",
    content:
      "Exceptional communication and problem-solving abilities. They consistently exceed expectations and deliver beyond what we anticipated.",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=yuki",
  },
]

const TestimonialsSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  // Auto-rotate testimonials
  useEffect(() => {
    if (!autoPlay) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoPlay])

  const goToSlide = (index) => {
    setCurrentIndex(index)
    setAutoPlay(false)
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setAutoPlay(false)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setAutoPlay(false)
  }

  const getVisibleSlides = () => {
    const visible = []
    for (let i = 0; i < 3; i++) {
      visible.push(testimonials[(currentIndex + i) % testimonials.length])
    }
    return visible
  }

  return (
    <section id="testimonials" className="py-24 gradient-sky relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Client Success Stories
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
            Trusted by Global
            <span className="text-gradient"> B2B Partners</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Hear from our satisfied clients about their experience working with Global Imports
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Testimonials Carousel */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <AnimatePresence mode="popLayout">
              {getVisibleSlides().map((testimonial, idx) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, x: 300 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -300 }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                  }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="group"
                >
                  <div className="h-full p-8 rounded-2xl bg-gradient-to-br from-card to-card/50 border border-border/50 hover:border-primary/30 shadow-lg hover:shadow-xl transition-all duration-500 relative overflow-hidden">
                    {/* Animated gradient overlay on hover */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      initial={false}
                    />

                    <div className="relative">
                      {/* Stars with animation */}
                      <motion.div
                        className="flex gap-1 mb-4"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 }}
                      >
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <motion.div
                            key={i}
                            animate={{ rotate: [0, 10, 0] }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                          >
                            <Star className="w-4 h-4 fill-primary text-primary" />
                          </motion.div>
                        ))}
                      </motion.div>

                      {/* Testimonial Content */}
                      <p className="text-muted-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>

                      {/* Author Info */}
                      <div className="flex items-center gap-4 pt-6 border-t border-border/50">
                        <motion.img
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full ring-2 ring-primary/20"
                          whileHover={{ scale: 1.15 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        />
                        <div>
                          <p className="font-semibold text-foreground">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                          <p className="text-sm text-primary font-medium">{testimonial.company}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <motion.div
            className="flex items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Previous Button */}
            <motion.button
              onClick={prevSlide}
              whileHover={{ scale: 1.1, backgroundColor: "var(--primary)" }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full border border-primary/30 text-primary hover:text-primary-foreground transition-all duration-300 bg-transparent"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>

            {/* Dot Indicators */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "bg-primary w-8" : "bg-primary/30 w-2 hover:bg-primary/50"
                  }`}
                  whileHover={{ scale: 1.2 }}
                />
              ))}
            </div>

            {/* Next Button */}
            <motion.button
              onClick={nextSlide}
              whileHover={{ scale: 1.1, backgroundColor: "var(--primary)" }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full border border-primary/30 text-primary hover:text-primary-foreground transition-all duration-300 bg-transparent"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </motion.div>

          {/* Current Slide Counter */}
          <motion.div
            className="text-center mt-8 text-muted-foreground text-sm"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
          >
            <span className="font-semibold text-primary">{currentIndex + 1}</span> / {testimonials.length}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
