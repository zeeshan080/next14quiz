import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";

type Props = {};

const question = {
  questionId: "QID1",
  questionTitle: "What is 2+2?",
  options: ["1", "2", "3", "4"],
  correctAnswer: "4",
  catagoryId: "Math",
};

export default function SingleQuizPage({}: Props) {
  return (
    <main className="bg-[#000d1c] h-[100vh] flex items-center justify-center">
      <div className="flex justify-center items-center w-full">
        <Card className="w-[60%]">
          <CardHeader>
            <CardTitle>1. {question.questionTitle}</CardTitle>
          </CardHeader>
          <CardContent>
            <div>
                <RadioGroup>
              {question.options.map((option, index) => (
                  <div className="flex items-center space-x-2" key={index}>
                    <RadioGroupItem value={option} />
                    <Label>{option}</Label>
                  </div>
              ))}
              </RadioGroup>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button>Previous</Button>
            <div>
                0/10
            </div>
            <Button>Next</Button>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}
