import { NextRequest, NextResponse } from "next/server";
import { eq } from "drizzle-orm";
import { db } from "../../../../drizzle/drizzle";
import { questions,mcqs } from "../../../../drizzle/schema";

export async function GET(request: NextRequest) {
  //const rows = await db.select().from(questions).innerJoin(catagory, eq(questions.catagorId, 1)).innerJoin(mcqs, eq(mcqs.questionId, questions.id));
  const rows = await db.select({title: questions.title,option: mcqs.option, isCorrect:mcqs.isCorrect}).from(questions).innerJoin(mcqs, eq(mcqs.questionId, questions.id)).where(eq(questions.catagorId, 1));
 
  return NextResponse.json({ message: rows });
}

// export async function POST(request: NextRequest) {
//   const req = await request.json();
//   const title = req.todoItem;

//   const rows = await db.insert(todos).values({ title });
//   //const { rows } = await sql`INSERT INTO todos (title) VALUES (${title})`;

//   return NextResponse.json({ message: "todo created successfully! " });
// }

// export async function DELETE(request: NextRequest) {

//   const req = await request.json();
//   const id = req.todoId;
//   const rows = await db.delete(todos).where(eq(todos.id,id));
//   //const { rows } = await sql`INSERT INTO todos (title) VALUES (${title})`;

//   return NextResponse.json({ message: "todo deleted successfully! " });
// }

// export async function PUT(request: NextRequest) {

//   const req = await request.json();
//   const id = req.todoId;
//   const title = req.todoTitle;
//   const rows = await db.update(todos).set({title}).where(eq(todos.id,id));
//   //const { rows } = await sql`INSERT INTO todos (title) VALUES (${title})`;

//   return NextResponse.json({ message: "todo updated successfully! " });
// }