import QuestionCard from '@/components/card/QuestionCard';
import { Portfolio } from '@/components/component/portfolio';
import HomeFilters from '@/components/home/HomeFilters';
import Filter from '@/components/shared/Filter';
import NoResults from '@/components/shared/NoResults';
import LocalSearchbar from '@/components/shared/search/LocalSearchbar';
import { Button } from '@/components/ui/button';
import { HomePageFilters } from '@/constants/filters';
import { UserButton } from '@clerk/nextjs';
import Link from 'next/link';

const questions = [
  { 
    id: '1',
    title: 'How to use Next.js?',
    tags: [{ id: '1', name: 'next.js' }, { id: '2', name: 'react' }, { id: '3', name: 'javascript' }],
    author: {
      id: '1',
      username: 'John Doe',
      picture: 'url/to/picture',
    },
    upvotes: 100000,
    views: 1500000,
    answers: [{}, {}, {}, {}, {}],
    createdAt: new Date('2021-10-10T12:00:00.000Z')
  },
  { 
    id: '2',
    title: 'How to use Python?',
    tags: [{ id: '1', name: 'Python' }, { id: '2', name: 'SQLAlchemy' }],
    author: {
      id: '2',
      username: 'Leo',
      picture: 'url/to/picture',
    },
    upvotes: 3,
    views: 15,
    answers: [{}, {}],
    createdAt: new Date('2021-10-10T22:00:00.000Z')
  },
];


export default function Home() {
  return (
    <>
      {/* <Portfolio /> */}
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Ask a Question
          </Button>
        </Link>
      </div>

      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchbar
          route="/questions"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for questions"
          otherCasses="flex-1"
        />

        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px"
          containerClasses="hidden max-md:flex"
        />
      </div>
      <HomeFilters />

      <div className="mt-10 flex w-full flex-col gap-6">
        { questions.length > 0 ? ( 
            questions.map((question) => (
              <QuestionCard
                key={question.id}
                id={question.id}
                title={question.title}
                tags={question.tags}
                author={question.author}
                upvotes={question.upvotes}
                views={question.views}
                answers={question.answers}
                createdAt={question.createdAt}
              />
            ))
          ) : <NoResults
                title="There's no questions to show"
                description="Be the first to brack the silence! Ask a Question and kickstart the discussion. Our query
                could be the next big thing others learn from. Get involved!"
                link="/ask-question"
                linkTitle="Ask a Question"
              />
        }
      </div>
    </>
  );
}
