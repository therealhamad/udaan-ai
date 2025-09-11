import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  Target, 
  GraduationCap, 
  Clock,
  TrendingUp,
  Award,
  ArrowRight,
  Calendar
} from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Welcome back, Alex! 👋
          </h1>
          <p className="text-muted-foreground text-lg">
            Continue your career discovery journey
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Target className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Quiz Progress</p>
                  <p className="text-2xl font-bold text-foreground">75%</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <BookOpen className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Courses</p>
                  <p className="text-2xl font-bold text-foreground">3</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <GraduationCap className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Colleges</p>
                  <p className="text-2xl font-bold text-foreground">12</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <Award className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Skills</p>
                  <p className="text-2xl font-bold text-foreground">8</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Career Assessment */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center space-x-2">
                      <Target className="h-5 w-5 text-primary" />
                      <span>Career Assessment</span>
                    </CardTitle>
                    <CardDescription>
                      Complete your assessment to get personalized recommendations
                    </CardDescription>
                  </div>
                  <Badge variant="secondary">3/4 Complete</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Progress value={75} className="w-full" />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Progress: 75% complete</span>
                    <span>~5 minutes remaining</span>
                  </div>
                  <Button className="w-full sm:w-auto">
                    Continue Assessment
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Recommended Courses */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BookOpen className="h-5 w-5 text-accent" />
                  <span>Recommended Courses</span>
                </CardTitle>
                <CardDescription>
                  Courses tailored to your interests and career goals
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 border border-border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-foreground">Introduction to Data Science</h4>
                      <Badge>Beginner</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      Learn the fundamentals of data analysis and visualization
                    </p>
                    <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                      <span className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        6 weeks
                      </span>
                      <span className="flex items-center">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        4.8 rating
                      </span>
                    </div>
                  </div>

                  <div className="p-4 border border-border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-foreground">Digital Marketing Basics</h4>
                      <Badge>Beginner</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      Master the fundamentals of digital marketing strategies
                    </p>
                    <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                      <span className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        4 weeks
                      </span>
                      <span className="flex items-center">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        4.6 rating
                      </span>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full">
                    View All Courses
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Next Steps */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span>Next Steps</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Complete career quiz</p>
                      <p className="text-xs text-muted-foreground">Finish the final section</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-muted rounded-full mt-2"></div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Explore college options</p>
                      <p className="text-xs text-muted-foreground">Browse recommended schools</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-muted rounded-full mt-2"></div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Start first course</p>
                      <p className="text-xs text-muted-foreground">Begin your learning journey</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Target className="mr-2 h-4 w-4" />
                  Take Career Quiz
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Browse Courses
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <GraduationCap className="mr-2 h-4 w-4" />
                  Explore Colleges
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Calendar className="mr-2 h-4 w-4" />
                  Plan Timeline
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
