"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { Play, ChevronLeft, ChevronRight } from "lucide-react"

const videos = [
  {
    id: 1,
    title: "Global Port Operations",
    description: "Watch our seamless port operations across international shipping hubs.",
    thumbnail: "/port-shipping-operations.jpg",
    duration: "5:42",
  },
  {
    id: 2,
    title: "Customs Clearance Process",
    description: "Learn how we streamline customs clearance for faster delivery.",
    thumbnail: "/customs-clearance-logistics.png",
    duration: "4:15",
  },
  {
    id: 3,
    title: "Warehouse Management",
    description: "Behind the scenes of our state-of-the-art warehousing facilities.",
    thumbnail: "/warehouse-inventory.png",
    duration: "6:20",
  },
  {
    id: 4,
    title: "Real-time Tracking System",
    description: "Our advanced tracking technology keeps you updated 24/7.",
    thumbnail: "/real-time-gps-tracking-system.jpg",
    duration: "3:58",
  },
  {
    id: 5,
    title: "Client Success Stories",
    description: "Hear from our satisfied clients about their experience.",
    thumbnail: "/business-testimonial-success.jpg",
    duration: "7:30",
  },
  {
    id: 6,
    title: "Safety & Compliance",
    description: "How we maintain the highest standards of safety and compliance.",
    thumbnail: "/safety-compliance-inspection.jpg",
    duration: "5:05",
  },
]

const VideoShowcaseSection = () => {
  const [selectedVideo, setSelectedVideo] = useState(videos[0])
  const [scrollPosition, setScrollPosition] = useState(0)
  const ref = useRef(null)
  const scrollRef = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const scroll = (direction) => {
    if (!scrollRef.current) return
    const scrollAmount = 400
    const newPosition = scrollPosition + (direction === "left" ? -scrollAmount : scrollAmount)

    scrollRef.current.scrollTo({
      left: newPosition,
      behavior: "smooth",
    })

    setScrollPosition(newPosition)
  }

  return (
    <section id="videos" className="py-24 gradient-ocean relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Video Showcase
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
            See Our Operations
            <span className="text-gradient"> in Action</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore behind-the-scenes content showcasing our world-class logistics infrastructure and customer service
            excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Featured Video Player */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <div className="relative group rounded-3xl overflow-hidden shadow-2xl">
              {/* Video Thumbnail */}
              <img
                src={selectedVideo.thumbnail || "/placeholder.svg"}
                alt={selectedVideo.title}
                className="w-full h-96 object-cover"
              />

              {/* Play Button Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-20 h-20 rounded-full bg-white/90 hover:bg-white flex items-center justify-center cursor-pointer shadow-lg"
                >
                  <Play className="w-8 h-8 text-primary fill-primary ml-1" />
                </motion.div>
              </div>

              {/* Video Duration Badge */}
              <div className="absolute bottom-4 right-4 px-3 py-1 rounded-lg bg-black/70 text-white text-sm font-medium">
                {selectedVideo.duration}
              </div>
            </div>

            {/* Video Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8"
            >
              <h3 className="text-2xl font-display font-bold text-foreground mb-3">{selectedVideo.title}</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">{selectedVideo.description}</p>
            </motion.div>
          </motion.div>

          {/* Video Info Panel */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="hidden lg:block"
          >
            <div className="p-8 rounded-2xl bg-card border border-border sticky top-8">
              <h4 className="text-lg font-display font-semibold text-foreground mb-6">Video Library</h4>

              <div className="space-y-3 max-h-96 overflow-y-auto">
                {videos.map((video) => (
                  <motion.button
                    key={video.id}
                    onClick={() => setSelectedVideo(video)}
                    whileHover={{ x: 4 }}
                    className={`w-full p-3 rounded-xl text-left transition-all duration-300 ${
                      selectedVideo.id === video.id
                        ? "bg-primary/10 border-l-4 border-primary"
                        : "hover:bg-muted border-l-4 border-transparent"
                    }`}
                  >
                    <div className="text-sm font-semibold text-foreground line-clamp-2">{video.title}</div>
                    <div className="text-xs text-muted-foreground mt-1">{video.duration}</div>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Video Carousel - Mobile/Tablet */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 lg:hidden"
        >
          <div className="flex items-center gap-4">
            <button
              onClick={() => scroll("left")}
              className="flex-shrink-0 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-foreground" />
            </button>

            <div
              ref={scrollRef}
              className="flex gap-4 overflow-x-auto scrollbar-hide flex-1"
              style={{ scrollBehavior: "smooth" }}
            >
              {videos.map((video) => (
                <motion.button
                  key={video.id}
                  onClick={() => setSelectedVideo(video)}
                  whileHover={{ y: -4 }}
                  className="flex-shrink-0 w-64 group"
                >
                  <div className="relative rounded-2xl overflow-hidden">
                    <img
                      src={video.thumbnail || "/placeholder.svg"}
                      alt={video.title}
                      className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                      <Play className="w-6 h-6 text-white fill-white ml-1" />
                    </div>
                  </div>
                  <div className="mt-3">
                    <p className="text-sm font-semibold text-foreground line-clamp-2">{video.title}</p>
                  </div>
                </motion.button>
              ))}
            </div>

            <button
              onClick={() => scroll("right")}
              className="flex-shrink-0 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-foreground" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default VideoShowcaseSection
