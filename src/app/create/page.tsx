import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import Link from "next/link";

type Props = {};

export default function CreateQuizPage({}: Props) {
  return (
    <main className="flex justify-center items-center">
      <div className="mt-16 w-[60%]">
        <div className="text-xl text-center font-bold py-3">Create Quiz</div>
        <div className="flex justify-end">
          <Link href="/view" className="underline text-[14px]">View All Questions</Link>
        </div>

        <div className="flex flex-col gap-3">
          <div>
            <Label>Select Catagory</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select a Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Choose Catagory</SelectLabel>
                  <SelectItem value="math">Math</SelectItem>
                  <SelectItem value="history">History</SelectItem>
                  <SelectItem value="science">Science</SelectItem>
                  <SelectItem value="english">English</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label>Question</Label>
            <Input placeholder="Enter Question here..." />
          </div>
          <div className="flex flex-col gap-2">
            <Label>MCQS Options</Label>
            <Input placeholder="Enter Option 1 here..." />
            <Input placeholder="Enter Option 2 here..." />
            <Input placeholder="Enter Option 3 here..." />
            <Input placeholder="Enter Option 4 here..." />
          </div>
          <div>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select Correct Answer" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Choose Answer</SelectLabel>
                  <SelectItem value="a">A</SelectItem>
                  <SelectItem value="b">B</SelectItem>
                  <SelectItem value="c">C</SelectItem>
                  <SelectItem value="d">D</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="flex justify-end">
            <Button className="min-w-20">Add</Button>
          </div>
        </div>
      </div>
    </main>
  );
}
