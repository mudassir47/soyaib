'use client'

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Scissors, Package, Clock, PenTool, Mail, MapPin, Phone, CheckCircle, Star } from "lucide-react"

export function LandingPageComponent() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white shadow-md py-4 sticky top-0 z-50">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Scissors className="h-8 w-8 text-[#2FA0A8]" />
            <span className="font-bold text-2xl text-[#2FA0A8]">The Weaver Arts India</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            {["Home", "About", "Services", "Gallery", "Testimonials", "Contact"].map((item) => (
              <Link
                key={item}
                className="text-gray-600 hover:text-[#2FA0A8] transition-colors duration-300"
                href={`#${item.toLowerCase()}`}
              >
                {item}
              </Link>
            ))}
          </nav>
          <Button className="bg-[#2FA0A8] hover:bg-[#2A8F97] text-white">Get a Quote</Button>
        </div>
      </header>

      <main className="flex-grow">
        <section id="home" className="py-20 bg-gradient-to-r from-[#2FA0A8] to-[#2A8F97] text-white">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">THE WEAVER ARTS INDIA</h1>
              <p className="text-xl md:text-2xl mb-8">"ELEGANCE IN EVERY STITCH"</p>
              <p className="text-lg mb-4">Manufacturer of export garments "SINCE 1984"</p>
              <p className="text-md mb-8">
                Now in the world of high-end fashion, we have started our own journey as exporters of quality garments
              </p>
              <Button className="bg-white text-[#2FA0A8] hover:bg-gray-100">Explore Our Collection</Button>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/placeholder.svg"
                alt="Elegant Garment"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </section>

        <section id="about" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">About Us</h2>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <Image
                  src="/placeholder.svg"
                  alt="The Weaver Arts India Workshop"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-md"
                />
              </div>
              <div className="md:w-1/2">
                <p className="text-lg mb-4">
                  Since 1974, The Weaver Arts India has been at the forefront of garment manufacturing, specializing in
                  high-quality export apparel. Our commitment to excellence is reflected in every stitch, with
                  meticulous attention given to all aspects of production, from fabric selection to final detailing.
                </p>
                <p className="text-lg mb-4">
                  Our diverse range encompasses everything from elegant party dresses and sophisticated occasion wear to
                  trendy summer collections and cozy winter lines. We pride ourselves on our versatility and ability to
                  cater to all clothing categories, meeting the varied needs of our global clientele.
                </p>
                <p className="text-lg">
                  With decades of experience and a reputation for reliability, we look forward to forging lasting
                  partnerships and delivering exceptional products to discerning customers worldwide.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Expert Manufacturing",
                  icon: Package,
                  description:
                    "Our state-of-the-art infrastructure and skilled workforce ensure the creation of exceptional clothing, guaranteeing top-notch quality in every product.",
                },
                {
                  title: "Timely Shipment",
                  icon: Clock,
                  description:
                    "We pride ourselves on punctual delivery. Our efficient logistics ensure your orders arrive on time, every time, anywhere in the world.",
                },
                {
                  title: "Collaborative Design",
                  icon: PenTool,
                  description:
                    "Work hand-in-hand with our design team to bring your vision to life. We turn your ideas into stunning, wearable art.",
                },
              ].map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <service.icon className="h-6 w-6 text-[#2FA0A8]" />
                      <span>{service.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="gallery" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Collection</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[...Array(8)].map((_, index) => (
                <div key={index} className="relative group">
                  <Image
                    src="/placeholder.svg"
                    alt={`Gallery Image ${index + 1}`}
                    width={300}
                    height={300}
                    className="rounded-lg shadow-md transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button className="bg-white text-[#2FA0A8] hover:bg-gray-100">View Details</Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "John Doe",
                  company: "Fashion Co.",
                  text: "The quality of garments from The Weaver Arts India is unmatched. Their attention to detail and commitment to excellence is evident in every piece.",
                },
                {
                  name: "Jane Smith",
                  company: "Trendy Styles Inc.",
                  text: "Working with The Weaver Arts India has been a game-changer for our business. Their timely deliveries and collaborative approach make them a valuable partner.",
                },
                {
                  name: "Mike Johnson",
                  company: "Elegant Wear Ltd.",
                  text: "The diversity of their collection is impressive. From casual wear to high-end fashion, The Weaver Arts India consistently delivers top-notch products.",
                },
              ].map((testimonial, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-center mb-4">
                      <Star className="h-5 w-5 text-yellow-400 mr-1" />
                      <Star className="h-5 w-5 text-yellow-400 mr-1" />
                      <Star className="h-5 w-5 text-yellow-400 mr-1" />
                      <Star className="h-5 w-5 text-yellow-400 mr-1" />
                      <Star className="h-5 w-5 text-yellow-400" />
                    </div>
                    <p className="mb-4">{testimonial.text}</p>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.company}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <p className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-[#2FA0A8]" />
                    <span>
                      House No.548, Mhatre compound, Behind Dharam phase-2 Dapode, Anjur Phata road, Bhiwandi-421302,
                      Thane (INDIA)
                    </span>
                  </p>
                  <p className="flex items-center space-x-2">
                    <Mail className="h-5 w-5 text-[#2FA0A8]" />
                    <a href="mailto:info@theweaverartsindia.com" className="hover:underline">
                      info@theweaverartsindia.com
                    </a>
                  </p>
                  <p className="flex items-center space-x-2">
                    <Phone className="h-5 w-5 text-[#2FA0A8]" />
                    <span>+91 XXXXXXXXXX</span>
                  </p>
                </div>
                <div className="mt-8">
                  <h4 className="text-lg font-semibold mb-2">Business Hours</h4>
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Send us a Message</h3>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#2FA0A8]"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#2FA0A8]"
                  />
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#2FA0A8]"
                  ></textarea>
                  <Button className="bg-[#2FA0A8] hover:bg-[#2A8F97] text-white w-full">Send Message</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#2FA0A8] text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {["Home", "About", "Services", "Gallery", "Contact"].map((item) => (
                  <li key={item}>
                    <Link href={`#${item.toLowerCase()}`} className="hover:underline">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Our Services</h3>
              <ul className="space-y-2">
                <li>Custom Garment Manufacturing</li>
                <li>Export Services</li>
                <li>Design Collaboration</li>
                <li>Quality Assurance</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                {["Facebook", "Twitter", "Instagram", "LinkedIn"].map((social) => (
                  <a key={social} href="#" className="hover:text-gray-200">
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/20 text-center">
            <p>&copy; {new Date().getFullYear()} The Weaver Arts India. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}