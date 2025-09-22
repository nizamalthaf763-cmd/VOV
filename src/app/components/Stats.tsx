// components/Stats.tsx
export default function Stats() {
  const stats = [
    { label: 'Number of Supporters', value: '20M+' },
    { label: 'Volunteers Worldwide', value: '15K+' },
    { label: "We've Helped Raise", value: '68K+' },
    { label: 'Projects Funded', value: '10M+' },
  ]

  return (
    <section id="stats" className="bg-indigo-600 text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Global Impact
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((item) => (
            <div key={item.label} className="flex flex-col items-center">
              <p className="text-4xl md:text-5xl font-extrabold mb-2">
                {item.value}
              </p>
              <p className="text-sm md:text-base font-medium">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
