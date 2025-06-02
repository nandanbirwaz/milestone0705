import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Shield, Search, Filter, BookOpen, Heart, Home, GraduationCap, Stethoscope, Users } from "lucide-react"

export default function SchemesPage() {
  const schemes = [
    {
      id: 1,
      title: "Children Education Allowance",
      category: "Education",
      description: "Financial assistance for children's education from KG to graduation",
      eligibility: "All serving personnel",
      amount: "Up to ₹2,00,000 per year",
      status: "eligible",
      icon: GraduationCap,
      color: "blue",
    },
    {
      id: 2,
      title: "Ex-Servicemen Contributory Health Scheme",
      category: "Medical",
      description: "Comprehensive healthcare coverage for ex-servicemen and families",
      eligibility: "Ex-servicemen and dependents",
      amount: "Full coverage",
      status: "eligible",
      icon: Stethoscope,
      color: "green",
    },
    {
      id: 3,
      title: "Armed Forces Group Insurance",
      category: "Insurance",
      description: "Life insurance coverage for serving personnel",
      eligibility: "All serving officers and JCOs/ORs",
      amount: "₹75 lakh coverage",
      status: "eligible",
      icon: Shield,
      color: "purple",
    },
    {
      id: 4,
      title: "Canteen Stores Department",
      category: "Welfare",
      description: "Subsidized goods and services for military personnel",
      eligibility: "Serving and retired personnel",
      amount: "20-40% discount",
      status: "eligible",
      icon: Users,
      color: "orange",
    },
    {
      id: 5,
      title: "Army Welfare Housing Organisation",
      category: "Housing",
      description: "Affordable housing schemes for army personnel",
      eligibility: "Serving and ex-servicemen",
      amount: "Subsidized rates",
      status: "partial",
      icon: Home,
      color: "indigo",
    },
    {
      id: 6,
      title: "Scholarship for Wards",
      category: "Education",
      description: "Merit-based scholarships for children of military personnel",
      eligibility: "Children with 60%+ marks",
      amount: "₹10,000 - ₹25,000",
      status: "not-eligible",
      icon: BookOpen,
      color: "red",
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "eligible":
        return <Badge className="bg-green-100 text-green-800">Eligible</Badge>
      case "partial":
        return <Badge className="bg-orange-100 text-orange-800">Partial Eligibility</Badge>
      case "not-eligible":
        return <Badge className="bg-red-100 text-red-800">Not Eligible</Badge>
      default:
        return <Badge variant="outline">Unknown</Badge>
    }
  }

  const getIconColor = (color: string) => {
    const colors = {
      blue: "text-blue-600",
      green: "text-green-600",
      purple: "text-purple-600",
      orange: "text-orange-600",
      indigo: "text-indigo-600",
      red: "text-red-600",
    }
    return colors[color as keyof typeof colors] || "text-gray-600"
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold">Welfare Portal</span>
          </Link>
          <div className="flex space-x-4">
            <Link href="/dashboard">
              <Button variant="outline">Dashboard</Button>
            </Link>
            <Link href="/login">
              <Button>Login</Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welfare Schemes</h1>
          <p className="text-gray-600">Browse available welfare schemes and check your eligibility</p>
        </div>

        {/* Search and Filter */}
        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input placeholder="Search schemes..." className="pl-10" />
              </div>
              <Select>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="education">Education</SelectItem>
                  <SelectItem value="medical">Medical</SelectItem>
                  <SelectItem value="housing">Housing</SelectItem>
                  <SelectItem value="insurance">Insurance</SelectItem>
                  <SelectItem value="welfare">Welfare</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Eligibility" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="eligible">Eligible</SelectItem>
                  <SelectItem value="partial">Partial</SelectItem>
                  <SelectItem value="not-eligible">Not Eligible</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" className="w-full md:w-auto">
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Schemes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {schemes.map((scheme) => {
            const IconComponent = scheme.icon
            return (
              <Card key={scheme.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg bg-gray-100`}>
                        <IconComponent className={`h-6 w-6 ${getIconColor(scheme.color)}`} />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{scheme.title}</CardTitle>
                        <Badge variant="outline" className="mt-1">
                          {scheme.category}
                        </Badge>
                      </div>
                    </div>
                    {getStatusBadge(scheme.status)}
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">{scheme.description}</CardDescription>

                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="font-medium text-gray-700">Eligibility: </span>
                      <span className="text-gray-600">{scheme.eligibility}</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Benefit: </span>
                      <span className="text-gray-600">{scheme.amount}</span>
                    </div>
                  </div>

                  <div className="mt-4 flex space-x-2">
                    {scheme.status === "eligible" ? (
                      <Button className="flex-1">Apply Now</Button>
                    ) : scheme.status === "partial" ? (
                      <Button variant="outline" className="flex-1">
                        Check Details
                      </Button>
                    ) : (
                      <Button variant="outline" className="flex-1" disabled>
                        Not Eligible
                      </Button>
                    )}
                    <Button variant="outline" size="icon">
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Help Section */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle>Need Help?</CardTitle>
            <CardDescription>Can't find what you're looking for or need assistance with applications?</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-4">
              <Button className="flex-1">Contact Support</Button>
              <Button variant="outline" className="flex-1">
                Download Scheme Guide
              </Button>
              <Button variant="outline" className="flex-1">
                FAQ
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
