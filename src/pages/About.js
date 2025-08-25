"use client"

import { useState } from "react"
import { 
  Truck, 
  Shield, 
  Heart, 
  Users, 
  Award, 
  Globe, 
  ArrowRight,
  CheckCircle,
  Star,
  Calendar,
  Package,
  Phone,
  Mail,
  MapPin
} from "lucide-react"

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState("mission")

  const stats = [
    { value: "50K+", label: "Happy Customers", icon: <Users size={20} /> },
    { value: "100K+", label: "Products Sold", icon: <Package size={20} /> },
    { value: "95%", label: "Satisfaction Rate", icon: <Star size={20} /> },
    { value: "2015", label: "Established", icon: <Calendar size={20} /> },
  ]

  const values = [
    {
      icon: <Heart size={24} />,
      title: "Customer First",
      description: "We prioritize our customers' needs and satisfaction above all else."
    },
    {
      icon: <Shield size={24} />,
      title: "Quality Assurance",
      description: "Every product is carefully vetted to meet our high standards."
    },
    {
      icon: <Globe size={24} />,
      title: "Sustainability",
      description: "We're committed to eco-friendly practices and reducing our carbon footprint."
    },
    {
      icon: <Award size={24} />,
      title: "Excellence",
      description: "We strive for excellence in every aspect of our business."
    }
  ]

  const team = [
    {
      name: "Alex Johnson",
      role: "Founder & CEO",
      image: "/team1.jpg",
      bio: "With over 15 years in e-commerce, Alex founded the company with a vision to revolutionize online shopping."
    },
    {
      name: "Maria Rodriguez",
      role: "Head of Design",
      image: "/team2.jpg",
      bio: "Maria leads our design team with a passion for creating beautiful, user-friendly experiences."
    },
    {
      name: "James Chen",
      role: "Tech Director",
      image: "/team3.jpg",
      bio: "James oversees our technology stack and ensures a seamless shopping experience."
    },
    {
      name: "Sarah Williams",
      role: "Customer Success",
      image: "/team4.jpg",
      bio: "Sarah and her team ensure every customer has an exceptional experience with us."
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/45-degree-fabric-light.png')] opacity-10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h1>
            <p className="text-xl opacity-90 mb-8">
              From a small idea to a thriving e-commerce platform serving thousands of customers nationwide
            </p>
            <div className="flex justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center">
                Explore Our Products <ArrowRight size={18} className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-md transition-shadow">
                <div className="text-blue-600 flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Story Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex border-b border-gray-200 mb-8">
              <button
                className={`px-6 py-3 font-medium ${activeTab === "mission" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500"}`}
                onClick={() => setActiveTab("mission")}
              >
                Our Mission
              </button>
              <button
                className={`px-6 py-3 font-medium ${activeTab === "story" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500"}`}
                onClick={() => setActiveTab("story")}
              >
                Our Story
              </button>
              <button
                className={`px-6 py-3 font-medium ${activeTab === "approach" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500"}`}
                onClick={() => setActiveTab("approach")}
              >
                Our Approach
              </button>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              {activeTab === "mission" && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Mission</h2>
                  <p className="text-gray-600 mb-6">
                    Our mission is to make online shopping accessible, enjoyable, and hassle-free for everyone. 
                    We believe that everyone deserves access to quality products at fair prices, delivered with 
                    exceptional customer service.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex items-start">
                      <CheckCircle size={20} className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium text-gray-800 mb-1">Quality Products</h3>
                        <p className="text-gray-600 text-sm">Carefully curated selection of high-quality items</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle size={20} className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium text-gray-800 mb-1">Fair Prices</h3>
                        <p className="text-gray-600 text-sm">Competitive pricing without compromising on quality</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle size={20} className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium text-gray-800 mb-1">Fast Delivery</h3>
                        <p className="text-gray-600 text-sm">Quick and reliable shipping across the country</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle size={20} className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium text-gray-800 mb-1">Eco-Conscious</h3>
                        <p className="text-gray-600 text-sm">Sustainable packaging and business practices</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "story" && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Story</h2>
                  <p className="text-gray-600 mb-4">
                    Founded in 2015, we started as a small boutique online store with just 50 products. 
                    Our founder, Alex Johnson, noticed a gap in the market for an e-commerce platform that 
                    focused on both quality products and exceptional customer experience.
                  </p>
                  <p className="text-gray-600 mb-4">
                    What began as a passion project quickly grew as customers responded to our curated approach 
                    to product selection and our commitment to transparency. By 2018, we had expanded our product 
                    range to over 1,000 items and moved to a larger warehouse to accommodate our growing operations.
                  </p>
                  <p className="text-gray-600">
                    Today, we serve customers across the country with a team of dedicated professionals who share 
                    the same vision: to make online shopping better for everyone.
                  </p>
                </div>
              )}

              {activeTab === "approach" && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Approach</h2>
                  <p className="text-gray-600 mb-6">
                    We take a thoughtful approach to e-commerce that prioritizes both people and planet. 
                    Our business model is built on three key pillars:
                  </p>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="bg-blue-100 p-3 rounded-lg mr-4">
                        <Users size={24} className="text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-800 mb-2">Customer-Centricity</h3>
                        <p className="text-gray-600">
                          Every decision we make starts with our customers' needs. From product selection to 
                          website design, we prioritize creating the best possible experience for those we serve.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-green-100 p-3 rounded-lg mr-4">
                        <Globe size={24} className="text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-800 mb-2">Sustainability</h3>
                        <p className="text-gray-600">
                          We're committed to reducing our environmental impact through eco-friendly packaging, 
                          carbon-neutral shipping options, and partnerships with suppliers who share our values.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-purple-100 p-3 rounded-lg mr-4">
                        <Award size={24} className="text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-800 mb-2">Quality First</h3>
                        <p className="text-gray-600">
                          Rather than offering thousands of mediocre products, we carefully select items that 
                          meet our quality standards and provide real value to our customers.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Values</h2>
            <p className="text-gray-600">
              These core principles guide everything we do, from product selection to customer service
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl text-center hover:shadow-md transition-shadow">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl text-blue-600 mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
            <p className="text-gray-600">
              Behind our e-commerce platform is a dedicated team of professionals committed to excellence
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 bg-gradient-to-r from-blue-400 to-indigo-500 flex items-center justify-center text-white text-2xl font-bold">
                  {member.name.split(' ')[0][0]}{member.name.split(' ')[1][0]}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">{member.name}</h3>
                  <p className="text-blue-600 mb-4">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Join Thousands of Happy Customers</h2>
            <p className="text-xl opacity-90 mb-10">
              Experience the difference of shopping with a company that truly cares
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Shop Now
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">About Us</h3>
              <p className="text-gray-400">
                Making online shopping better through quality products, fair prices, and exceptional service.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Our Story</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Customer Service</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Returns & Exchanges</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Shipping Information</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center">
                  <MapPin size={18} className="mr-3" />
                  123 Commerce Street, City, Country
                </li>
                <li className="flex items-center">
                  <Phone size={18} className="mr-3" />
                  +1 (555) 123-4567
                </li>
                <li className="flex items-center">
                  <Mail size={18} className="mr-3" />
                  hello@ecommerceexample.com
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Your E-Commerce Store. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default AboutPage