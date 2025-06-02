import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Users, Heart, MessageSquare, AlertTriangle, BookOpen } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">Armed Forces Welfare Portal</h1>
          </div>
          <div className="flex space-x-4">
            <Link href="/login">
              <Button variant="outline">Login</Button>
            </Link>
            <Link href="/register">
              <Button>Register</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">Serving Those Who Serve</Badge>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">Comprehensive Welfare Management</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Streamlined access to welfare schemes, emergency support, and community resources for Indian Armed Forces
            personnel and their families.
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="/dashboard">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Access Dashboard
              </Button>
            </Link>
            <Link href="/schemes">
              <Button size="lg" variant="outline">
                Browse Schemes
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Platform Features</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Multi-Role Authentication</CardTitle>
                <CardDescription>
                  Secure access for officers, family members, and administrators with role-based permissions.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <BookOpen className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle>Welfare Scheme Management</CardTitle>
                <CardDescription>
                  Complete catalog of schemes with eligibility checker and application tracking.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <AlertTriangle className="h-12 w-12 text-red-600 mb-4" />
                <CardTitle>Emergency Contact Network</CardTitle>
                <CardDescription>
                  SOS features, medical emergency connections, and family support network.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle>Resource Marketplace</CardTitle>
                <CardDescription>Share books, equipment, and housing with integrated messaging system.</CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <MessageSquare className="h-12 w-12 text-orange-600 mb-4" />
                <CardTitle>Grievance Redressal</CardTitle>
                <CardDescription>
                  Transparent complaint filing with priority classification and tracking.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Heart className="h-12 w-12 text-pink-600 mb-4" />
                <CardTitle>Community Support</CardTitle>
                <CardDescription>
                  Connect with military families and access community resources and support.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <h4 className="text-4xl font-bold mb-2">50,000+</h4>
              <p className="text-blue-100">Active Users</p>
            </div>
            <div>
              <h4 className="text-4xl font-bold mb-2">200+</h4>
              <p className="text-blue-100">Welfare Schemes</p>
            </div>
            <div>
              <h4 className="text-4xl font-bold mb-2">95%</h4>
              <p className="text-blue-100">Application Success Rate</p>
            </div>
            <div>
              <h4 className="text-4xl font-bold mb-2">24/7</h4>
              <p className="text-blue-100">Emergency Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Shield className="h-6 w-6" />
                <span className="font-bold">Armed Forces Welfare Portal</span>
              </div>
              <p className="text-gray-400">Dedicated to serving those who serve our nation.</p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Quick Links</h5>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/schemes" className="hover:text-white">
                    Welfare Schemes
                  </Link>
                </li>
                <li>
                  <Link href="/emergency" className="hover:text-white">
                    Emergency Contacts
                  </Link>
                </li>
                <li>
                  <Link href="/marketplace" className="hover:text-white">
                    Marketplace
                  </Link>
                </li>
                <li>
                  <Link href="/grievance" className="hover:text-white">
                    File Grievance
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Support</h5>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/help" className="hover:text-white">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:text-white">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Emergency</h5>
              <p className="text-gray-400 mb-2">24/7 Helpline:</p>
              <p className="text-xl font-bold text-red-400">1800-XXX-XXXX</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Armed Forces Welfare Portal. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
