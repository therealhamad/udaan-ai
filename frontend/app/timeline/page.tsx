'use client'

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Circle, Calendar, Clock, ArrowRight } from "lucide-react";

interface TimelineEvent {
  id: number;
  title: string;
  description: string;
  date: string;
  type: 'exam' | 'application' | 'result' | 'admission';
  completed: boolean;
  important: boolean;
}

const timelineEvents: TimelineEvent[] = [
  {
    id: 1,
    title: "Complete Class 12",
    description: "Focus on board exam preparation and scoring well in your subjects",
    date: "March 2024",
    type: "exam",
    completed: true,
    important: true
  },
  {
    id: 2,
    title: "Board Results",
    description: "Class 12 board examination results will be declared",
    date: "May 2024", 
    type: "result",
    completed: true,
    important: true
  },
  {
    id: 3,
    title: "College Applications Open",
    description: "Start applying to your preferred colleges and universities",
    date: "June 2024",
    type: "application",
    completed: false,
    important: true
  },
  {
    id: 4,
    title: "Entrance Exam Preparation",
    description: "Prepare for competitive entrance exams (if applicable)",
    date: "June - July 2024",
    type: "exam",
    completed: false,
    important: false
  },
  {
    id: 5,
    title: "College Admission Process",
    description: "Submit documents and complete admission formalities",
    date: "July - August 2024",
    type: "admission",
    completed: false,
    important: true
  },
  {
    id: 6,
    title: "First Semester Begins",
    description: "Start your undergraduate journey",
    date: "September 2024",
    type: "admission", 
    completed: false,
    important: true
  }
];

const typeColors = {
  exam: "bg-blue-500",
  application: "bg-green-500", 
  result: "bg-purple-500",
  admission: "bg-orange-500"
};

const typeLabels = {
  exam: "Exam",
  application: "Application",
  result: "Result", 
  admission: "Admission"
};

export default function TimelinePage() {
  const [selectedYear, setSelectedYear] = useState<string>("2024");

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Academic Timeline
          </h1>
          <p className="text-xl text-muted-foreground">
            Plan your academic journey with important dates and milestones
          </p>
        </div>

        {/* Year Selector */}
        <div className="flex justify-center mb-8">
          <div className="flex space-x-2">
            {["2024", "2025", "2026"].map((year) => (
              <Button
                key={year}
                variant={selectedYear === year ? "default" : "outline"}
                onClick={() => setSelectedYear(year)}
              >
                {year}
              </Button>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>

          {/* Timeline Events */}
          <div className="space-y-8">
            {timelineEvents.map((event, index) => (
              <div key={event.id} className="relative flex items-start space-x-6">
                {/* Timeline Node */}
                <div className="relative z-10 flex items-center justify-center">
                  <div className={`w-16 h-16 rounded-full border-4 border-background flex items-center justify-center ${
                    event.completed ? 'bg-primary' : 'bg-muted'
                  }`}>
                    {event.completed ? (
                      <CheckCircle className="w-8 h-8 text-white" />
                    ) : (
                      <Circle className="w-8 h-8 text-muted-foreground" />
                    )}
                  </div>
                  {event.important && (
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-background"></div>
                  )}
                </div>

                {/* Event Card */}
                <Card className={`flex-1 ${event.completed ? 'bg-muted/20' : ''}`}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="flex items-center space-x-3">
                          <span>{event.title}</span>
                          {event.important && (
                            <Badge variant="destructive" className="text-xs">Important</Badge>
                          )}
                        </CardTitle>
                        <div className="flex items-center space-x-2 mt-2">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">{event.date}</span>
                        </div>
                      </div>
                      <Badge 
                        className={`${typeColors[event.type]} text-white`}
                      >
                        {typeLabels[event.type]}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{event.description}</p>
                    {!event.completed && (
                      <Button variant="outline" size="sm">
                        <Clock className="h-4 w-4 mr-2" />
                        Set Reminder
                      </Button>
                    )}
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Summary */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle>Progress Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-500 mb-2">
                  {timelineEvents.filter(e => e.completed).length}
                </div>
                <div className="text-sm text-muted-foreground">Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-500 mb-2">
                  {timelineEvents.filter(e => !e.completed).length}
                </div>
                <div className="text-sm text-muted-foreground">Upcoming</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-500 mb-2">
                  {timelineEvents.filter(e => e.important && !e.completed).length}
                </div>
                <div className="text-sm text-muted-foreground">Important Pending</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center mt-8">
          <Button size="lg">
            Get Personalized Timeline
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
}
