import Container from '@/components/shared/Container';

export default function CourseSection() {
  return (
    <section className="bg-white py-24">
      <Container>
        <div className="rounded-3xl border border-dashed border-slate-300 p-20 text-center">
          <h2 className="text-5xl font-bold">
            Course Section
          </h2>
        </div>
      </Container>
    </section>
  );
}