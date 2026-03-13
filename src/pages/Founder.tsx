import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Award,
  Building2,
  GraduationCap,
  Lightbulb,
  Stethoscope,
  TrendingUp,
} from "lucide-react";

const growthStats = [
  { value: "950+", label: "Schools and colleges" },
  { value: "10 lakh+", label: "Students" },
  { value: "62,000+", label: "Staff" },
  { value: "22+ states and 248+ cities", label: "Nationwide presence" },
];

const philosophyPoints = [
  "Integrated academics with competitive exam preparation",
  "Expanding education to tier-2 and tier-3 cities",
  "Recruiting experienced faculty",
  "Structured testing and mentorship systems",
];

const Founder = () => {
  const highlightStat = growthStats[growthStats.length - 1];
  const smallStats = growthStats.slice(0, -1);

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
              <span className="text-center text-[88px] sm:text-[140px] lg:text-[220px] font-bold uppercase tracking-[0.32em] text-white/5 blur-[1px]">
                Founder
              </span>
            </div>
          </div>
          <div className="container mx-auto px-6 pt-36 pb-20 relative">
            <div className="mx-auto max-w-4xl text-center">
              {/* <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-[10px] uppercase tracking-[0.5em] text-white/85 shadow-[0_14px_40px_rgba(0,0,0,0.25)]">
                Founder
              </div> */}
              <h1 className="mt-7 text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight drop-shadow-[0_12px_35px_rgba(2,12,28,0.6)]">
                Dr. Boppana Satyanarayana Rao
              </h1>
              <p className="mt-2 text-sm sm:text-base text-white/75 tracking-[0.25em] uppercase">
                Dr. B. S. Rao
              </p>
              <div className="mt-6 flex items-center justify-center gap-4 text-[10px] uppercase tracking-[0.4em] text-white/60">
                <span className="h-px w-12 bg-white/25" />
                Sri Chaitanya Schools
                <span className="h-px w-12 bg-white/25" />
              </div>
              <p className="mx-auto mt-7 max-w-3xl text-sm sm:text-base text-white/85 leading-relaxed">
                Dr. Boppana Satyanarayana Rao, widely known as Dr. B. S. Rao, was
                the Founder and Visionary Leader of Sri Chaitanya Educational
                Institutions, one of India&apos;s most influential educational
                organizations. He played a pioneering role in transforming the
                way competitive education is delivered in India.
              </p>
              <div className="mt-8 mx-auto max-w-2xl rounded-2xl border border-white/20 bg-white/5 px-6 py-5 text-sm text-white/80 shadow-[0_18px_45px_rgba(0,0,0,0.35)]">
                &ldquo;Every child can achieve excellence with the right guidance,
                structure, and opportunity.&rdquo;
              </div>
            </div>
          </div>
        </section>

        <section className="relative" id="founder-story">
          <div className="container mx-auto px-6 py-16 lg:py-20">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] items-start">
              <div className="relative overflow-hidden rounded-[28px] border border-[hsl(var(--primary)/0.08)] bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(245,248,252,0.96))] p-6 sm:p-8 shadow-[0_30px_60px_rgba(9,35,66,0.14)] lg:sticky lg:top-28">
                <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,hsl(var(--accent)),hsl(var(--primary)))]" />
                <div className="pointer-events-none absolute -right-10 -top-12 h-28 w-28 rounded-full bg-[hsl(var(--accent)/0.18)] blur-3xl" />
                <p className="text-[10px] uppercase tracking-[0.4em] text-[hsl(var(--accent))]">
                  Dr.B.S Rao Profile
                </p>
                <h2 className="mt-4 text-2xl sm:text-3xl font-semibold text-[hsl(var(--primary))]">
                  Founder - Sri Chaitanya Educational Institutions
                </h2>
                <p className="mt-4 text-sm sm:text-base text-muted-foreground">
                  He played a pioneering role in transforming the way competitive
                  education is delivered in India.
                </p>
                {/* <p className="mt-3 text-sm sm:text-base text-muted-foreground">
                  Dr. Rao believed that every child has the potential to succeed
                  when provided with the right guidance and opportunities.
                </p> */}
                <div className="mt-6 rounded-2xl border border-[hsl(var(--primary)/0.08)] bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(241,245,250,0.9))] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="relative rounded-2xl border border-[hsl(var(--primary)/0.08)] bg-white p-4 shadow-[0_12px_30px_rgba(9,35,66,0.08)] before:content-[''] before:absolute before:left-4 before:top-0 before:h-[2px] before:w-10 before:bg-[hsl(var(--accent))]">
                      <p className="text-[11px] uppercase tracking-[0.3em] text-[hsl(var(--primary))]">
                        Medical Career
                      </p>
                      <p className="mt-2 text-sm text-[hsl(var(--primary)/0.75)]">
                        Practiced medicine in the United Kingdom and Iran for more
                        than 15 years before returning to India.
                      </p>
                    </div>
                    <div className="relative rounded-2xl border border-[hsl(var(--primary)/0.08)] bg-white p-4 shadow-[0_12px_30px_rgba(9,35,66,0.08)] before:content-[''] before:absolute before:left-4 before:top-0 before:h-[2px] before:w-10 before:bg-[hsl(var(--accent))]">
                      <p className="text-[11px] uppercase tracking-[0.3em] text-[hsl(var(--primary))]">
                        Institutional Vision
                      </p>
                      <p className="mt-2 text-sm text-[hsl(var(--primary)/0.75)]">
                        Their goal was to integrate school education with structured
                        preparation for competitive exams such as IIT-JEE, NEET, and
                        EAMCET.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 grid gap-4">
                  <div className="relative rounded-2xl border border-[hsl(var(--primary)/0.08)] bg-white p-4 shadow-[0_12px_30px_rgba(9,35,66,0.08)] before:content-[''] before:absolute before:left-4 before:top-0 before:h-[2px] before:w-10 before:bg-[hsl(var(--accent))]">
                    <p className="text-[11px] uppercase tracking-[0.3em] text-[hsl(var(--primary))]">
                      Early Roots
                    </p>
                    <p className="mt-2 text-sm text-[hsl(var(--primary)/0.75)]">
                      Born in Angaluru village in Krishna District, Andhra Pradesh,
                      he later studied at Guntur Medical College.
                    </p>
                  </div>
                  <div className="relative rounded-2xl border border-[hsl(var(--primary)/0.08)] bg-white p-4 shadow-[0_12px_30px_rgba(9,35,66,0.08)] before:content-[''] before:absolute before:left-4 before:top-0 before:h-[2px] before:w-10 before:bg-[hsl(var(--accent))]">
                    <p className="text-[11px] uppercase tracking-[0.3em] text-[hsl(var(--primary))]">
                      First Campus
                    </p>
                    <p className="mt-2 text-sm text-[hsl(var(--primary)/0.75)]">
                      Founded the first Sri Chaitanya Girls Junior College in
                      Vijayawada in 1986 with Dr. Jhansi Lakshmi Bai Boppana.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative pl-14 before:absolute before:left-6 before:top-6 before:bottom-6 before:w-px before:bg-[linear-gradient(180deg,rgba(13,59,102,0.12),rgba(226,61,104,0.35),rgba(13,59,102,0.12))]">
                <div className="relative pb-12">
                  <span className="absolute left-0 top-7 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[hsl(var(--accent))] shadow-[0_14px_35px_rgba(9,35,66,0.12)] ring-1 ring-[hsl(var(--primary)/0.12)]">
                    <Stethoscope className="h-5 w-5" />
                  </span>
                  <div className="relative ml-12 overflow-hidden rounded-3xl border border-[hsl(var(--primary)/0.12)] bg-white/95 p-6 shadow-[0_24px_50px_rgba(9,35,66,0.1)] before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_top,rgba(226,61,104,0.06),transparent_60%)] before:pointer-events-none">
                    {/* <div className="flex items-center gap-3">
                      <p className="text-[10px] uppercase tracking-[0.4em] text-[hsl(var(--accent))]">
                        Dr.B.S Rao Profile
                      </p>
                      <span className="h-px flex-1 bg-[hsl(var(--primary)/0.12)]" />
                    </div> */}
                    <h3 className="mt-3 text-2xl font-semibold text-[hsl(var(--primary))]">
                      Early Life & Medical Career
                    </h3>
                    <p className="mt-4 text-sm sm:text-base text-[hsl(var(--primary)/0.7)]">
                      Born in Angaluru village in Krishna District, Andhra Pradesh,
                      Dr. Rao pursued his medical education at Guntur Medical College.
                      After completing his studies, he practiced medicine in the
                      United Kingdom and Iran for more than 15 years before returning
                      to India with a larger mission to revolutionize the Indian
                      education system.
                    </p>
                  </div>
                </div>

                <div className="relative pb-12">
                  <span className="absolute left-0 top-7 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[hsl(var(--accent))] shadow-[0_14px_35px_rgba(9,35,66,0.12)] ring-1 ring-[hsl(var(--primary)/0.12)]">
                    <GraduationCap className="h-5 w-5" />
                  </span>
                  <div className="relative ml-12 overflow-hidden rounded-3xl border border-[hsl(var(--primary)/0.12)] bg-white/95 p-6 shadow-[0_24px_50px_rgba(9,35,66,0.1)] before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_top,rgba(226,61,104,0.06),transparent_60%)] before:pointer-events-none">
                    {/* <div className="flex items-center gap-3">
                      <p className="text-[10px] uppercase tracking-[0.4em] text-[hsl(var(--accent))]">
                        Dr.B.S Rao Profile
                      </p>
                      <span className="h-px flex-1 bg-[hsl(var(--primary)/0.12)]" />
                    </div> */}
                    <h3 className="mt-3 text-2xl font-semibold text-[hsl(var(--primary))]">
                      Establishing Sri Chaitanya
                    </h3>
                    <p className="mt-4 text-sm sm:text-base text-[hsl(var(--primary)/0.7)]">
                      In 1986, Dr. Rao and his wife Dr. Jhansi Lakshmi Bai Boppana
                      founded the first Sri Chaitanya Girls Junior College in
                      Vijayawada. Their goal was to integrate school education with
                      structured preparation for competitive exams such as IIT-JEE,
                      NEET, and EAMCET.
                    </p>
                  </div>
                </div>

                <div className="relative pb-12">
                  <span className="absolute left-0 top-7 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[hsl(var(--accent))] shadow-[0_14px_35px_rgba(9,35,66,0.12)] ring-1 ring-[hsl(var(--primary)/0.12)]">
                    <Building2 className="h-5 w-5" />
                  </span>
                  <div className="relative ml-12 overflow-hidden rounded-3xl border border-[hsl(var(--primary)/0.12)] bg-white/95 p-6 shadow-[0_24px_50px_rgba(9,35,66,0.1)] before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_top,rgba(226,61,104,0.06),transparent_60%)] before:pointer-events-none">
                    {/* <div className="flex items-center gap-3">
                      <p className="text-[10px] uppercase tracking-[0.4em] text-[hsl(var(--accent))]">
                        Dr.B.S Rao Profile
                      </p>
                      <span className="h-px flex-1 bg-[hsl(var(--primary)/0.12)]" />
                    </div> */}
                    <h3 className="mt-3 text-2xl font-semibold text-[hsl(var(--primary))]">
                      Growth of the Institution
                    </h3>
                    <p className="mt-3 text-sm sm:text-base text-[hsl(var(--primary)/0.7)]">
                      Under Dr. Rao&apos;s leadership, Sri Chaitanya expanded from a
                      single junior college into one of India&apos;s largest educational
                      ecosystems.
                    </p>
                    <div className="mt-6 grid gap-4 sm:grid-cols-3">
                      <div className="rounded-2xl border border-[hsl(var(--primary)/0.18)] bg-white p-6 text-center shadow-[0_18px_40px_rgba(9,35,66,0.1)] sm:col-span-3">
                        <div className="text-4xl font-semibold text-transparent bg-clip-text bg-[linear-gradient(135deg,#ff5c8a,#ff8aa6,#ffb6c8)]">
                          {highlightStat.value}
                        </div>
                        <div className="mt-2 text-[11px] uppercase tracking-[0.32em] text-[hsl(var(--primary)/0.55)]">
                          {highlightStat.label}
                        </div>
                      </div>
                      {smallStats.map((stat) => (
                        <div
                          key={stat.value}
                          className="rounded-2xl border border-[hsl(var(--primary)/0.16)] bg-white px-4 py-5 text-center shadow-[0_16px_35px_rgba(9,35,66,0.08)]"
                        >
                          <div className="text-3xl font-semibold text-transparent bg-clip-text bg-[linear-gradient(135deg,#ff5c8a,#ff8aa6)]">
                            {stat.value}
                          </div>
                          <div className="mt-2 text-[10px] uppercase tracking-[0.28em] text-[hsl(var(--primary)/0.6)]">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="relative pb-12">
                  <span className="absolute left-0 top-7 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[hsl(var(--accent))] shadow-[0_14px_35px_rgba(9,35,66,0.12)] ring-1 ring-[hsl(var(--primary)/0.12)]">
                    <Lightbulb className="h-5 w-5" />
                  </span>
                  <div className="relative ml-12 overflow-hidden rounded-3xl border border-[hsl(var(--primary)/0.12)] bg-white/95 p-6 shadow-[0_24px_50px_rgba(9,35,66,0.1)] before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_top,rgba(226,61,104,0.06),transparent_60%)] before:pointer-events-none">
                    {/* <div className="flex items-center gap-3">
                      <p className="text-[10px] uppercase tracking-[0.4em] text-[hsl(var(--accent))]">
                        Dr.B.S Rao Profile
                      </p>
                      <span className="h-px flex-1 bg-[hsl(var(--primary)/0.12)]" />
                    </div> */}
                    <h3 className="mt-3 text-2xl font-semibold text-[hsl(var(--primary))]">
                      Vision & Educational Philosophy
                    </h3>
                    <p className="mt-4 text-sm sm:text-base text-[hsl(var(--primary)/0.7)]">
                      Dr. Rao believed that every child has the potential to succeed
                      when provided with the right guidance and opportunities. His
                      educational philosophy focused on:
                    </p>
                    <ul className="mt-5 grid gap-3 text-sm sm:text-base text-[hsl(var(--primary)/0.85)]">
                      {philosophyPoints.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-3 rounded-2xl border border-[hsl(var(--primary)/0.12)] bg-[hsl(var(--primary)/0.03)] px-4 py-3 shadow-[0_12px_30px_rgba(9,30,60,0.08)]"
                        >
                          <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[hsl(var(--accent))]" />
                          <span className="text-[hsl(var(--primary)/0.75)]">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="relative">
                  <span className="absolute left-0 top-7 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[hsl(var(--accent))] shadow-[0_14px_35px_rgba(9,35,66,0.12)] ring-1 ring-[hsl(var(--primary)/0.12)]">
                    <Award className="h-5 w-5" />
                  </span>
                  <div className="relative ml-12 overflow-hidden rounded-3xl border border-[hsl(var(--primary)/0.12)] bg-white/95 p-6 shadow-[0_24px_50px_rgba(9,35,66,0.1)] before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_top,rgba(226,61,104,0.06),transparent_60%)] before:pointer-events-none">
                    {/* <div className="flex items-center gap-3">
                      <p className="text-[10px] uppercase tracking-[0.4em] text-[hsl(var(--accent))]">
                        Dr.B.S Rao Profile
                      </p>
                      <span className="h-px flex-1 bg-[hsl(var(--primary)/0.12)]" />
                    </div> */}
                    <h3 className="mt-3 text-2xl font-semibold text-[hsl(var(--primary))]">
                      Legacy
                    </h3>
                    <div className="mt-5 rounded-3xl border border-[hsl(var(--primary)/0.12)] bg-[hsl(var(--primary)/0.04)] p-6 shadow-[0_18px_40px_rgba(9,30,60,0.08)]">
                      <p className="text-sm sm:text-base text-[hsl(var(--primary)/0.75)]">
                        Dr. B. S. Rao passed away on 13 July 2023, leaving behind a
                        powerful legacy in Indian education. Today, his vision
                        continues through the leadership of the institution and the
                        millions of students whose lives have been transformed by
                        Sri Chaitanya.
                      </p>
                    </div>
                  </div>
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

export default Founder;
