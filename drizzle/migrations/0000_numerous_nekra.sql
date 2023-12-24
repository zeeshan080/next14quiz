CREATE TABLE IF NOT EXISTS "questions" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"options1" text NOT NULL,
	"options2" text NOT NULL,
	"options3" text NOT NULL,
	"options4" text NOT NULL,
	"isCorrect" boolean NOT NULL,
	"catagoryName" text NOT NULL
);
