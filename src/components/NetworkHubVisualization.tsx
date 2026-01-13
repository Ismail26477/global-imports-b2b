"use client"

import { motion } from "framer-motion"
import { Globe } from "lucide-react"

const NetworkHubVisualization = () => {
  const countries = [
    { code: "AE", name: "UAE", angle: -140 },
    { code: "EU", name: "Europe", angle: -100 },
    { code: "US", name: "USA", angle: -60 },
    { code: "SG", name: "Singapore", angle: 20 },
    { code: "JP", name: "Japan", angle: 80 },
    { code: "CN", name: "China", angle: 140 },
  ]

  const radius = 180

  return (
    <div className="relative w-full h-[500px] flex items-center justify-center">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 600 500" preserveAspectRatio="xMidYMid meet">
        {/* Animated connection lines */}
        {countries.map((country, index) => {
          const radians = (country.angle * Math.PI) / 180
          const x = 300 + radius * Math.cos(radians)
          const y = 250 + radius * Math.sin(radians)

          return (
            <motion.path
              key={`line-${index}`}
              d={`M 300 250 Q ${(300 + x) / 2} ${(250 + y) / 2 - 40} ${x} ${y}`}
              stroke="url(#lineGradient)"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 2,
                delay: index * 0.15,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                repeatDelay: 2,
              }}
            />
          )
        })}

        {/* Gradient definitions */}
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0EA5E9" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.8" />
          </linearGradient>
        </defs>
      </svg>

      {/* Central India Hub */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <motion.div
          className="relative"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          {/* Outer glow ring */}
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/30 via-accent/20 to-primary/30"
            style={{ width: "120px", height: "120px", marginLeft: "-60px", marginTop: "-60px" }}
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            blur="md"
          />

          {/* Main hub circle */}
          <motion.div
            className="relative w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <span className="text-2xl font-bold text-white">IN</span>
          </motion.div>

          {/* Bottom label */}
          <motion.div
            className="absolute top-24 left-1/2 transform -translate-x-1/2 flex items-center gap-1 text-primary text-sm font-medium whitespace-nowrap"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Globe className="w-4 h-4" />
            Central Hub
          </motion.div>
        </motion.div>
      </div>

      {/* Country nodes */}
      {countries.map((country, index) => {
        const radians = (country.angle * Math.PI) / 180
        const x = 300 + radius * Math.cos(radians)
        const y = 250 + radius * Math.sin(radians)

        return (
          <motion.div
            key={country.code}
            className="absolute"
            style={{ left: `${(x / 600) * 100}%`, top: `${(y / 500) * 100}%` }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              delay: index * 0.1,
              duration: 0.6,
              type: "spring",
              stiffness: 100,
            }}
          >
            <div className="flex flex-col items-center gap-2">
              {/* Country circle */}
              <motion.div
                className="w-16 h-16 rounded-full bg-white border-2 border-primary/30 flex items-center justify-center shadow-md cursor-pointer"
                whileHover={{
                  scale: 1.15,
                  borderColor: "rgb(14, 165, 233)",
                  boxShadow: "0 0 20px rgba(14, 165, 233, 0.4)",
                }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <span className="text-lg font-bold text-secondary">{country.code}</span>
              </motion.div>

              {/* Country name label */}
              <motion.p
                className="text-sm font-medium text-secondary text-center whitespace-nowrap"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                {country.name}
              </motion.p>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}

export default NetworkHubVisualization
