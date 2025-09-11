import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  MapPin, 
  Search, 
  Filter,
  GraduationCap,
  Users,
  Wifi,
  Car,
  Book,
  Trophy
} from "lucide-react";

interface College {
  id: number;
  name: string;
  location: string;
  state: string;
  type: 'Government' | 'Private';
  courses: string[];
  cutoffPercentage: number;
  facilities: string[];
  established: number;
  studentCount: number;
}

const mockColleges: College[] = [
  {
    id: 1,
    name: "Government College of Arts & Science",
    location: "Mumbai",
    state: "Maharashtra", 
    type: "Government",
    courses: ["BA", "B.Sc", "B.Com"],
    cutoffPercentage: 85,
    facilities: ["Library", "Computer Lab", "Sports Complex", "Hostel"],
    established: 1962,
    studentCount: 2500
  },
  {
    id: 2,
    name: "Delhi University - Miranda House",
    location: "Delhi",
    state: "Delhi",
    type: "Government", 
    courses: ["BA", "B.Sc"],
    cutoffPercentage: 95,
    facilities: ["Library", "Research Lab", "Auditorium", "Hostel", "Cafeteria"],
    established: 1948,
    studentCount: 1800
  },
  {
    id: 3,
    name: "Loyola College",
    location: "Chennai",
    state: "Tamil Nadu",
    type: "Private",
    courses: ["BA", "B.Sc", "B.Com", "BBA"],
    cutoffPercentage: 88,
    facilities: ["Library", "Computer Lab", "Sports Ground", "Parking"],
    established: 1925,
    studentCount: 3200
  },
  {
    id: 4,
    name: "Presidency College",
    location: "Kolkata", 
    state: "West Bengal",
    type: "Government",
    courses: ["BA", "B.Sc"],
    cutoffPercentage: 92,
    facilities: ["Library", "Museum", "Computer Lab", "Canteen"],
    established: 1817,
    studentCount: 2100
  },
  {
    id: 5,
    name: "Bangalore University",
    location: "Bangalore",
    state: "Karnataka",
    type: "Government",
    courses: ["BA", "B.Sc", "B.Com", "BBA"],
    cutoffPercentage: 78,
    facilities: ["Library", "Computer Lab", "Sports Complex", "Hostel", "WiFi"],
    established: 1964,
    studentCount: 4500
  },
  {
    id: 6,
    name: "Christ University",
    location: "Bangalore",
    state: "Karnataka", 
    type: "Private",
    courses: ["BA", "B.Sc", "B.Com", "BBA"],
    cutoffPercentage: 83,
    facilities: ["Library", "Computer Lab", "Auditorium", "Sports Complex", "Cafeteria", "WiFi"],
    established: 1969,
    studentCount: 3800
  },
  {
    id: 7,
    name: "Jadavpur University",
    location: "Kolkata",
    state: "West Bengal",
    type: "Government",
    courses: ["BA", "B.Sc"],
    cutoffPercentage: 89,
    facilities: ["Library", "Research Lab", "Computer Lab", "Hostel"],
    established: 1955,
    studentCount: 2800
  },
  {
    id: 8,
    name: "University of Pune",
    location: "Pune",
    state: "Maharashtra",
    type: "Government", 
    courses: ["BA", "B.Sc", "B.Com"],
    cutoffPercentage: 82,
    facilities: ["Library", "Computer Lab", "Sports Ground", "Canteen", "Parking"],
    established: 1949,
    studentCount: 3600
  }
];

const facilityIcons = {
  "Library": Book,
  "Computer Lab": Users,
  "Sports Complex": Trophy,
  "Sports Ground": Trophy,
  "Hostel": MapPin,
  "WiFi": Wifi,
  "Parking": Car,
  "Cafeteria": Users,
  "Canteen": Users,
  "Auditorium": Users,
  "Research Lab": Users,
  "Museum": Book
};

const Colleges = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedState, setSelectedState] = useState<string>("all");
  const [selectedCourse, setSelectedCourse] = useState<string>("all");
  const [selectedType, setSelectedType] = useState<string>("all");

  const filteredColleges = useMemo(() => {
    return mockColleges.filter(college => {
      const matchesSearch = college.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          college.location.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesState = selectedState === "all" || college.state === selectedState;
      const matchesCourse = selectedCourse === "all" || college.courses.includes(selectedCourse);
      const matchesType = selectedType === "all" || college.type === selectedType;

      return matchesSearch && matchesState && matchesCourse && matchesType;
    });
  }, [searchTerm, selectedState, selectedCourse, selectedType]);

  const states = [...new Set(mockColleges.map(college => college.state))];
  const courses = [...new Set(mockColleges.flatMap(college => college.courses))];

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            College Directory
          </h1>
          <p className="text-xl text-muted-foreground">
            Find the perfect college for your academic journey
          </p>
        </div>

        {/* Search and Filters */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Filter className="h-5 w-5" />
              <span>Search & Filter</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search colleges..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <Select value={selectedState} onValueChange={setSelectedState}>
                <SelectTrigger>
                  <SelectValue placeholder="Select State" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All States</SelectItem>
                  {states.map(state => (
                    <SelectItem key={state} value={state}>{state}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedCourse} onValueChange={setSelectedCourse}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Course" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Courses</SelectItem>
                  {courses.map(course => (
                    <SelectItem key={course} value={course}>{course}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger>
                  <SelectValue placeholder="College Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="Government">Government</SelectItem>
                  <SelectItem value="Private">Private</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Results Summary */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Found {filteredColleges.length} colleges matching your criteria
          </p>
        </div>

        {/* College Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredColleges.map((college) => (
            <Card key={college.id} className="h-full">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl mb-2">{college.name}</CardTitle>
                    <div className="flex items-center space-x-2 text-muted-foreground mb-2">
                      <MapPin className="h-4 w-4" />
                      <span>{college.location}, {college.state}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant={college.type === 'Government' ? 'default' : 'secondary'}>
                        {college.type}
                      </Badge>
                      <Badge variant="outline">Est. {college.established}</Badge>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">{college.cutoffPercentage}%</div>
                    <div className="text-sm text-muted-foreground">Cut-off</div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Courses */}
                <div>
                  <h4 className="font-semibold mb-2 flex items-center">
                    <GraduationCap className="h-4 w-4 mr-2" />
                    Courses Offered
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {college.courses.map((course, i) => (
                      <Badge key={i} variant="outline">{course}</Badge>
                    ))}
                  </div>
                </div>

                {/* Facilities */}
                <div>
                  <h4 className="font-semibold mb-2">Facilities</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {college.facilities.map((facility, i) => {
                      const IconComponent = facilityIcons[facility as keyof typeof facilityIcons] || Users;
                      return (
                        <div key={i} className="flex items-center space-x-2 text-sm">
                          <IconComponent className="h-3 w-3 text-muted-foreground" />
                          <span>{facility}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Student Count */}
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Users className="h-4 w-4" />
                  <span>{college.studentCount.toLocaleString()} students</span>
                </div>

                <Button className="w-full" variant="outline">
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredColleges.length === 0 && (
          <div className="text-center py-12">
            <div className="text-muted-foreground text-lg">
              No colleges found matching your criteria. Try adjusting your filters.
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Colleges;