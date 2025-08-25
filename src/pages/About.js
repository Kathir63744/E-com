"use client"

import { useState, useEffect } from "react"
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
  MapPin,
  ChevronLeft,
  ChevronRight
} from "lucide-react"

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState("mission")
  const [currentSlide, setCurrentSlide] = useState(0)

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

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

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      title: "Quality Products",
      subtitle: "Carefully curated for your needs"
    },
    {
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      title: "Fast Delivery",
      subtitle: "Across the country in record time"
    },
    {
      image: "https://images.unsplash.com/photo-1577655197620-704858b270ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      title: "Eco-Friendly Packaging",
      subtitle: "Sustainable solutions for a better tomorrow"
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <section className="relative h-96 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out"
          style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        <div className="absolute inset-0 flex items-center justify-center text-center text-white">
          <div className="max-w-3xl px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{slides[currentSlide].title}</h1>
            <p className="text-xl mb-8">{slides[currentSlide].subtitle}</p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors flex items-center mx-auto">
              Explore Our Products <ArrowRight size={18} className="ml-2" />
            </button>
          </div>
        </div>

        {/* Slide controls */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
        >
          <ChevronRight size={24} />
        </button>

        {/* Slide indicators */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-white' : 'bg-gray-400'}`}
            />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-4 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
                <div className="text-blue-600 flex justify-center mb-3">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-gray-800 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Story Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex border-b border-gray-200 mb-6">
              <button
                className={`px-4 py-2 font-medium ${activeTab === "mission" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500"}`}
                onClick={() => setActiveTab("mission")}
              >
                Our Mission
              </button>
              <button
                className={`px-4 py-2 font-medium ${activeTab === "story" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500"}`}
                onClick={() => setActiveTab("story")}
              >
                Our Story
              </button>
              <button
                className={`px-4 py-2 font-medium ${activeTab === "approach" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500"}`}
                onClick={() => setActiveTab("approach")}
              >
                Our Approach
              </button>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              {activeTab === "mission" && (
                <div>
                  <h2 className="text-xl font-bold text-gray-800 mb-4">Our Mission</h2>
                  <p className="text-gray-600 mb-4">
                    Our mission is to make online shopping accessible, enjoyable, and hassle-free for everyone. 
                    We believe that everyone deserves access to quality products at fair prices, delivered with 
                    exceptional customer service.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start">
                      <CheckCircle size={18} className="text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium text-gray-800 mb-1">Quality Products</h3>
                        <p className="text-gray-600 text-sm">Carefully curated selection of high-quality items</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle size={18} className="text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium text-gray-800 mb-1">Fair Prices</h3>
                        <p className="text-gray-600 text-sm">Competitive pricing without compromising on quality</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle size={18} className="text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium text-gray-800 mb-1">Fast Delivery</h3>
                        <p className="text-gray-600 text-sm">Quick and reliable shipping across the country</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle size={18} className="text-green-500 mt-0.5 mr-2 flex-shrink-0" />
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
                  <h2 className="text-xl font-bold text-gray-800 mb-4">Our Story</h2>
                  <p className="text-gray-600 mb-3">
                    Founded in 2015, we started as a small boutique online store with just 50 products. 
                    Our founder, Alex Johnson, noticed a gap in the market for an e-commerce platform that 
                    focused on both quality products and exceptional customer experience.
                  </p>
                  <p className="text-gray-600 mb-3">
                    What began as a passion project quickly grew as customers responded to our curated approach 
                    to product selection and our commitment to transparency.
                  </p>
                  <p className="text-gray-600">
                    Today, we serve customers across the country with a team of dedicated professionals who share 
                    the same vision: to make online shopping better for everyone.
                  </p>
                </div>
              )}

              {activeTab === "approach" && (
                <div>
                  <h2 className="text-xl font-bold text-gray-800 mb-4">Our Approach</h2>
                  <p className="text-gray-600 mb-4">
                    We take a thoughtful approach to e-commerce that prioritizes both people and planet. 
                    Our business model is built on three key pillars:
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-blue-100 p-2 rounded-lg mr-3">
                        <Users size={20} className="text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-800 mb-1">Customer-Centricity</h3>
                        <p className="text-gray-600 text-sm">
                          Every decision we make starts with our customers' needs. From product selection to 
                          website design, we prioritize creating the best possible experience.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-green-100 p-2 rounded-lg mr-3">
                        <Globe size={20} className="text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-800 mb-1">Sustainability</h3>
                        <p className="text-gray-600 text-sm">
                          We're committed to reducing our environmental impact through eco-friendly packaging, 
                          carbon-neutral shipping, and partnerships with sustainable suppliers.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-purple-100 p-2 rounded-lg mr-3">
                        <Award size={20} className="text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-800 mb-1">Quality First</h3>
                        <p className="text-gray-600 text-sm">
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

      {/* Values Section with Banner */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center mb-10 bg-blue-50 rounded-lg overflow-hidden">
            <div className="md:w-1/2 p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Values</h2>
              <p className="text-gray-600 mb-6">
                These core principles guide everything we do, from product selection to customer service
              </p>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Learn More
              </button>
            </div>
            <div className="md:w-1/2 h-64 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80')"}}></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-md transition-shadow">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-xl text-blue-600 mb-4">
                  {value.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Meet Our Team</h2>
            <p className="text-gray-600">
              Behind our e-commerce platform is a dedicated team of professionals committed to excellence
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-40 bg-gradient-to-r from-blue-400 to-indigo-500 flex items-center justify-center text-white text-xl font-bold">
                  {member.name.split(' ')[0][0]}{member.name.split(' ')[1][0]}
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">{member.name}</h3>
                  <p className="text-blue-600 text-sm mb-2">{member.role}</p>
                  <p className="text-gray-600 text-xs">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Banner */}
      <section className="py-12 bg-blue-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Join Thousands of Happy Customers</h2>
          <p className="mb-6 opacity-90">
            Experience the difference of shopping with a company that truly cares
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Shop Now
            </button>
            <button className="bg-transparent border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </section>


    </div>
  )
}

export default AboutPage