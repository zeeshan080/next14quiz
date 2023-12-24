import { NextRequest, NextResponse } from "next/server";
import { db } from "../../../../drizzle/drizzle";
import { catagory, mcqs, questions } from "../../../../drizzle/schema";
import { eq } from "drizzle-orm";

export async function GET(request: NextRequest) {

    // const rows = await db.select({title:questions.title,option:mcqs.option,catagory: catagory.name,correct:mcqs.isCorrect}).from(questions)
    //                      .innerJoin(mcqs,eq(questions.questionId,mcqs.questionId))
    //                      .innerJoin(catagory,eq(questions.catagoryId,catagory.catagoryId))
    
    const rows = await db.select({title: questions.title,option: mcqs.option, isCorrect:mcqs.isCorrect})
                         .from(questions)
                         .innerJoin(mcqs, eq(mcqs.questionId, questions.questionId))
                         .where(eq(questions.catagoryId, 1));
 
    
    return NextResponse.json({"message": rows})   
}
