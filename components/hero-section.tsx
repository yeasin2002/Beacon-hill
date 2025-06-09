import doctorsImage from "@/assets/female-doctor.png";
import DecorativeElements from "@/components/decorative-elements";
import SocialLinks from "@/components/social-links";
import { Button } from "@/components/ui/button";
import Image from "next/image";

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
                  <div
                    key={i}
                    className="w-1 h-1 bg-blue-600 rounded-full opacity-60"
                  ></div>
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
                DELIVERING
                <br />
                TRUST IN
                <br />
                EVERY BOX
              </h1>
              <p className="text-lg text-gray-600">
                Supplying hospitals, clinics & frontline teams with essential
                medical products—on time, every time.
              </p>
            </div>

            {/* Stocked 24/7 Badge and Description */}
            <div className="relative mb-8">
              <div className="bg-blue-600 rounded-3xl p-6 pr-16 max-w-lg">
                <div className="absolute -top-3 left-6">
                  <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Stocked 24/7
                  </span>
                </div>
                <p className="text-white text-sm leading-relaxed mt-4">
                  We help healthcare providers stay fully equipped with
                  quality-tested supplies, delivered fast and reliably. From PPE
                  to patient care kits, we've got your inventory covered.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 mb-12">
              <Button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg font-medium">
                Request a Quote
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium">
                Explore Products
              </Button>
            </div>

            {/* Social Links */}
            <SocialLinks />
          </div>

          {/* Right Content - Doctor Image */}
          <div className="relative">
            <div className="relative z-10">
              <Image
                src={doctorsImage}
                alt="Modern medical supply warehouse with organized shelving and fulfillment staff"
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
  );
}
