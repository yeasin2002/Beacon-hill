import { Instagram, Facebook, Twitter } from "lucide-react"

const socialLinks = [
  { icon: Instagram, handle: "@Medica", href: "#" },
  { icon: Facebook, handle: "Medica", href: "#" },
  { icon: Twitter, handle: "@Medica", href: "#" },
]

export default function SocialLinks() {
  return (
    <div className="flex items-center space-x-6">
      {socialLinks.map((social, index) => {
        const Icon = social.icon
        return (
          <a
            key={index}
            href={social.href}
            className="flex items-center space-x-2 text-blue-600 hover:text-green-500 transition-colors"
          >
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <Icon className="w-4 h-4 text-white" />
            </div>
            <span className="text-sm font-medium">{social.handle}</span>
          </a>
        )
      })}
    </div>
  )
}
