'use client'

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { CheckCircle, ArrowRight, RotateCcw } from "lucide-react";
import CareerRoadmap from "@/components/CareerRoadmap";

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

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState<keyof typeof streamResults | null>(null);
  const [isThinking, setIsThinking] = useState(false);
  const [showQuestion, setShowQuestion] = useState(true);

  const handleAnswerSelect = (value: string) => {
    setSelectedAnswer(value);
  };

  const handleNext = () => {
    if (selectedAnswer === "") return;
    
    const answerIndex = quizQuestions[currentQuestion].options.indexOf(selectedAnswer);
    const newAnswers = [...answers, answerIndex];
    setAnswers(newAnswers);
    setSelectedAnswer("");
    
    // Hide question and start thinking animation
    setShowQuestion(false);
    setIsThinking(true);
    
    // Simulate thinking delay
    setTimeout(() => {
      if (currentQuestion < quizQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setIsThinking(false);
        setShowQuestion(true);
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
        setIsThinking(false);
      }
    }, 2500); // 2.5 second thinking delay
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setSelectedAnswer("");
    setShowResult(false);
    setResult(null);
    setIsThinking(false);
    setShowQuestion(true);
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

          {/* Career Roadmap Section */}
          <div className="mt-8">
            <CareerRoadmap stream={recommendedStream} />
          </div>
        </div>
      </div>
    );
  }

  // Character animations
  const femaleCharacterVariants = {
    thinking: {
      x: [0, -10, 10, 0],
      transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
    },
    normal: {
      y: [0, -5, 0],
      transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
    }
  };

  const maleCharacterVariants = {
    thinking: {
      x: [0, 10, -10, 0],
      transition: { duration: 2.2, repeat: Infinity, ease: "easeInOut" }
    },
    normal: {
      y: [0, -7, 0],
      transition: { duration: 3.5, repeat: Infinity, ease: "easeInOut" }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-blue-50 to-green-50 py-8 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        <div className="flex items-center justify-between h-screen">
          
          {/* Female Character (Left) - Saree */}
          <motion.div 
            className="w-1/4 h-full flex items-center justify-center"
            variants={femaleCharacterVariants}
            animate={isThinking ? "thinking" : "normal"}
          >
            <div className="relative w-48 h-96 bg-gradient-to-b from-pink-200 to-orange-200 rounded-full overflow-hidden shadow-lg">
              {/* Face */}
              <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-yellow-100 rounded-full border-2 border-orange-300">
                {/* Eyes */}
                <motion.div 
                  className="absolute top-4 left-3 w-2 h-2 bg-black rounded-full"
                  animate={isThinking ? { scaleY: [1, 0.1, 1] } : {}}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div 
                  className="absolute top-4 right-3 w-2 h-2 bg-black rounded-full"
                  animate={isThinking ? { scaleY: [1, 0.1, 1] } : {}}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.1 }}
                />
                {/* Nose */}
                <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-orange-400 rounded-full" />
                {/* Mouth */}
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-4 h-2 border-b-2 border-gray-700 rounded-b-full" />
              </div>
              
              {/* Hair */}
              <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-20 h-12 bg-black rounded-t-full" />
              
              {/* Saree drape */}
              <div className="absolute top-20 left-0 w-full h-full bg-gradient-to-b from-red-300 to-red-500 opacity-80" />
              <div className="absolute top-16 left-8 w-32 h-4 bg-gold-400 opacity-60 transform -rotate-12" />
              
              {/* Thinking gesture */}
              {isThinking && (
                <motion.div 
                  className="absolute top-12 right-2 w-8 h-8 bg-yellow-100 rounded-full"
                  animate={{ x: [0, 10, 0], y: [0, -5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              )}
            </div>
          </motion.div>

          {/* Quiz Box (Center) */}
          <div className="w-1/2 px-8">
            <AnimatePresence mode="wait">
              {showQuestion && !showResult ? (
                <motion.div
                  key={currentQuestion}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-2 border-orange-200">
                    <CardHeader className="text-center">
                      <div className="flex justify-between items-center">
                        <div>
                          <CardTitle className="text-2xl text-blue-700">Career Guide Quiz</CardTitle>
                          <CardDescription className="text-gray-600">
                            Question {currentQuestion + 1} of {quizQuestions.length}
                          </CardDescription>
                        </div>
                        <Badge variant="outline" className="bg-green-100 text-green-700 border-green-300">
                          {Math.round(progress)}% Complete
                        </Badge>
                      </div>
                      <Progress value={progress} className="w-full h-2 bg-gray-200" />
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <h3 className="text-xl font-medium mb-6 text-center text-gray-800">
                          {quizQuestions[currentQuestion].question}
                        </h3>
                        
                        <RadioGroup value={selectedAnswer} onValueChange={handleAnswerSelect}>
                          {quizQuestions[currentQuestion].options.map((option, index) => (
                            <motion.div 
                              key={index} 
                              className="flex items-center space-x-3 p-4 rounded-xl border-2 hover:bg-blue-50 hover:border-blue-300 transition-all cursor-pointer"
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <RadioGroupItem value={option} id={`option-${index}`} className="text-blue-600" />
                              <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer text-gray-700 font-medium">
                                {option}
                              </Label>
                            </motion.div>
                          ))}
                        </RadioGroup>
                      </div>

                      <Button 
                        onClick={handleNext} 
                        className="w-full bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white font-semibold py-3 rounded-xl" 
                        disabled={selectedAnswer === ""}
                      >
                        {currentQuestion === quizQuestions.length - 1 ? "Complete Quiz" : "Next Question"}
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ) : isThinking ? (
                <motion.div
                  key="thinking"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center justify-center h-96"
                >
                  <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-2 border-orange-200 p-8">
                    <div className="text-center">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-4"
                      />
                      <p className="text-lg text-gray-600 font-medium">Our guides are thinking...</p>
                    </div>
                  </Card>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>

          {/* Male Character (Right) - Dhoti */}
          <motion.div 
            className="w-1/4 h-full flex items-center justify-center"
            variants={maleCharacterVariants}
            animate={isThinking ? "thinking" : "normal"}
          >
            <div className="relative w-48 h-96 bg-gradient-to-b from-blue-200 to-white rounded-full overflow-hidden shadow-lg">
              {/* Face */}
              <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-yellow-100 rounded-full border-2 border-orange-300">
                {/* Eyes */}
                <motion.div 
                  className="absolute top-4 left-3 w-2 h-2 bg-black rounded-full"
                  animate={isThinking ? { scaleY: [1, 0.1, 1] } : {}}
                  transition={{ duration: 2.1, repeat: Infinity }}
                />
                <motion.div 
                  className="absolute top-4 right-3 w-2 h-2 bg-black rounded-full"
                  animate={isThinking ? { scaleY: [1, 0.1, 1] } : {}}
                  transition={{ duration: 2.1, repeat: Infinity, delay: 0.15 }}
                />
                {/* Nose */}
                <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-orange-400 rounded-full" />
                {/* Mouth */}
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-4 h-2 border-b-2 border-gray-700 rounded-b-full" />
              </div>
              
              {/* Hair */}
              <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-20 h-12 bg-black rounded-t-full" />
              
              {/* Dhoti */}
              <div className="absolute top-20 left-0 w-full h-full bg-gradient-to-b from-white to-orange-100" />
              <div className="absolute top-24 left-4 w-40 h-3 bg-orange-400 opacity-70" />
              <div className="absolute bottom-20 left-0 w-full h-20 bg-orange-200 opacity-60" />
              
              {/* Thinking gesture */}
              {isThinking && (
                <motion.div 
                  className="absolute top-12 left-2 w-8 h-8 bg-yellow-100 rounded-full"
                  animate={{ x: [0, -10, 0], y: [0, -5, 0] }}
                  transition={{ duration: 1.7, repeat: Infinity }}
                />
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
