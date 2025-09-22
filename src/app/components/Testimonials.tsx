// components/Testimonials.tsx
export default function Testimonials() {
  const testimonials = [
    {
      name: 'Kay Henderson',
      role: 'Businessman - Entrepreneur',
      quote:
        '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis pellentesque cras interdum ornare feugiat eget feugiat. Nunc, urna vitae pellentesque risus, ut volutpat eget libero vel.”',
    },
    // Add more testimonials if desired
  ]

  return (
    <section id="testimonials" className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-indigo-700">
          What People Say
        </h2>

        <div className="grid gap-10 md:grid-cols-2">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-gray-50 p-8 rounded-2xl shadow hover:shadow-lg transition"
            >
              <p className="text-gray-700 italic mb-6 leading-relaxed">
                {t.quote}
              </p>
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold mr-4">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-gray-800">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
