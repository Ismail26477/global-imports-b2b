import CustomCursor from "@/components/CustomCursor"
import Navbar from "@/components/Navbar"
import HeroSection from "@/components/HeroSection"
import AboutSection from "@/components/AboutSection"
import ServicesSection from "@/components/ServicesSection"
import VideoShowcaseSection from "@/components/VideoShowcaseSection"
import PortfolioSection from "@/components/PortfolioSection"
import TestimonialsSection from "@/components/TestimonialsSection"
import FAQSection from "@/components/FAQSection"
import NewsletterSection from "@/components/NewsletterSection"
import LiveChatWidget from "@/components/LiveChatWidget"
import Footer from "@/components/Footer"
import EnquirySection from "@/components/EnquirySection"

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <CustomCursor />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <VideoShowcaseSection />
        <PortfolioSection />
        <TestimonialsSection />
        <FAQSection />
        <NewsletterSection />
        <EnquirySection />
      </main>
      <LiveChatWidget />
      <Footer />
    </div>
  )
}

export default Index
