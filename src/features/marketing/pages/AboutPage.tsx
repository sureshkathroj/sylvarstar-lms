import {
  ArrowRight,
  BookOpen,
  Briefcase,
  GraduationCap,
  Target,
  Eye,
  CheckCircle2,
} from "lucide-react";
import {
  Badge,
  PrimaryButton,
  SecondaryButton,
  Card,
} from "@/features/marketing/shared";
import { ContactSection } from "@/features/marketing/sections/contact";

export function AboutPage() {
  const features = [
    "Industry Experienced Trainers",
    "Live Project Based Learning",
    "Career Mentorship",
    "Resume Building",
    "Mock Interviews",
    "Placement Guidance",
  ];

  return (
    <>
      {/* Hero */}

      <section className="bg-[#F7F9FC] py-24">
        <div className="container mx-auto px-6 text-center">

          <Badge>ABOUT SYLVARSTAR</Badge>

          <h1 className="mt-6 text-5xl font-bold leading-tight text-[#111827] lg:text-6xl">
            Build Your Career.
            <br />
            Build Your Future.
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-[#64748B]">
            SylvarStar Learning Center empowers students and professionals
            through industry-oriented software training, live projects,
            expert mentorship and career guidance.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <PrimaryButton>
              Book Free Demo
            </PrimaryButton>

            <SecondaryButton>
              Explore Programs
            </SecondaryButton>
          </div>

        </div>
      </section>

      {/* Who We Are */}

      <section className="py-20">
        <div className="container mx-auto grid items-center gap-16 px-6 lg:grid-cols-2">

          <div>

            <Badge>WHO WE ARE</Badge>

            <h2 className="mt-6 text-4xl font-bold text-[#111827]">
              Learn • Build • Succeed
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#64748B]">
              SylvarStar is a modern software learning academy focused on
              preparing students for real IT careers.

              <br />
              <br />

              Our programs are designed by experienced software engineers
              and Oracle Fusion professionals to bridge the gap between
              classroom education and industry expectations.

              <br />
              <br />

              Whether you are a fresher, working professional or career
              switcher, we help you build practical skills and confidence
              through live projects, mentorship and career guidance.
            </p>

          </div>

          <Card className="p-10">

            <div className="space-y-6">

              <div className="flex items-center gap-4">

                <BookOpen className="h-8 w-8 text-[#2F5BFF]" />

                <div>

                  <h3 className="font-bold">
                    Practical Learning
                  </h3>

                  <p className="text-[#64748B]">
                    Learn through hands-on projects.
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-4">

                <Briefcase className="h-8 w-8 text-[#2F5BFF]" />

                <div>

                  <h3 className="font-bold">
                    Industry Mentorship
                  </h3>

                  <p className="text-[#64748B]">
                    Learn directly from professionals.
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-4">

                <GraduationCap className="h-8 w-8 text-[#2F5BFF]" />

                <div>

                  <h3 className="font-bold">
                    Career Support
                  </h3>

                  <p className="text-[#64748B]">
                    Resume, interviews and placement guidance.
                  </p>

                </div>

              </div>

            </div>

          </Card>

        </div>
      </section>

      {/* Mission & Vision */}

      <section className="bg-[#F7F9FC] py-20">

        <div className="container mx-auto grid gap-8 px-6 lg:grid-cols-2">

          <Card className="p-10">

            <Target className="h-10 w-10 text-[#2F5BFF]" />

            <h3 className="mt-6 text-3xl font-bold">
              Our Mission
            </h3>

            <p className="mt-6 leading-8 text-[#64748B]">
              Deliver practical, project-based software education that
              prepares every learner for real industry opportunities.
            </p>

          </Card>

          <Card className="p-10">

            <Eye className="h-10 w-10 text-[#2F5BFF]" />

            <h3 className="mt-6 text-3xl font-bold">
              Our Vision
            </h3>

            <p className="mt-6 leading-8 text-[#64748B]">
              Become one of India's most trusted software training
              institutes by creating future-ready IT professionals.
            </p>

          </Card>

        </div>

      </section>

      {/* Why Students Trust Us */}

      <section className="py-20">

        <div className="container mx-auto px-6">

          <div className="mx-auto max-w-3xl text-center">

            <Badge>WHY SYLVARSTAR</Badge>

            <h2 className="mt-6 text-5xl font-bold">
              Why Students Trust Us
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#64748B]">
              We focus on practical learning, industry guidance and career
              development to help every learner become job-ready.
            </p>

          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {features.map((feature) => (

              <Card
                key={feature}
                className="flex items-center gap-4 p-6"
              >

                <CheckCircle2 className="h-6 w-6 text-[#22C55E]" />

                <span className="font-semibold">
                  {feature}
                </span>

              </Card>

            ))}

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="bg-[#2F5BFF] py-20 text-center text-white">

        <div className="container mx-auto px-6">

          <h2 className="text-5xl font-bold">
            Ready to Start Your Career?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
            Join SylvarStar today and learn from experienced mentors through
            practical, project-based training.
          </p>

          <div className="mt-10 flex justify-center">

            <button className="flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-semibold text-[#2F5BFF] transition hover:scale-105">

              Book Free Demo

              <ArrowRight className="h-5 w-5" />

            </button>

          </div>

        </div>

      </section>

      <ContactSection />
    </>
  );
}

export default AboutPage;