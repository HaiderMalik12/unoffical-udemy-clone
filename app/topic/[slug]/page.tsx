import { Courses } from '@/components/Courses';

type TopicProps = {
  params: {
    slug: string;
  };
};
const getData = async (slug: string) => {
  const data = await fetch(`http://localhost:3001/api/topics/${slug}`, {
    cache: 'no-store',
  });
  const courses = await data.json();
  return courses;
};
export default async function Topic({ params }: TopicProps) {
  const slug = params.slug;
  // create getData method
  const results = await getData(slug);
  // you must need to get the slug
  // fetch the courses on the based on slug
  // you need to provide the courses array
  // the courses you have fetched from the backend api
  // then pass it to courses

  return (
    <>
      <Courses courses={results.courses} />
    </>
  );
}
