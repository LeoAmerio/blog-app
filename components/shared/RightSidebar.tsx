import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import RenderTag from './RenderTag';

const RightSidebar = () => {
  const hotQuestions = [
    { id: '1', title: "How to use React Query with Next.js?" },
    { id: '2', title: "What is F1?" },
    { id: '3', title: "Where is the future of CS55?" },
    { id: '4', title: "How to use React Query with Next.js?"},
    { id: '5', title: "Cascading deletes in SQLAlchemy" },
  ];

  const popularTags = [
    { id: '1', title: "React", totalQuestions: 5 },
    { id: '2', title: "Next.js", totalQuestions: 10 },
    { id: '3', title: "Python", totalQuestions: 4 },
    { id: '4', title: "C++", totalQuestions: 0 },
    { id: '5', title: "JavaScript", totalQuestions: 2 },
    { id: '6', title: "TypeScript", totalQuestions: 3 },
    { id: '7', title: "Django", totalQuestions: 1 },
    { id: '8', title: "Flask", totalQuestions: 1 },
    { id: '9', title: "FastAPI", totalQuestions: 5 },
    { id: '10', title: "Node.js", totalQuestions: 0 },
  ]

  return (
    <section className="background-light900_dark200 light-border custom-scrollbar sticky right-0 top-0 flex h-screen w-[350px] flex-col overflow-y-auto border-l p-6 pt-36 shadorw-light-300 dark:shadow-none max-xl:hidden">
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {hotQuestions.map((question) => (
            <Link href={`/questions/${question.id}`} key={question.id} className="flex cursor-pointer items-center justify-between gap-7">
              <p className="body-medium text-dark500_light700">{question.title}</p>
              <Image 
                src="/assets/icons/arrow-right.svg"
                alt="chevron right"
                width={20}
                height={20}
                className="invert-colors"
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          {popularTags.map((tag) => (
            <RenderTag key={tag.id} id={tag.id} name={tag.title} questions={tag.totalQuestions} showCount />
          ))}
        </div>
      </div>
    </section>
  )
}
export default RightSidebar