import { courses } from "../data/courses";

export function getCourse(slug: string) {
  return courses.find(course => course.slug === slug);
}