"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import {
  Truck,
  Globe2,
  Shield,
  TrendingUp,
  Users,
  CheckCircle,
  Zap,
  Target,
  Award,
  Box,
  FileCheck,
  AlertCircle,
  ArrowRight,
  Network,
} from "lucide-react"

const coreServices = [
  {
    icon: Globe2,
    title: "Global Product Sourcing",
    description:
      "Identify the right manufacturers, verify suppliers, negotiate prices, and support white labeling & custom development.",
  },
  {
    icon: Shield,
    title: "Quality Inspection & Compliance",
    description: "Pre-production, during-production, and pre-shipment inspections with full compliance verification.",
  },
  {
    icon: Truck,
    title: "International Shipping & Logistics",
    description: "Sea freight, air freight, express courier, cargo consolidation with real-time tracking.",
  },
  {
    icon: FileCheck,
    title: "Customs Clearance",
    description: "Expert handling of export and import customs, HS code classification, duty optimization.",
  },
  {
    icon: Box,
    title: "Doorstep Delivery in India",
    description: "Port handling, inland transportation, warehouse delivery, and PAN-India logistics support.",
  },
  {
    icon: TrendingUp,
    title: "E-Commerce Solutions",
    description: "Amazon, eBay, Walmart, Etsy, Shopify support with FBA-compliant packaging and direct fulfillment.",
  },
]

const serviceDetails = [
  {
    title: "Global Product Sourcing",
    points: [
      "Supplier verification & factory background checks",
      "Price negotiation and MOQ optimization",
      "White labeling & private labeling support",
      "Custom product development & packaging",
      "Multi-category sourcing (electronics, home, kitchen, beauty, tools, FMCG, lifestyle, etc.)",
    ],
    icon: Globe2,
  },
  {
    title: "Quality Inspection & Compliance",
    points: [
      "Pre-production inspection",
      "During production inspection",
      "Pre-shipment inspection",
      "Packaging & labeling verification",
      "Compliance checks as per Indian and international regulations",
    ],
    icon: AlertCircle,
  },
  {
    title: "Customs Clearance",
    points: [
      "Export documentation & HS code classification",
      "Import duty calculation and advisory",
      "DGFT, BIS, FSSAI, WPC, and regulatory assistance",
      "Duty optimization and compliance support",
      "Zero delays and full legal compliance",
    ],
    icon: FileCheck,
  },
]

const customerSegments = [
  { icon: Users, title: "Importers & Traders", description: "Traditional and scaling importers" },
  { icon: TrendingUp, title: "E-Commerce Sellers", description: "Amazon, eBay, Shopify, and marketplace sellers" },
  { icon: Zap, title: "Startups & D2C Brands", description: "New businesses scaling globally" },
  { icon: Box, title: "Wholesalers & Distributors", description: "Multi-category distribution networks" },
  { icon: Target, title: "Corporate Procurement", description: "Enterprise procurement teams" },
]

const whyChooseUs = [
  {
    title: "One-Stop Solution",
    description: "From sourcing to delivery, everything in one place",
    icon: CheckCircle,
  },
  {
    title: "Trusted Supplier Network",
    description: "Verified manufacturers and partners across Asia",
    icon: Award,
  },
  {
    title: "Quality Assurance",
    description: "Strong quality control and inspection systems",
    icon: Shield,
  },
  {
    title: "Transparent Pricing",
    description: "Clear communication and no hidden costs",
    icon: TrendingUp,
  },
  {
    title: "Customs Expertise",
    description: "Deep knowledge of Indian & international regulations",
    icon: FileCheck,
  },
  {
    title: "Amazon Specialization",
    description: "Dedicated support for global e-commerce sellers",
    icon: Truck,
  },
]

const timeline = [
  {
    period: "2008-2018",
    title: "Foundation & Specialization",
    description:
      "Started in import business focusing on woodworking machinery and plywood raw materials. Built strong expertise in supplier management and Indian customs procedures.",
  },
  {
    period: "2018-2024",
    title: "Evolution to E-Commerce",
    description:
      "Adapted to rapid e-commerce growth, expanding to multi-category sourcing with flexible order quantities and strict quality control.",
  },
  {
    period: "2024+",
    title: "Global Trade Partnership",
    description:
      "Established Global Imports Nagpur as dedicated company bridging manufacturers with modern online sellers globally.",
  },
]

const servicesFlow = [
  {
    icon: Globe2,
    title: "Global Sourcing & Import Solutions",
    description: "Find the right manufacturers and suppliers worldwide",
  },
  {
    icon: FileCheck,
    title: "End-to-End Procurement/Company",
    description: "Complete sourcing support from negotiation to delivery",
  },
  {
    icon: AlertCircle,
    title: "Quality Inspection",
    description: "Pre-production, during, and pre-shipment quality checks",
  },
  {
    icon: Truck,
    title: "International Shipping",
    description: "Sea freight, air freight, and express courier services",
  },
  {
    icon: Shield,
    title: "Custom Clearance",
    description: "Expert customs handling and regulatory compliance",
  },
  {
    icon: Box,
    title: "Last Mile Delivery in India",
    description: "Direct delivery to your doorstep across India",
  },
]

const AboutSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 max-w-6xl" ref={ref}>
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="flex justify-center">
            <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6">
              Our Story
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Your Trusted Global Trade Partner
          </h2>
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-2xl p-8 mb-8">
            <p className="text-2xl font-semibold text-blue-900 text-center mb-2">Our Mission</p>
            <p className="text-xl text-blue-800 text-center">Hassle-free Import & Global E-Commerce Sourcing</p>
          </div>
          <p className="text-xl text-gray-600 max-w-6xl leading-relaxed">
            We simplify international trade and make hassle-free importing and global e-commerce sourcing accessible to
            businesses of all sizes. With a strong supplier network across China and major manufacturing hubs, we act as
            your single trusted partner.
          </p>
        </motion.div>

        {/* Services Flowchart Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-24"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-4 text-center">How We Work</h3>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Complete end-to-end service flow for your import and sourcing needs
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesFlow.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.08 }}
                className="relative group"
              >
                <div className="h-full p-8 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-blue-100 group-hover:bg-blue-200 transition-colors">
                        <service.icon className="h-6 w-6 text-blue-600" />
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-blue-300">{String(index + 1).padStart(2, "0")}</div>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
                {/* Arrow connector */}
                {index < servicesFlow.length - 1 && index % 3 !== 2 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                    <ArrowRight className="h-6 w-6 text-blue-400" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Supply Network & Company Evolution Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24"
        >
          {/* Supply Network */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-blue-50 to-white border border-blue-200 rounded-2xl p-8 hover:shadow-lg transition-all"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-blue-100">
                <Network className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Global Supply Network</h3>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              We have a strong, verified supplier network across{" "}
              <span className="font-semibold text-blue-600">China and other major manufacturing hubs</span> worldwide.
              This enables us to source any product category at competitive prices.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-cyan-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">Direct partnerships with verified manufacturers</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-cyan-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">Access to competitive pricing & exclusive products</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-cyan-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">Fast sourcing & production timelines</span>
              </li>
            </ul>
          </motion.div>

          {/* Company Evolution */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-cyan-50 to-white border border-cyan-200 rounded-2xl p-8 hover:shadow-lg transition-all"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-cyan-100">
                <TrendingUp className="h-6 w-6 text-cyan-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Our Evolution</h3>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              We've evolved from a{" "}
              <span className="font-semibold text-cyan-600">
                limited-category specialist to a multi-category import powerhouse
              </span>
              , adapting to market demands and customer needs.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">
                  <strong>Before:</strong> Limited product categories
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">
                  <strong>Now:</strong> Multi-category sourcing expertise
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">
                  <strong>Focus:</strong> E-commerce & global marketplace sellers
                </span>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-24"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Journey</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {timeline.map((item, index) => (
              <motion.div
                key={item.period}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="relative"
              >
                {index < timeline.length - 1 && (
                  <div className="hidden md:block absolute top-12 -right-4 w-8 h-1 bg-gradient-to-r from-blue-500 to-cyan-500" />
                )}
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 h-full border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg">
                  <div className="text-2xl font-bold text-blue-600 mb-3">{item.period}</div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* What We Do - Detailed Services Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-24"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-4 text-center">What We Do</h3>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            End-to-end solutions covering every stage of your global trade journey
          </p>
          <div className="space-y-8">
            {serviceDetails.map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 + idx * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-8 hover:border-blue-300 transition-all"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-blue-100">
                      <service.icon className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h4>
                    <ul className="space-y-2">
                      {service.points.map((point) => (
                        <li key={point} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-cyan-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Core Services Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mb-24"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Core Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreServices.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.08 }}
                className="group"
              >
                <div className="h-full p-8 rounded-2xl bg-white border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="mb-6">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-7 h-7 text-blue-600" />
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Who We Serve Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-24"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-4 text-center">Who We Serve</h3>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            From startups to enterprises, we support businesses of all sizes
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {customerSegments.map((segment, index) => (
              <motion.div
                key={segment.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100 rounded-xl p-6 text-center hover:border-blue-300 hover:shadow-lg transition-all"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <segment.icon className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{segment.title}</h4>
                <p className="text-sm text-gray-600">{segment.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Choose Us Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mb-24"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-4 text-center">Why Choose Us</h3>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Reduce risk, save time, and improve profitability with our comprehensive solutions
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 1 + index * 0.08 }}
                className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-cyan-300 hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-gradient-to-br from-cyan-100 to-blue-100">
                      <reason.icon className="h-5 w-5 text-cyan-600" />
                    </div>
                  </div>
                  <h4 className="font-semibold text-gray-900 text-lg">{reason.title}</h4>
                </div>
                <p className="text-gray-600">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* E-Commerce Marketplace Solutions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-3xl p-12 md:p-16 mb-24"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-white text-3xl md:text-4xl font-bold mb-6">E-Commerce & Amazon Solutions</h3>
            <p className="text-blue-100 text-lg mb-8">
              We specialize in supporting Amazon USA, Amazon UK, Amazon Europe, Amazon UAE, and other global
              marketplaces.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Product research & sourcing for Amazon",
                "Private label & brand development",
                "Amazon-compliant packaging & labeling",
                "Direct shipping to FBA warehouses",
                "Export documentation for international markets",
                "Costing, margin analysis & scalability planning",
              ].map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -10 : 10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 1.2 + index * 0.08 }}
                  className="flex items-center justify-start gap-3 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg"
                >
                  <CheckCircle className="h-5 w-5 text-white flex-shrink-0" />
                  <span className="text-white text-sm md:text-base">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Our Vision */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Vision</h3>
          <div className="bg-gradient-to-r from-gray-50 to-white border border-gray-200 rounded-2xl p-12">
            <p className="text-center text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
              To become a trusted global trade partner for businesses worldwide by delivering reliable sourcing,
              seamless logistics, and scalable e-commerce solutions, enabling our clients to grow without borders.
            </p>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl p-12 md:p-16"
        >
          <h3 className="text-white text-3xl font-bold mb-12 text-center">By The Numbers</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "16+", label: "Years Experience" },
              { value: "50K+", label: "Shipments Delivered" },
              { value: "6+", label: "E-Commerce Platforms" },
              { value: "99.5%", label: "Delivery Success" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1.6 + index * 0.1, type: "spring" }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
                <p className="text-blue-100 text-sm md:text-base">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection
