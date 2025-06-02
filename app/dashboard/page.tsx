"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Shield, Bell, FileText, Users, AlertTriangle, MessageSquare, Heart } from "lucide-react"

export default function DashboardPage() {
  const [userRole] = useState("officer") // officer, family, admin

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold">Welfare Portal</span>
            </Link>
            <Badge variant="outline" className="ml-4">
              {userRole === "officer" ? "Officer" : userRole === "family" ? "Family Member" : "Administrator"}
            </Badge>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <Avatar>
              <AvatarImage src="/placeholder.svg?height=32&width=32" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, Major John Doe</h1>
          <p className="text-gray-600">Here's your welfare portal overview</p>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="schemes">Schemes</TabsTrigger>
            <TabsTrigger value="emergency">Emergency</TabsTrigger>
            <TabsTrigger value="marketplace">Marketplace</TabsTrigger>
            <TabsTrigger value="grievance">Grievance</TabsTrigger>
            <TabsTrigger value="community">Community</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Quick Stats */}
            <div className="grid md:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Applications</CardTitle>
                  <FileText className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">3</div>
                  <p className="text-xs text-muted-foreground">2 pending approval</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Emergency Contacts</CardTitle>
                  <AlertTriangle className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12</div>
                  <p className="text-xs text-muted-foreground">Available 24/7</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Community Posts</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">8</div>
                  <p className="text-xs text-muted-foreground">This week</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Grievances</CardTitle>
                  <MessageSquare className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">1</div>
                  <p className="text-xs text-muted-foreground">In progress</p>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Applications</CardTitle>
                  <CardDescription>Your latest welfare scheme applications</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <div className="flex-1">
                      <p className="font-medium">Education Assistance</p>
                      <p className="text-sm text-gray-500">Submitted 2 days ago</p>
                    </div>
                    <Badge variant="secondary">Pending</Badge>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <div className="flex-1">
                      <p className="font-medium">Medical Reimbursement</p>
                      <p className="text-sm text-gray-500">Approved yesterday</p>
                    </div>
                    <Badge variant="default" className="bg-green-100 text-green-800">
                      Approved
                    </Badge>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <div className="flex-1">
                      <p className="font-medium">Housing Allowance</p>
                      <p className="text-sm text-gray-500">Under review</p>
                    </div>
                    <Badge variant="outline">Review</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                  <CardDescription>Frequently used features</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full justify-start" variant="outline">
                    <FileText className="mr-2 h-4 w-4" />
                    Apply for New Scheme
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <AlertTriangle className="mr-2 h-4 w-4" />
                    Emergency Contact
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    File Grievance
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Users className="mr-2 h-4 w-4" />
                    Browse Marketplace
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="schemes" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Available Welfare Schemes</CardTitle>
                <CardDescription>Browse and apply for welfare schemes based on your eligibility</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <Card className="border-l-4 border-l-blue-500">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">Education Assistance</CardTitle>
                      <Badge className="w-fit bg-green-100 text-green-800">Eligible</Badge>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 mb-3">Financial support for children's education</p>
                      <Button size="sm" className="w-full">
                        Apply Now
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-green-500">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">Medical Benefits</CardTitle>
                      <Badge className="w-fit bg-green-100 text-green-800">Eligible</Badge>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 mb-3">Comprehensive healthcare coverage</p>
                      <Button size="sm" className="w-full">
                        Apply Now
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-orange-500">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">Housing Scheme</CardTitle>
                      <Badge className="w-fit bg-orange-100 text-orange-800">Partial</Badge>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 mb-3">Subsidized housing for military families</p>
                      <Button size="sm" variant="outline" className="w-full">
                        Check Eligibility
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="emergency" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-red-200">
                <CardHeader>
                  <CardTitle className="text-red-600">Emergency Contacts</CardTitle>
                  <CardDescription>24/7 support for urgent situations</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full bg-red-600 hover:bg-red-700" size="lg">
                    <AlertTriangle className="mr-2 h-5 w-5" />
                    SOS Emergency
                  </Button>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                      <span className="font-medium">Medical Emergency</span>
                      <span className="text-blue-600 font-bold">102</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                      <span className="font-medium">Base Security</span>
                      <span className="text-blue-600 font-bold">100</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                      <span className="font-medium">Family Support</span>
                      <span className="text-blue-600 font-bold">1800-XXX-XXXX</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Family Support Network</CardTitle>
                  <CardDescription>Connect with nearby military families</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded">
                      <Avatar className="h-10 w-10">
                        <AvatarFallback>SM</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <p className="font-medium">Mrs. Sarah Miller</p>
                        <p className="text-sm text-gray-500">2.5 km away • Available</p>
                      </div>
                      <Button size="sm" variant="outline">
                        Contact
                      </Button>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded">
                      <Avatar className="h-10 w-10">
                        <AvatarFallback>RK</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <p className="font-medium">Col. Rajesh Kumar</p>
                        <p className="text-sm text-gray-500">1.8 km away • Available</p>
                      </div>
                      <Button size="sm" variant="outline">
                        Contact
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="marketplace" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Resource Marketplace</CardTitle>
                <CardDescription>Share and find resources within the military community</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">Academic Books</CardTitle>
                      <Badge variant="outline">Books</Badge>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 mb-3">Engineering textbooks for sale</p>
                      <p className="font-bold text-green-600 mb-3">₹2,500</p>
                      <Button size="sm" className="w-full">
                        Contact Seller
                      </Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">Military Equipment</CardTitle>
                      <Badge variant="outline">Equipment</Badge>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 mb-3">Tactical gear in good condition</p>
                      <p className="font-bold text-green-600 mb-3">₹8,000</p>
                      <Button size="sm" className="w-full">
                        Contact Seller
                      </Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">Family Housing</CardTitle>
                      <Badge variant="outline">Housing</Badge>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 mb-3">2BHK apartment near base</p>
                      <p className="font-bold text-green-600 mb-3">₹15,000/month</p>
                      <Button size="sm" className="w-full">
                        Contact Owner
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="grievance" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>File New Grievance</CardTitle>
                  <CardDescription>Submit complaints or concerns for resolution</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full mb-4">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    File New Complaint
                  </Button>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>• Administrative issues</p>
                    <p>• Welfare scheme problems</p>
                    <p>• Housing complaints</p>
                    <p>• Medical facility issues</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Your Grievances</CardTitle>
                  <CardDescription>Track status of your submitted complaints</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="border-l-4 border-l-yellow-500 pl-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium">Housing Maintenance</h4>
                      <Badge variant="secondary">In Progress</Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">Plumbing issues in quarters</p>
                    <Progress value={60} className="h-2" />
                    <p className="text-xs text-gray-500 mt-1">Expected resolution: 3 days</p>
                  </div>

                  <div className="border-l-4 border-l-green-500 pl-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium">Canteen Service</h4>
                      <Badge className="bg-green-100 text-green-800">Resolved</Badge>
                    </div>
                    <p className="text-sm text-gray-600">Food quality improvement request</p>
                    <p className="text-xs text-gray-500 mt-1">Resolved 2 days ago</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="community" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Community Feed</CardTitle>
                <CardDescription>Connect with fellow military families and share updates</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border rounded-lg p-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <Avatar>
                      <AvatarFallback>AK</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">Mrs. Anita Kumar</p>
                      <p className="text-sm text-gray-500">2 hours ago</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-3">
                    Looking for recommendations for good schools near the cantonment area. Any suggestions for my
                    8-year-old daughter?
                  </p>
                  <div className="flex space-x-4 text-sm text-gray-500">
                    <button className="flex items-center space-x-1 hover:text-blue-600">
                      <Heart className="h-4 w-4" />
                      <span>12 likes</span>
                    </button>
                    <button className="flex items-center space-x-1 hover:text-blue-600">
                      <MessageSquare className="h-4 w-4" />
                      <span>5 comments</span>
                    </button>
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <Avatar>
                      <AvatarFallback>RS</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">Major Rajesh Singh</p>
                      <p className="text-sm text-gray-500">5 hours ago</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-3">
                    Organizing a family picnic this weekend at the base park. All families welcome! Please bring your
                    own snacks.
                  </p>
                  <div className="flex space-x-4 text-sm text-gray-500">
                    <button className="flex items-center space-x-1 hover:text-blue-600">
                      <Heart className="h-4 w-4" />
                      <span>25 likes</span>
                    </button>
                    <button className="flex items-center space-x-1 hover:text-blue-600">
                      <MessageSquare className="h-4 w-4" />
                      <span>8 comments</span>
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
