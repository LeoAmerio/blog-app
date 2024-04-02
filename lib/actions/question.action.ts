"use server"

import Question from '../database/question.model';
import Tag from '../database/tag.model';
import { connectToDB } from '../mongoose';

export async function createQuestion(params: any) {
  
  try {
    //Connect to the database
    console.log('Connecting to the database after creating a question');
    connectToDB();

    const { title, content, tags, author, path } = params;
    console.log('Params: ', params);
    
    // Create the question
    const question = await Question.create({
      title,
      content,
      author,
    })

    const tagdocuments = [];

    for (const tag of tags) {
      const existingTag = await Tag.findOneAndUpdate(
        { name: { $regex: new RegExp(`^${tag}$`, "i") } },
        { $setOnInsert: { name: tag }, $push: { question: question._id } },
        { upsert: true, new: true }
      );

      tagdocuments.push(existingTag._id);
    }

    await Question.findByIdAndUpdate(question._id, { 
      $push: { tags: { $each: tagdocuments } }
    });

    
  } catch (error) {
    
  }
}

