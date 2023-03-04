import { CourseDetails } from '@/components/CourseDetails';
import { Curriculum } from '@/components/Curriculum';
import { LearningOutcomes } from '@/components/LearningOutcomes';

export default function CoursePage() {
  return (
    <>
      <CourseDetails />
      <LearningOutcomes />
      <Curriculum />
    </>
  );
}
