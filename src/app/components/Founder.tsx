import React from "react";

export default function Founder() {
  return (
    <section id="founder" className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6 space-y-20">
        {/* Founder Block */}
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Founder Image */}
          <div className="relative bg-white rounded-2xl shadow-lg p-2 w-[360px]">
            <img
              src="/images/founder.jpeg"
              alt="Founder"
              className="w-full h-64 object-cover rounded-xl"
            />
          </div>

          {/* Founder Content */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">FOUNDER</h3>
            <h4 className="text-lg font-semibold text-indigo-600 mb-4">Azhar Pachalloor</h4>
            <p className="text-gray-600 leading-relaxed mb-4">
              A charity founder, when both roles are held by the same person,
              carries a unique blend of vision and responsibility. As founder,
              this individual conceives the charity’s mission, identifies the
              social or environmental need, and establishes the organization’s
              structure, funding model, and initial programs.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              They are often the driving force behind its early growth—recruiting
              the first volunteers or staff, securing start-up donations, and
              setting the core values and long-term goals. As chairman of the
              board, the same person also leads governance: guiding strategic
              decisions, presiding over board meetings, ensuring financial
              accountability, and maintaining compliance with legal and ethical
              standards.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Balancing these roles requires both entrepreneurial energy and
              steady leadership, because the founder’s passion must be matched
              with the chairman’s duty to remain transparent, collaborative, and
              focused on sustainable impact.
            </p>
          </div>
        </div>

        {/* Our Team Block */}
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left: Our Team Image with ribbon */}
          <div className="relative bg-white rounded-2xl shadow-lg p-6 w-[360px]">
            {/* Vertical green ribbon */}
            <div className="absolute -left-10 top-6 bg-green-600 text-white font-bold px-3 py-12 rounded-md rotate-[-90deg] tracking-widest">
              OUR TEAM
            </div>

            {/* Dots decoration */}
            <div className="absolute left-4 bottom-6 flex flex-col gap-2">
              <span className="w-3 h-3 block rounded-full bg-green-500"></span>
              <span className="w-3 h-3 block rounded-full bg-green-500"></span>
            </div>

            {/* Big profile silhouette */}
            <div className="w-full h-64 bg-gray-100 rounded-lg flex items-center justify-center">
              <svg width="120" height="120" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-300">
                <path d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5z" fill="currentColor" />
                <path d="M3 20c0-3.866 3.582-7 9-7s9 3.134 9 7v1H3v-1z" fill="currentColor" />
              </svg>
            </div>
          </div>

          {/* Right: Team content */}
          <div>
            <h4 className="text-lg font-semibold text-indigo-600 mb-3">Shameera B</h4>
            <p className="text-gray-600 leading-relaxed mb-6">
              A charity member is someone who actively supports the mission of a
              charitable organization through gifts, effort, or financial
              contributions. Their role can range from offering time and skills
              to donating funds and advocating for the cause in the community.
            </p>

            {/* Team Avatars Row */}
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 rounded-md bg-gray-200 flex items-center justify-center">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-300">
                  <path d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5z" fill="currentColor" />
                  <path d="M3 20c0-3.866 3.582-7 9-7s9 3.134 9 7v1H3v-1z" fill="currentColor" />
                </svg>
              </div>
              <div className="w-20 h-20 rounded-md bg-gray-200 flex items-center justify-center">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-300">
                  <path d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5z" fill="currentColor" />
                  <path d="M3 20c0-3.866 3.582-7 9-7s9 3.134 9 7v1H3v-1z" fill="currentColor" />
                </svg>
              </div>
              <div className="w-20 h-20 rounded-md bg-gray-200 flex items-center justify-center">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-300">
                  <path d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5z" fill="currentColor" />
                  <path d="M3 20c0-3.866 3.582-7 9-7s9 3.134 9 7v1H3v-1z" fill="currentColor" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
