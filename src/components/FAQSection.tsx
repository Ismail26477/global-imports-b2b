"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ChevronDown, Truck, Clock, FileCheck, Package, MapPin, Search } from "lucide-react"

const faqs = [
  {
    category: "Shipping",
    icon: Truck,
    question: "What shipping methods do you offer?",
    answer:
      "We offer multiple shipping methods including sea freight (FCL/LCL), air freight, land transport, and express delivery. Each method is optimized for different cargo types and budgets.",
  },
  {
    category: "Timing",
    icon: Clock,
    question: "How long does international shipping typically take?",
    answer:
      "Sea freight usually takes 15-30 days, air freight 3-7 days, and express delivery 24-48 hours. Exact timelines depend on origin, destination, and cargo specifications.",
  },
  {
    category: "Customs",
    icon: FileCheck,
    question: "Do you handle customs clearance?",
    answer:
      "Yes, we provide complete customs clearance services. Our expert team handles all documentation, duty optimization, and regulatory compliance for smooth border crossing.",
  },
  {
    category: "Orders",
    icon: Package,
    question: "What is your minimum order quantity?",
    answer:
      "We work with shipments of all sizes. For smaller quantities, we offer LCL (Less Container Load) options. Large bulk orders can be optimized with FCL (Full Container Load) rates.",
  },
  {
    category: "Storage",
    icon: Package,
    question: "Do you provide warehousing and storage?",
    answer:
      "Yes, we offer secure warehousing facilities with climate control, inventory management, and order fulfillment services at competitive rates.",
  },
  {
    category: "Tracking",
    icon: MapPin,
    question: "How can I track my shipment?",
    answer:
      "All shipments come with real-time tracking. You can monitor your cargo status, location, and estimated delivery through our online tracking portal 24/7.",
  },
]

const categoryColors: { [key: string]: string } = {
  Shipping: "from-blue-500/20 to-blue-600/20 border-blue-500/30",
  Timing: "from-orange-500/20 to-orange-600/20 border-orange-500/30",
  Customs: "from-green-500/20 to-green-600/20 border-green-500/30",
  Orders: "from-purple-500/20 to-purple-600/20 border-purple-500/30",
  Storage: "from-pink-500/20 to-pink-600/20 border-pink-500/30",
  Tracking: "from-indigo-500/20 to-indigo-600/20 border-indigo-500/30",
}

const categoryTextColors: { [key: string]: string } = {
  Shipping: "text-blue-400",
  Timing: "text-orange-400",
  Customs: "text-green-400",
  Orders: "text-purple-400",
  Storage: "text-pink-400",
  Tracking: "text-indigo-400",
}

const FAQSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeIndex, setActiveIndex] = useState(0)
  const [searchQuery, setSearchQuery] = useState("")

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.category.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <section id="faq" className="py-24 gradient-dark relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Common Questions
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-primary-foreground mb-6">
            Frequently Asked
            <span className="text-gradient"> Questions</span>
          </h2>
          <p className="text-lg text-primary-foreground/60">
            Find answers to common questions about our services, shipping methods, and logistics solutions
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-3xl mx-auto mb-12"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
            <input
              type="text"
              placeholder="Search FAQs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-6 py-3 rounded-xl bg-card border border-border focus:border-primary/50 focus:outline-none transition-colors text-foreground placeholder-muted-foreground"
            />
          </div>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => {
              const IconComponent = faq.icon
              return (
                <motion.div
                  key={`${faq.category}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="mb-4"
                >
                  <button
                    onClick={() => setActiveIndex(activeIndex === index ? -1 : index)}
                    className={`w-full px-6 py-5 rounded-xl bg-gradient-to-r ${categoryColors[faq.category]} border transition-all duration-300 text-left group hover:shadow-lg hover:scale-105`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-4 flex-1">
                        <div
                          className={`p-2 rounded-lg bg-gradient-to-br ${categoryColors[faq.category]} flex-shrink-0 mt-0.5`}
                        >
                          <IconComponent className={`w-5 h-5 ${categoryTextColors[faq.category]}`} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span
                              className={`text-xs font-bold uppercase tracking-wider ${categoryTextColors[faq.category]}`}
                            >
                              {faq.category}
                            </span>
                          </div>
                          <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors text-left">
                            {faq.question}
                          </h3>
                        </div>
                      </div>
                      <motion.div
                        animate={{ rotate: activeIndex === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex-shrink-0 mt-1"
                      >
                        <ChevronDown className="w-5 h-5 text-primary" />
                      </motion.div>
                    </div>
                  </button>

                  <AnimatePresence>
                    {activeIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div
                          className={`px-6 py-5 bg-gradient-to-r ${categoryColors[faq.category]}/50 border-x border-b rounded-b-xl text-muted-foreground leading-relaxed`}
                        >
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })
          ) : (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No questions found matching your search. Try different keywords.
              </p>
            </motion.div>
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-4">Didn't find what you're looking for?</p>
          <button className="px-8 py-3 rounded-lg bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-semibold hover:shadow-lg hover:scale-105 transition-all">
            Contact Our Support Team
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQSection
