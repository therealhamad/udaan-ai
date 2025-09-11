import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { CheckCircle, ArrowRight, RotateCcw } from "lucide-react";

interface Question {
  id: number;
  question: string;
  options: string[];
  stream: 'arts' | 'science' | 'commerce' | 'vocational';
}

const quizQuestions: Question[] = [
  {
    id: 1,
    question: "Which subject interests you the most?",
    options: ["Mathematics", "History", "Biology", "Computer Programming"],
    stream: 'science'
  },
  {
    id: 2,
    question: "What type of activities do you enjoy?",
    options: ["Solving puzzles", "Writing stories", "Managing finances", "Building things"],
    stream: 'science'
  },
  {
    id: 3,
    question: "Which career appeals to you most?",
    options: ["Teacher", "Doctor", "Business Owner", "Artist"],
    stream: 'science'
  },
  {
    id: 4,
    question: "How do you prefer to work?",
    options: ["With data and numbers", "With people and ideas", "With money and investments", "With hands-on projects"],
    stream: 'science'
  },
  {
    id: 5,
    question: "What motivates you most?",
    options: ["Discovering new things", "Expressing creativity", "Making profit", "Creating useful products"],
    stream: 'science'
  },
  {
    id: 6,
    question: "Which environment suits you best?",
    options: ["Laboratory", "Studio", "Office", "Workshop"],
    stream: 'science'
  },
  {
    id: 7,
    question: "What's your preferred way of learning?",
    options: ["Experiments", "Reading", "Case studies", "Practice"],
    stream: 'science'
  },
  {
    id: 8,
    question: "Which skill comes naturally to you?",
    options: ["Analysis", "Communication", "Leadership", "Problem-solving"],
    stream: 'science'
  },
  {
    id: 9,
    question: "What type of projects excite you?",
    options: ["Research projects", "Creative projects", "Business plans", "Technical projects"],
    stream: 'science'
  },
  {
    id: 10,
    question: "Which future do you envision?",
    options: ["Scientist/Engineer", "Writer/Designer", "Entrepreneur", "Technician/Craftsperson"],
    stream: 'science'
  }
];

const streamMapping = {
  0: 'science',
  1: 'arts', 
  2: 'commerce',
  3: 'vocational'
} as const;

const streamResults = {
  science: {
    title: "Science Stream",
    description: "You have a strong analytical mind and enjoy discovering how things work.",
    careers: ["Engineer", "Doctor", "Researcher", "Data Scientist"],
    color: "bg-blue-500"
  },
  arts: {
    title: "Arts Stream", 
    description: "You're creative and enjoy expressing ideas through various mediums.",
    careers: ["Writer", "Designer", "Teacher", "Psychologist"],
    color: "bg-purple-500"
  },
  commerce: {
    title: "Commerce Stream",
    description: "You have strong business acumen and enjoy working with finances.",
    careers: ["Accountant", "Manager", "Entrepreneur", "Financial Advisor"],
    color: "bg-green-500"
  },
  vocational: {
    title: "Vocational Training",
    description: "You prefer hands-on work and practical skill development.",
    careers: ["Technician", "Chef", "Mechanic", "Designer"],
    color: "bg-orange-500"
  }
};

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState<keyof typeof streamResults | null>(null);

  const handleAnswerSelect = (value: string) => {
    setSelectedAnswer(value);
  };

  const handleNext = () => {
    if (selectedAnswer === "") return;
    
    const answerIndex = quizQuestions[currentQuestion].options.indexOf(selectedAnswer);
    const newAnswers = [...answers, answerIndex];
    setAnswers(newAnswers);
    setSelectedAnswer("");

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate result
      const streamCounts = { science: 0, arts: 0, commerce: 0, vocational: 0 };
      newAnswers.forEach(answerIdx => {
        const stream = streamMapping[answerIdx as keyof typeof streamMapping];
        streamCounts[stream]++;
      });
      
      const recommendedStream = Object.keys(streamCounts).reduce((a, b) => 
        streamCounts[a as keyof typeof streamCounts] > streamCounts[b as keyof typeof streamCounts] ? a : b
      ) as keyof typeof streamResults;
      
      setResult(recommendedStream);
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setSelectedAnswer("");
    setShowResult(false);
    setResult(null);
  };

  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;

  if (showResult && result) {
    const streamInfo = streamResults[result];
    return (
      <div className="min-h-screen bg-background py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-2xl">Quiz Complete!</CardTitle>
              <CardDescription>Here's your recommended stream</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <Badge className={`${streamInfo.color} text-white text-lg px-4 py-2`}>
                  {streamInfo.title}
                </Badge>
                <p className="text-muted-foreground mt-4">{streamInfo.description}</p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-3">Potential Career Paths:</h3>
                <div className="grid grid-cols-2 gap-2">
                  {streamInfo.careers.map((career, index) => (
                    <div key={index} className="p-3 bg-muted rounded-lg text-center">
                      {career}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <Button onClick={resetQuiz} variant="outline" className="flex-1">
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Retake Quiz
                </Button>
                <Button className="flex-1">
                  Explore Courses
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle>Aptitude Quiz</CardTitle>
                <CardDescription>
                  Question {currentQuestion + 1} of {quizQuestions.length}
                </CardDescription>
              </div>
              <Badge variant="outline">{Math.round(progress)}% Complete</Badge>
            </div>
            <Progress value={progress} className="w-full" />
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-4">
                {quizQuestions[currentQuestion].question}
              </h3>
              
              <RadioGroup value={selectedAnswer} onValueChange={handleAnswerSelect}>
                {quizQuestions[currentQuestion].options.map((option, index) => (
                  <div key={index} className="flex items-center space-x-2 p-3 rounded-lg border hover:bg-muted/50 transition-colors">
                    <RadioGroupItem value={option} id={`option-${index}`} />
                    <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
                      {option}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <Button 
              onClick={handleNext} 
              className="w-full" 
              disabled={selectedAnswer === ""}
            >
              {currentQuestion === quizQuestions.length - 1 ? "Complete Quiz" : "Next Question"}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Quiz;