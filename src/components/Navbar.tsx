"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Enquiry", href: "#enquiry" },
  { name: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMobile = (e) => {
    e.stopPropagation()
    setIsMobileOpen((prev) => !prev)
  }

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-[999] transition-all duration-300
          ${
            isScrolled
              ? "bg-black/95 shadow-xl"    // SCROLLED = BLACK HEADER
              : "bg-white/95 shadow-none"  // TOP = WHITE HEADER
          }
        `}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-14 md:h-16">

            {/* MOBILE BUTTON */}
            <button
              type="button"
              onClick={toggleMobile}
              className={`${isScrolled ? "text-white" : "text-black"} lg:hidden`}
            >
              {isMobileOpen ? <X size={26} /> : <Menu size={26} />}
            </button>

            {/* LOGO */}
            <motion.a
              href="#home"
              className="flex items-center gap-0 flex-1 md:flex-none justify-center md:justify-start"
              onClick={(e) => {
                if (isMobileOpen) e.preventDefault()
              }}
            >
              <img
                src="/images/gemini-generated-image-koimevkoimevkoim-removebg-preview.png"
                alt="Global Input Logo"
                className="w-16 h-16 md:w-28 md:h-28 object-contain"
              />

              {/* LOGO TEXT COLOR BASED ON SCROLL */}
              <motion.span
                className={`font-display font-bold text-lg md:text-xl ${
                  isScrolled ? "text-white" : "text-black"
                }`}
              >
                Global Imports
              </motion.span>
            </motion.a>

            {/* DESKTOP MENU */}
            <div className="hidden lg:flex gap-8 items-center">
              {navLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium transition-colors ${
                    isScrolled
                      ? "text-white hover:text-primary"
                      : "text-black hover:text-primary"
                  }`}
                >
                  {item.name}
                </a>
              ))}

              <Button
                className={`shadow-md ${
                  isScrolled ? "bg-white text-black" : "bg-primary text-white"
                }`}
              >
                Get Enquiry
              </Button>
            </div>
          </div>
        </div>

        {/* MOBILE SIDEBAR */}
        <AnimatePresence>
          {isMobileOpen && (
            <motion.div
              initial={{ x: -260 }}
              animate={{ x: 0 }}
              exit={{ x: -260 }}
              className={`fixed top-0 left-0 w-64 h-full z-[998] backdrop-blur-xl shadow-xl
                ${isScrolled ? "bg-black/95" : "bg-white/95"}
              `}
            >
              <div className="mt-20 p-6 space-y-3">
                {navLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileOpen(false)}
                    className={`block py-3 px-4 rounded-md hover:bg-primary/10 ${
                      isScrolled ? "text-white" : "text-black"
                    }`}
                  >
                    {item.name}
                  </a>
                ))}

                <Button className="w-full mt-6 bg-primary text-white">
                  Get Enquiry
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* OVERLAY */}
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileOpen(false)}
            className="fixed inset-0 bg-black z-[997] lg:hidden"
          />
        )}
      </motion.nav>
    </>
  )
}
