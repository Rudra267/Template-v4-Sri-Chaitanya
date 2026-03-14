import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const leadershipFocus = [
  "Quality education for students from rural and small towns",
  "Strong mentorship and holistic development",
  "Student-centric learning systems",
  "Community service initiatives",
];

const Chairperson = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <section className="relative overflow-hidden bg-hero text-white">
          <div className="absolute inset-0">
            <div className="aurora-stars" />
            <div className="aurora-band" />
            <div className="aurora-band aurora-band-two" />
            <div className="aurora-horizon" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.16),rgba(2,14,30,0.85)_55%,rgba(1,8,18,0.95)_100%)]" />
            <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#040d1f] to-transparent" />
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <span className="text-center text-[84px] sm:text-[130px] lg:text-[210px] font-bold uppercase tracking-[0.32em] text-white/5 blur-[1px]">
                Chairperson
              </span>
            </div>
          </div>
          <div className="container mx-auto px-6 pt-36 pb-20 relative">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="mt-7 text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight drop-shadow-[0_12px_35px_rgba(2,12,28,0.6)]">
                Dr. Jhansi Lakshmi Bai Boppana
              </h1>
              <p className="mt-2 text-sm sm:text-base text-white/75 tracking-[0.25em] uppercase">
                Dr. J. L. Boppana
              </p>
              <div className="mt-6 flex items-center justify-center gap-4 text-[10px] uppercase tracking-[0.4em] text-white/60">
                <span className="h-px w-12 bg-white/25" />
                Sri Chaitanya Schools
                <span className="h-px w-12 bg-white/25" />
              </div>
              <p className="mx-auto mt-7 max-w-3xl text-sm sm:text-base text-white/85 leading-relaxed">
                Dr. Jhansi Lakshmi Bai Boppana is the Chairperson and one of the
                founding pillars of Sri Chaitanya Educational Institutions. With a
                strong commitment to student empowerment and academic excellence,
                she has played a central role in shaping the institution&apos;s vision
                and values.
              </p>
            </div>
          </div>
        </section>

        <section className="relative">
          <div className="container mx-auto px-6 py-16 lg:py-20">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-start">
              <div className="rounded-[28px] border border-[hsl(var(--primary)/0.12)] bg-white p-6 sm:p-8 shadow-[0_24px_55px_rgba(9,35,66,0.12)]">
                <p className="text-[10px] uppercase tracking-[0.4em] text-[hsl(var(--accent))]">
                  Chairperson
                </p>
                <h2 className="mt-4 text-2xl sm:text-3xl font-semibold text-[hsl(var(--primary))]">
                  Chairperson - Sri Chaitanya Educational Institutions
                </h2>
                <p className="mt-4 text-sm sm:text-base text-[hsl(var(--primary)/0.7)]">
                  She co-founded Sri Chaitanya in 1986 along with her husband,
                  Dr. B. S. Rao. Under her leadership, the institution has grown
                  into a nationwide network of schools, junior colleges, and
                  coaching centers that prepare students for competitive exams
                  such as IIT-JEE, NEET, UPSC, and EAMCET.
                </p>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {leadershipFocus.map((point) => (
                    <div
                      key={point}
                      className="rounded-2xl border border-[hsl(var(--primary)/0.12)] bg-[hsl(var(--primary)/0.03)] p-4"
                    >
                      <p className="text-sm text-[hsl(var(--primary)/0.8)]">{point}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[28px] border border-[hsl(var(--primary)/0.12)] bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(247,244,242,0.96))] p-6 sm:p-8 shadow-[0_24px_55px_rgba(9,35,66,0.12)]">
                <p className="text-[10px] uppercase tracking-[0.4em] text-[hsl(var(--accent))]">
                  Vision & Legacy
                </p>
                <h3 className="mt-4 text-2xl font-semibold text-[hsl(var(--primary))]">
                  Empowering Students Nationwide
                </h3>
                <p className="mt-4 text-sm sm:text-base text-[hsl(var(--primary)/0.7)]">
                  Through her dedication and vision, Sri Chaitanya has become
                  synonymous with academic excellence and student success. Her
                  leadership continues to guide the institution&apos;s culture of
                  mentorship, opportunity, and community service.
                </p>
                <div className="mt-6 rounded-2xl border border-[hsl(var(--primary)/0.12)] bg-white p-5 text-sm text-[hsl(var(--primary)/0.75)] shadow-[0_16px_35px_rgba(9,35,66,0.08)]">
                  Chairperson leadership highlights student empowerment, holistic
                  development, and access to quality education across India.
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Chairperson;
