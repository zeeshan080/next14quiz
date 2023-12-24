CREATE TABLE IF NOT EXISTS "catagory" (
	"catagory" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "mcqs" (
	"mcqsId" serial PRIMARY KEY NOT NULL,
	"option" text NOT NULL,
	"isCorrect" boolean NOT NULL,
	"questionId" serial NOT NULL
);
--> statement-breakpoint
ALTER TABLE "questions" ADD COLUMN "catagoryId" serial NOT NULL;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "questions" ADD CONSTRAINT "questions_catagoryId_catagory_catagory_fk" FOREIGN KEY ("catagoryId") REFERENCES "catagory"("catagory") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TABLE "questions" DROP COLUMN IF EXISTS "options1";--> statement-breakpoint
ALTER TABLE "questions" DROP COLUMN IF EXISTS "options2";--> statement-breakpoint
ALTER TABLE "questions" DROP COLUMN IF EXISTS "options3";--> statement-breakpoint
ALTER TABLE "questions" DROP COLUMN IF EXISTS "options4";--> statement-breakpoint
ALTER TABLE "questions" DROP COLUMN IF EXISTS "isCorrect";--> statement-breakpoint
ALTER TABLE "questions" DROP COLUMN IF EXISTS "catagoryName";--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "mcqs" ADD CONSTRAINT "mcqs_questionId_questions_id_fk" FOREIGN KEY ("questionId") REFERENCES "questions"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
