import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import { Button } from "@/components/ui/button";
import { PenBox, Trash2 } from "lucide-react";

type Props = {};

const questions = [
  {
    questionId: "QID1",
    questionTitle: "What is 2+2?",
    catagoryId: "Math",
  },
  {
    questionId: "QID2",
    questionTitle: "What is 4+2?",
    catagoryId: "Math",
  },
  {
    questionId: "QID3",
    questionTitle: "What is 6+2?",
    catagoryId: "Math",
  },
  {
    questionId: "QID4",
    questionTitle: "What is opposite of Truth?",
    catagoryId: "English",
  },
  {
    questionId: "QID5",
    questionTitle: "What is 21+2?",
    catagoryId: "Math",
  },
  {
    questionId: "QID6",
    questionTitle: "What is 2+1?",
    catagoryId: "Math",
  },
  {
    questionId: "QID7",
    questionTitle: "What is 5+2?",
    catagoryId: "Math",
  },
  {
    questionId: "QID8",
    questionTitle: "When did Pakistan got independance?",
    catagoryId: "History",
  },
  {
    questionId: "QID9",
    questionTitle: "What are states of water?",
    catagoryId: "Science",
  },
];

export default function ViewPage({}: Props) {
  return (
    <main className="flex justify-center items-center mt-20 mb-6">
      <div className="w-[70%]">
        <div className="text-center font-bold text-xl mb-4">All Questions</div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Question ID</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Catagory</TableHead>
              <TableHead>Edit</TableHead>
              <TableHead>Delete</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {questions.map((question) => (
              <TableRow key={question.questionId}>
                <TableCell className="font-medium">
                  {question.questionId}
                </TableCell>
                <TableCell>{question.questionTitle}</TableCell>
                <TableCell>{question.catagoryId}</TableCell>
                <TableCell className="text-right">
                  <Button className="w-[80%]">
                    <PenBox size={16} className="mr-1" /> Edit
                  </Button>
                </TableCell>
                <TableCell className="text-right">
                  <Button className="w-[80%]" variant={"destructive"}>
                    <Trash2 size={16} className="mr-1" /> Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter className="flex justify-center p-6">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </TableFooter>
        </Table>
      </div>
    </main>
  );
}
