import { Link } from "react-router-dom"
import { Facebook, Twitter, Instagram, Mail, Sparkles, Heart, MapPin } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-br from-primary to-accent p-3 rounded-2xl shadow-lg">
                <Sparkles className="h-6 w-6 text-primary-foreground" />
              </div>
              <div className="ml-3">
                <span className="text-xl font-bold heading-elegant bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Artisan
                </span>
                <div className="text-xs text-muted-foreground font-medium tracking-wider uppercase">Indian Crafts</div>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed max-w-sm">
              Connecting you with authentic Indian artisans and their timeless craftsmanship. Every purchase supports
              traditional art forms and sustainable livelihoods.
            </p>
            <div className="flex items-center text-sm text-muted-foreground mb-6">
              <MapPin className="w-4 h-4 mr-2 text-primary" />
              <span>Supporting artisans across 20+ Indian states</span>
            </div>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-secondary hover:bg-primary text-secondary-foreground hover:text-primary-foreground p-3 rounded-xl transition-all duration-300 hover:scale-110 shadow-sm hover:shadow-md"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="bg-secondary hover:bg-primary text-secondary-foreground hover:text-primary-foreground p-3 rounded-xl transition-all duration-300 hover:scale-110 shadow-sm hover:shadow-md"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="bg-secondary hover:bg-primary text-secondary-foreground hover:text-primary-foreground p-3 rounded-xl transition-all duration-300 hover:scale-110 shadow-sm hover:shadow-md"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-1">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">Explore</h4>
                <ul className="space-y-3">
                  <li>
                    <Link href="/" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/collections"
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      Collections
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/artisans"
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      Artisans
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                      About Us
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">Categories</h4>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/categories/ethnic-wear"
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      Ethnic Wear
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/categories/handicrafts"
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      Handicrafts
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/categories/jewelry"
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      Jewelry
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/categories/home-decor"
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      Home Decor
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="lg:col-span-1">
            <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">Stay Connected</h4>
            <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
              Get updates on new collections, artisan stories, and exclusive offers from our craft community.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:border-primary transition-colors text-sm"
              />
              <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-xl transition-all duration-300 flex items-center justify-center shadow-sm hover:shadow-md">
                <Mail size={16} className="mr-2" />
                <span className="text-sm font-medium">Subscribe</span>
              </button>
            </div>
            <p className="text-xs text-muted-foreground mt-3">
              By subscribing, you agree to our Privacy Policy and Terms of Service.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center text-sm text-muted-foreground">
              <span>&copy; 2024 Artisan Indian Crafts. Made with</span>
              <Heart className="w-4 h-4 mx-1 text-accent fill-current" />
              <span>for Indian artisans</span>
            </div>
            <div className="flex items-center space-x-6 text-xs text-muted-foreground">
              <Link href="/privacy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link href="/support" className="hover:text-primary transition-colors">
                Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
