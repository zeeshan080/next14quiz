import { pgTable, serial, text, boolean } from 'drizzle-orm/pg-core';


export const questions = pgTable('questions', {
  questionId: serial('id').primaryKey(),
  title: text('title').notNull(),
  catagoryId: serial('catagoryId').references(() => catagory.catagoryId)
});

export const catagory = pgTable('catagory', {
  catagoryId: serial('catagory').primaryKey(),
  name: text('title').notNull()
});

export const mcqs = pgTable('mcqs', {
  mcqsId: serial('mcqsId').primaryKey(),
  option: text('option').notNull(),
  isCorrect: boolean('isCorrect').notNull(),
  questionId: serial('questionId').references(() => questions.questionId),
});













// export const catagory = pgTable('catagory', {
//     id: serial('id').primaryKey(),
//     name: text('name').notNull()
//   });

// export const questions = pgTable('questions', {
//   id: serial('id').primaryKey(),
//   title: text('title').notNull(),
//   catagorId: serial('catagoryId').references(() => catagory.id)
// });

// export const mcqs = pgTable('mcqs', {
//   id: serial('id').primaryKey(),
//   option: text('option').notNull(),
//   isCorrect: boolean('isCorrect').notNull(),
//   questionId: serial('questionId').references(() => questions.id),
// });