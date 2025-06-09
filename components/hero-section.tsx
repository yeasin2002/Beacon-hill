import Image from "next/image"
import { Button } from "@/components/ui/button"
import SocialLinks from "@/components/social-links"
import DecorativeElements from "@/components/decorative-elements"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center min-h-screen py-12">
          {/* Left Content */}
          <div className="relative z-10">
            {/* Decorative Dots Pattern */}
            <div className="absolute -left-8 top-0 w-16 h-32">
              <div className="grid grid-cols-4 gap-1">
                {Array.from({ length: 32 }).map((_, i) => (
                  <div key={i} className="w-1 h-1 bg-blue-600 rounded-full opacity-60"></div>
                ))}
              </div>
            </div>

            {/* Green F Shape */}
            <div className="absolute -left-4 top-8">
              <div className="w-8 h-16 bg-green-500 relative">
                <div className="absolute top-0 right-0 w-4 h-2 bg-green-500"></div>
                <div className="absolute top-6 right-0 w-3 h-2 bg-green-500"></div>
              </div>
            </div>

            {/* Main Heading */}
            <div className="space-y-4 mb-8">
              <h1 className="text-4xl lg:text-6xl font-bold text-blue-600 leading-tight">
                YOUR HEALTH
                <br />
                IS HAPPINESS
                <br />
                FOR US
              </h1>
            </div>

            {/* Open 24 Hrs Badge and Description */}
            <div className="relative mb-8">
              <div className="bg-blue-600 rounded-3xl p-6 pr-16 max-w-lg">
                <div className="absolute -top-3 left-6">
                  <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Open 24 Hrs
                  </span>
                </div>
                <p className="text-white text-sm leading-relaxed mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 mb-12">
              <Button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg font-medium">
                Book an Appointment
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium">
                More Info
              </Button>
            </div>

            {/* Social Links */}
            <SocialLinks />
          </div>

          {/* Right Content - Doctor Image */}
          <div className="relative">
            <div className="relative z-10">
              <Image
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&h=800&fit=crop&crop=face"
                alt="Professional doctor wearing mask and white coat"
                width={600}
                height={800}
                className="w-full h-auto object-cover"
                priority
              />
            </div>

            {/* Decorative Elements */}
            <DecorativeElements />
          </div>
        </div>
      </div>
    </section>
  )
}
