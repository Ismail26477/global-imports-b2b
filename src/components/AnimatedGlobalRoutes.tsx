"use client"

import { motion } from "framer-motion"

const AnimatedGlobalRoutes = () => {
  const routes = [
    { id: "ae", name: "UAE", angle: 220, distance: 280, duration: 8 },
    { id: "eu", name: "Europe", angle: 270, distance: 300, duration: 10 },
    { id: "cn", name: "China", angle: 315, distance: 320, duration: 9 },
    { id: "jp", name: "Japan", angle: 30, distance: 320, duration: 10.5 },
    { id: "sg", name: "Singapore", angle: 120, distance: 290, duration: 8.5 },
    { id: "us", name: "USA", angle: 45, distance: 330, duration: 11 },
  ]

  const getCoordinates = (angle: number, distance: number) => {
    const radians = (angle * Math.PI) / 180
    const x = distance * Math.cos(radians)
    const y = distance * Math.sin(radians)
    return { x, y }
  }

  return (
    <div className="relative w-full h-96 md:h-[500px] rounded-3xl overflow-hidden">
      <svg
        className="absolute inset-0 w-full h-full opacity-20"
        viewBox="0 0 1000 600"
        xmlns="http://www.w3.org/2000/svg"
        style={{ filter: "blur(3px)" }}
      >
        <defs>
          <filter id="mapBlur">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
          </filter>
        </defs>
        {/* Simplified world map outline */}
        <path
          d="M 100 150 L 150 140 L 200 145 L 220 160 L 210 180 L 190 200 L 150 210 L 120 190 Z
             M 250 120 L 320 100 L 380 110 L 420 140 L 400 180 L 340 200 L 280 190 L 260 160 Z
             M 450 100 L 520 95 L 580 110 L 600 150 L 580 190 L 520 200 L 480 170 Z
             M 650 140 L 720 130 L 780 145 L 800 180 L 750 210 L 680 190 L 660 160 Z
             M 200 280 L 280 270 L 320 290 L 300 330 L 240 340 L 200 320 Z"
          fill="none"
          stroke="hsl(199, 89%, 48%)"
          strokeWidth="1.5"
          filter="url(#mapBlur)"
        />
      </svg>

      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-sky-100 to-cyan-50" />

      {/* Subtle animated background glow */}
      <motion.div
        className="absolute inset-0"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(100, 150, 255, 0.08) 0%, transparent 70%)",
        }}
      />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-300"
            style={{
              width: Math.random() > 0.5 ? "2px" : "3px",
              height: Math.random() > 0.5 ? "2px" : "3px",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.4,
            }}
            animate={{
              y: [0, -60, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 5 + Math.random() * 4,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-20"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          className="absolute w-24 h-24"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.1, 0.2],
          }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeOut" }}
          style={{
            background: "radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)",
            filter: "blur(25px)",
          }}
        />

        <motion.div
          className="relative text-6xl md:text-7xl"
          animate={{
            filter: [
              "drop-shadow(0 0 15px rgba(59, 130, 246, 0.3))",
              "drop-shadow(0 0 30px rgba(59, 130, 246, 0.5))",
              "drop-shadow(0 0 15px rgba(59, 130, 246, 0.3))",
            ],
          }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          whileHover={{ scale: 1.1 }}
        >
          🇮🇳
        </motion.div>
      </motion.div>

      {/* Routes and country nodes */}
      {routes.map((route) => {
        const { x, y } = getCoordinates(route.angle, route.distance)
        const shipEndX = (x / 1.5) * 0.92
        const shipEndY = (y / 1.5) * 0.92

        return (
          <motion.div key={route.id} className="absolute left-1/2 top-1/2">
            <svg
              width="600"
              height="600"
              viewBox="-300 -300 600 600"
              className="absolute -left-1/2 -top-1/2"
              style={{ pointerEvents: "none" }}
            >
              <defs>
                <linearGradient id={`route-${route.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgb(59, 130, 246)" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="rgb(6, 182, 212)" stopOpacity="0.25" />
                </linearGradient>
                <filter id={`glow-${route.id}`}>
                  <feGaussianBlur stdDeviation="1" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              <motion.path
                d={`M 0,0 Q ${x / 3},${y / 3} ${x / 1.5},${y / 1.5}`}
                stroke={`url(#route-${route.id})`}
                strokeWidth="2"
                fill="none"
                strokeDasharray="8,5"
                filter={`url(#glow-${route.id})`}
                animate={{
                  strokeDashoffset: [0, -13],
                }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              />
            </svg>

            {/* Animated ship */}
            <motion.div
              className="absolute text-2xl md:text-3xl"
              animate={{
                x: [0, shipEndX],
                y: [0, shipEndY],
              }}
              transition={{
                duration: route.duration,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              style={{
                filter: "drop-shadow(0 2px 8px rgba(59, 130, 246, 0.3))",
              }}
            >
              🚢
            </motion.div>

            <motion.div
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ x: shipEndX, y: shipEndY }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="flex flex-col items-center gap-2">
                <motion.div
                  className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-blue-200 to-cyan-200 border-1.5 border-blue-400 flex items-center justify-center shadow-md"
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(59, 130, 246, 0.3)",
                      "0 0 35px rgba(59, 130, 246, 0.5)",
                      "0 0 20px rgba(59, 130, 246, 0.3)",
                    ],
                  }}
                  transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  whileHover={{ scale: 1.1 }}
                >
                  <span className="text-xl md:text-2xl">🌐</span>
                </motion.div>

                <p className="text-xs md:text-sm font-semibold text-blue-700 drop-shadow-sm text-center">
                  {route.name}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )
      })}
    </div>
  )
}

export default AnimatedGlobalRoutes
