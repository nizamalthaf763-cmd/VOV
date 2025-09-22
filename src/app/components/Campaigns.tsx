type Campaign = { title: string; raised: string; goal: string; description: string; }

const campaigns: Campaign[] = [
  { title:'Supporting children’s education', raised:'₹5,200', goal:'₹10,400', description:'Despite difficult circumstances.' },
  { title:'Monthly meals for the homeless', raised:'₹1,124', goal:'₹10,400', description:'In loving memory.' },
  { title:'Freedom of Movement', raised:'₹120,000', goal:'₹600,000', description:'Neo Motion Mobility Scooters.' },
]

export default function Campaigns() {
  return (
    <section id="campaigns" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-3xl font-bold text-center mb-10">Our Campaigns</h3>
        <div className="grid gap-8 md:grid-cols-3">
          {campaigns.map(c=>(
            <div key={c.title} className="border rounded-xl p-6 shadow hover:shadow-lg transition">
              <h4 className="font-semibold text-xl mb-2">{c.title}</h4>
              <p className="text-gray-600 mb-4">{c.description}</p>
              <p className="text-sm text-gray-500 mb-2">Raised {c.raised} / Goal {c.goal}</p>
              <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
                Donate Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
