import { Course } from "../types";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface CurriculumProps {
  course: Course;
}

export function Curriculum({ course }: CurriculumProps) {
  if (!course.curriculum || course.curriculum.length === 0) return null;

  return (
    <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
      <div className="rounded-xl border bg-white p-6 shadow-sm">
        <h2 className="mb-6 text-2xl font-bold">
          Course Curriculum
        </h2>

        <Accordion type="single" collapsible className="w-full">
          {course.curriculum.map((module, index) => (
            <AccordionItem
              key={index}
              value={`module-${index}`}
            >
              <AccordionTrigger>
                {module.title}
              </AccordionTrigger>

              <AccordionContent>
                <ul className="list-disc space-y-2 pl-5">
                  {module.topics.map((topic) => (
                    <li
                      key={topic}
                      className="text-slate-600"
                    >
                      {topic}
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}