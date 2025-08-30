export default function StatsSection() {
  return (
    <section className="pt-10">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
          <h2 className="text-4xl font-medium lg:text-5xl">Overall Activity</h2>
          <p>
            Continuously improving my skills and expanding my knowledge every
            day.
          </p>
        </div>

        <div className="grid gap-12 divide-y *:text-center md:grid-cols-3 md:gap-2 md:divide-x md:divide-y-0">
          <div className="space-y-4">
            <div className="text-5xl font-bold">+20</div>
            <p>Project on GitHub</p>
          </div>
          <div className="space-y-4">
            <div className="text-5xl font-bold">
              +100 <span className="text-sm">Problem</span>
            </div>
            <p>Solved LeetCode & HackerRank</p>
          </div>
          <div className="space-y-4">
            <div className="text-5xl font-bold">+10</div>
            <p>Client Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
}
