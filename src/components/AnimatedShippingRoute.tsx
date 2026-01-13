"use client"

import { motion } from "framer-motion"

const AnimatedShippingRoute = () => {
  return (
    <div className="relative w-full h-full min-h-96 flex items-center justify-center">
      {/* SVG Container for animated route */}
      <svg
        viewBox="0 0 800 600"
        className="w-full h-full"
        style={{ maxHeight: "500px" }}
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Animated gradient background waves */}
        <defs>
          <linearGradient id="oceanGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(59, 130, 246, 0.1)" />
            <stop offset="100%" stopColor="rgba(59, 130, 246, 0.3)" />
          </linearGradient>

          <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(59, 130, 246, 0)" />
            <stop offset="50%" stopColor="rgba(59, 130, 246, 0.6)" />
            <stop offset="100%" stopColor="rgba(59, 130, 246, 0)" />
          </linearGradient>

          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <linearGradient id="shipGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#1e40af" />
          </linearGradient>
        </defs>

        {/* Ocean wave background */}
        <rect width="800" height="600" fill="url(#oceanGradient)" />

        {/* Animated wave patterns */}
        <motion.path
          d="M 0 300 Q 200 250, 400 300 T 800 300 L 800 600 L 0 600 Z"
          fill="url(#oceanGradient)"
          opacity="0.2"
          animate={{
            d: [
              "M 0 300 Q 200 250, 400 300 T 800 300 L 800 600 L 0 600 Z",
              "M 0 320 Q 200 280, 400 320 T 800 320 L 800 600 L 0 600 Z",
              "M 0 300 Q 200 250, 400 300 T 800 300 L 800 600 L 0 600 Z",
            ],
          }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
        />

        {/* China location marker */}
        <g>
          <circle cx="100" cy="200" r="8" fill="#3b82f6" opacity="0.8" />
          <circle cx="100" cy="200" r="14" fill="#3b82f6" opacity="0.3" />
          <motion.circle
            cx="100"
            cy="200"
            r="14"
            fill="none"
            stroke="#3b82f6"
            strokeWidth="2"
            animate={{ r: 20, opacity: 0 }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          />
          <text x="100" y="240" textAnchor="middle" className="fill-secondary text-sm font-medium">
            China
          </text>
        </g>

        {/* India location marker */}
        <g>
          <circle cx="700" cy="280" r="8" fill="#0ea5e9" opacity="0.8" />
          <circle cx="700" cy="280" r="14" fill="#0ea5e9" opacity="0.3" />
          <motion.circle
            cx="700"
            cy="280"
            r="14"
            fill="none"
            stroke="#0ea5e9"
            strokeWidth="2"
            animate={{ r: 20, opacity: 0 }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          />
          <text x="700" y="320" textAnchor="middle" className="fill-secondary text-sm font-medium">
            India
          </text>
        </g>

        {/* Animated route path */}
        <motion.path
          d="M 100 200 Q 350 150, 600 220 T 700 280"
          stroke="url(#routeGradient)"
          strokeWidth="3"
          fill="none"
          strokeDasharray="1000"
          strokeDashoffset="1000"
          animate={{ strokeDashoffset: 0 }}
          transition={{ duration: 2, delay: 0.5 }}
        />

        {/* Animated dashed line pattern */}
        <motion.path
          d="M 100 200 Q 350 150, 600 220 T 700 280"
          stroke="#3b82f6"
          strokeWidth="2"
          fill="none"
          strokeDasharray="10, 15"
          opacity="0.4"
          animate={{ strokeDashoffset: [0, -25] }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />

        {/* Animated ship icon */}
        <motion.g
          animate={{
            offsetDistance: ["0%", "100%"],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          style={{
            offsetPath: "path('M 100 200 Q 350 150, 600 220 T 700 280')",
            offsetRotate: "auto",
          }}
        >
          {/* Ship body */}
          <g fill="url(#shipGradient)" filter="url(#glow)">
            {/* Main hull */}
            <path d="M -15 -5 L -15 5 L 15 8 L 15 -8 Z" />
            {/* Cabin */}
            <rect x="-8" y="-12" width="16" height="7" rx="2" fill="#1e40af" />
            {/* Mast */}
            <line x1="0" y1="-12" x2="0" y2="-20" stroke="#1e40af" strokeWidth="1.5" />
            {/* Flag */}
            <polygon points="0,-20 8,-18 8,-22" fill="#dc2626" opacity="0.9" />
          </g>

          {/* Ship shadow/wake effect */}
          <ellipse cx="0" cy="15" rx="20" ry="4" fill="#3b82f6" opacity="0.15" />
        </motion.g>

        {/* Decorative floating particles */}
        <motion.circle
          cx="250"
          cy="150"
          r="2"
          fill="#3b82f6"
          opacity="0.3"
          animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: 0 }}
        />
        <motion.circle
          cx="450"
          cy="180"
          r="1.5"
          fill="#3b82f6"
          opacity="0.3"
          animate={{ y: [0, -15, 0], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 3.5, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
        />
        <motion.circle
          cx="600"
          cy="160"
          r="2"
          fill="#0ea5e9"
          opacity="0.3"
          animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 3.2, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
        />
      </svg>

      {/* Statistics cards */}
      <div className="absolute bottom-8 left-8 right-8 flex gap-4 flex-wrap justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="glass rounded-lg px-4 py-3 text-center backdrop-blur-md bg-primary/10 border border-primary/20"
        >
          <p className="text-xs text-muted-foreground">Route Distance</p>
          <p className="text-lg font-semibold text-primary">2,400+ NM</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.7 }}
          className="glass rounded-lg px-4 py-3 text-center backdrop-blur-md bg-primary/10 border border-primary/20"
        >
          <p className="text-xs text-muted-foreground">Transit Time</p>
          <p className="text-lg font-semibold text-primary">12-18 Days</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.9 }}
          className="glass rounded-lg px-4 py-3 text-center backdrop-blur-md bg-primary/10 border border-primary/20"
        >
          <p className="text-xs text-muted-foreground">Reliability</p>
          <p className="text-lg font-semibold text-primary">99.8%</p>
        </motion.div>
      </div>
    </div>
  )
}

export default AnimatedShippingRoute
