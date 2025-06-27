import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Heart } from "lucide-react"

export function Footer() {
  const footerLinks = {
    Platform: [
      { name: "How It Works", href: "/how-it-works" },
      { name: "Job Paths", href: "/job-paths" },
      { name: "Resources", href: "/resources" },
      { name: "Job Board", href: "/jobs" },
      { name: "Dashboard", href: "/dashboard" },
    ],
    Support: [
      { name: "Mentorship", href: "/mentorship" },
      { name: "Community", href: "/community" },
      { name: "Contact Us", href: "/contact" },
      { name: "Help Center", href: "/help" },
      { name: "FAQ", href: "/contact#faq" },
    ],
    Company: [
      { name: "About Us", href: "/about" },
      { name: "Success Stories", href: "/testimonials" },
      { name: "Careers", href: "/careers" },
      { name: "Press", href: "/press" },
      { name: "Blog", href: "/blog" },
    ],
    Legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Cookie Policy", href: "/cookies" },
      { name: "Refund Policy", href: "/refunds" },
    ],
  }

  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-4">
              <div className="relative">
                <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">P</span>
                </div>
                <div className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-orange-400"></div>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Pathlynk
              </span>
            </Link>
            <p className="text-muted-foreground mb-6 leading-relaxed max-w-sm">
              Empowering Nigerians to achieve their UK career dreams through structured guidance, comprehensive
              resources, and community support.
            </p>

            {/* Contact Info */}
            <div className="space-y-2 text-sm text-muted-foreground mb-6">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>hello@pathlynk.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+234 (0) 123 456 7890</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Lagos, Nigeria</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <a href="#" className="text-muted-foreground hover:text-emerald-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-emerald-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-emerald-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-emerald-600 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-emerald-600 transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© 2025 Pathlynk. Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>for Nigerian dreamers.</span>
            </div>

            <div className="flex items-center gap-4 mt-4 md:mt-0 text-sm text-muted-foreground">
              <span>🇳🇬 Proudly Nigerian</span>
              <span>•</span>
              <span>🇬🇧 UK Focused</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
