import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  GraduationCap, 
  ArrowRight, 
  BookOpen, 
  Briefcase,
  TrendingUp
} from "lucide-react";

interface CareerPath {
  degree: string;
  description: string;
  duration: string;
  careers: string[];
  exams: string[];
  higherStudies: string[];
  color: string;
}

const careerPaths: CareerPath[] = [
  {
    degree: "Bachelor of Arts (BA)",
    description: "Liberal arts education focusing on humanities, social sciences, and creative fields.",
    duration: "3 years",
    careers: ["Teacher", "Writer", "Journalist", "Social Worker", "Psychologist", "Civil Services"],
    exams: ["UPSC", "State PSC", "UGC NET", "Bank PO", "SSC"],
    higherStudies: ["MA", "M.Ed", "MBA", "MSW", "PhD"],
    color: "bg-purple-500"
  },
  {
    degree: "Bachelor of Science (B.Sc)",
    description: "Science-focused education in physics, chemistry, biology, mathematics, and technology.",
    duration: "3 years", 
    careers: ["Engineer", "Doctor", "Researcher", "Data Scientist", "Lab Technician", "Professor"],
    exams: ["NEET", "JEE", "GATE", "CSIR NET", "Banking Exams"],
    higherStudies: ["M.Sc", "M.Tech", "MBA", "PhD", "Medical Studies"],
    color: "bg-blue-500"
  },
  {
    degree: "Bachelor of Commerce (B.Com)",
    description: "Business and commerce education covering accounting, finance, economics, and management.",
    duration: "3 years",
    careers: ["Accountant", "Financial Analyst", "Bank Manager", "Tax Consultant", "Auditor", "Entrepreneur"],
    exams: ["CA", "CS", "CMA", "Banking Exams", "Insurance Exams"],
    higherStudies: ["M.Com", "MBA", "CA", "CS", "CMA"],
    color: "bg-green-500"
  },
  {
    degree: "Bachelor of Business Administration (BBA)",
    description: "Management-focused education covering business operations, leadership, and entrepreneurship.",
    duration: "3 years",
    careers: ["Business Manager", "Marketing Executive", "HR Specialist", "Operations Manager", "Consultant", "Entrepreneur"],
    exams: ["CAT", "MAT", "XAT", "Banking Exams", "Management Trainee"],
    higherStudies: ["MBA", "PGDM", "M.Com", "Specialized Management Courses"],
    color: "bg-orange-500"
  }
];

const Courses = () => {
  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Course to Career Mapping
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore different undergraduate degrees and discover the career paths they can lead to
          </p>
        </div>

        {/* Career Path Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {careerPaths.map((path, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 ${path.color} rounded-lg`}>
                      <GraduationCap className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{path.degree}</CardTitle>
                      <Badge variant="outline">{path.duration}</Badge>
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground">{path.description}</p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Career Options */}
                <div>
                  <div className="flex items-center space-x-2 mb-3">
                    <Briefcase className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold">Career Options</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {path.careers.map((career, i) => (
                      <div key={i} className="p-2 bg-muted rounded-md text-sm text-center">
                        {career}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Competitive Exams */}
                <div>
                  <div className="flex items-center space-x-2 mb-3">
                    <BookOpen className="h-5 w-5 text-accent" />
                    <h3 className="font-semibold">Competitive Exams</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {path.exams.map((exam, i) => (
                      <Badge key={i} variant="secondary">{exam}</Badge>
                    ))}
                  </div>
                </div>

                {/* Higher Studies */}
                <div>
                  <div className="flex items-center space-x-2 mb-3">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold">Higher Studies</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {path.higherStudies.map((study, i) => (
                      <Badge key={i} variant="outline">{study}</Badge>
                    ))}
                  </div>
                </div>

                <Button className="w-full">
                  Explore Colleges for {path.degree.split('(')[1].replace(')', '')}
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Card className="p-8 bg-gradient-to-r from-primary/10 to-accent/10">
            <h2 className="text-2xl font-bold mb-4">Not Sure Which Path to Choose?</h2>
            <p className="text-muted-foreground mb-6">
              Take our aptitude quiz to get personalized recommendations based on your interests and strengths.
            </p>
            <Button size="lg">
              Take Aptitude Quiz
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Courses;