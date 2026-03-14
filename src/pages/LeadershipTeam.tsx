import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type Leader = {
  name: string;
  role: string;
  description: string[];
  achievements?: string[];
  focus?: string;
};

const leaders: Leader[] = [
  {
    name: "Mrs. Sushma Boppana",
    role: "Director – Sri Chaitanya Educational Institutions",
    description: [
      "Mrs. Sushma Boppana graduated from the Birla Institute of Technology and Science (BITS), Pilani, with a degree in Computer Science and later earned a master’s degree in Information Technology in the United States.",
      "She leads several academic and strategic initiatives within the institution and has expanded Sri Chaitanya’s curriculum from Kindergarten to Grade 12, providing students with a standardized academic foundation and reducing exam stress.",
    ],
    achievements: [
      "Times Exemplary Leader (2023)",
      "Featured in Forbes India Magazine",
      "Best Educational Brand – ET Now (2024)",
    ],
    focus: "Her work focuses on preparing students for Olympiads, JEE, NEET, and global academic challenges.",
  },
  {
    name: "Mrs. Seema Boppana",
    role: "Administrative Director – Sri Chaitanya Educational Institutions",
    description: [
      "Mrs. Seema Boppana holds a Bachelor’s degree in Science with specialization in Management and Marketing.",
      "Since 2008, she has played a crucial role in building the Sri Chaitanya Techno Schools network, expanding it from 5 schools to hundreds of branches across India.",
    ],
    achievements: [
      "Best Academic Director in India (2022–2023) – North Delhi Cultural Academy",
      "Features in CEO Insights Magazine and Outlook India",
    ],
    focus:
      "Her leadership focuses on curriculum innovation, academic excellence, and holistic student development.",
  },
  {
    name: "Mr. Nagendra",
    role: "Director – Marketing & Strategic Outreach",
    description: [
      "Mr. Nagendra serves as a Director at Sri Chaitanya Educational Institutions, playing a key role in marketing strategy, institutional communication, and brand outreach.",
      "He works closely with leadership teams to ensure that Sri Chaitanya’s academic programs and services reach students across India while maintaining the institution’s reputation for excellence.",
    ],
  },
  {
    name: "Mr. Y. L. V. Sridhar",
    role: "Director – Finance & IT",
    description: [
      "Mr. Sridhar holds a Bachelor’s degree in Engineering from Wayne State University and a Master’s degree from Northern State University (USA).",
      "He oversees Finance, IT, and Administration and leads technology adoption across the institution’s campuses.",
    ],
    achievements: [
      "Implementing digital learning platforms",
      "Strengthening financial governance",
      "Driving technology integration across the organization",
    ],
  },
];

const LeadershipTeam = () => {
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
              <span className="text-center text-[80px] sm:text-[130px] lg:text-[210px] font-bold uppercase tracking-[0.32em] text-white/5 blur-[1px]">
                Leadership
              </span>
            </div>
          </div>
          <div className="container mx-auto px-6 pt-36 pb-20 relative">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight drop-shadow-[0_12px_35px_rgba(2,12,28,0.6)]">
                Leadership Team
              </h1>
              <div className="mt-6 flex items-center justify-center gap-4 text-[10px] uppercase tracking-[0.4em] text-white/60">
                <span className="h-px w-12 bg-white/25" />
                Building academic excellence
                <span className="h-px w-12 bg-white/25" />
              </div>
              <p className="mx-auto mt-7 max-w-3xl text-sm sm:text-base text-white/85 leading-relaxed">
                The leadership team guides Sri Chaitanya’s academic vision,
                operational excellence, and nationwide growth ensuring students
                receive world-class support across every campus.
              </p>
            </div>
          </div>
        </section>

        <section className="relative">
          <div className="container mx-auto px-6 py-16 lg:py-20">
            <div className="grid gap-8 lg:grid-cols-2">
              {leaders.map((leader) => (
                <div
                  key={leader.name}
                  className="rounded-[28px] border border-[hsl(var(--primary)/0.12)] bg-white p-6 sm:p-8 shadow-[0_24px_55px_rgba(9,35,66,0.12)]"
                >
                  <p className="text-[10px] uppercase tracking-[0.4em] text-[hsl(var(--accent))]">
                    Leadership
                  </p>
                  <h2 className="mt-4 text-2xl sm:text-3xl font-semibold text-[hsl(var(--primary))]">
                    {leader.name}
                  </h2>
                  <p className="mt-2 text-sm uppercase tracking-[0.3em] text-[hsl(var(--primary)/0.55)]">
                    {leader.role}
                  </p>
                  <div className="mt-4 space-y-3 text-sm sm:text-base text-[hsl(var(--primary)/0.7)]">
                    {leader.description.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>

                  {leader.achievements && (
                    <div className="mt-6 rounded-2xl border border-[hsl(var(--primary)/0.12)] bg-[hsl(var(--primary)/0.03)] p-4">
                      <p className="text-[11px] uppercase tracking-[0.28em] text-[hsl(var(--primary))]">
                        Achievements
                      </p>
                      <ul className="mt-3 grid gap-2 text-sm text-[hsl(var(--primary)/0.7)]">
                        {leader.achievements.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[hsl(var(--accent))]" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {leader.focus && (
                    <div className="mt-6 rounded-2xl border border-[hsl(var(--primary)/0.12)] bg-white p-4 shadow-[0_16px_35px_rgba(9,35,66,0.08)]">
                      <p className="text-[11px] uppercase tracking-[0.28em] text-[hsl(var(--primary))]">
                        Focus
                      </p>
                      <p className="mt-3 text-sm text-[hsl(var(--primary)/0.7)]">
                        {leader.focus}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LeadershipTeam;
