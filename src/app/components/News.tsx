// components/News.tsx
export default function News() {
  const newsItems = [
    {
      title: 'Spreading Awareness, Saving Lives',
      date: '15 Feb, 2023',
      excerpt:
        'Our latest program brings people together who care about a cause and are ready to take action.',
    },
    {
      title: 'Together People Who Care About a Cause',
      date: '10 Feb, 2023',
      excerpt:
        'An inspiring gathering of volunteers and donors united to support our mission and share knowledge.',
    },
    {
      title: 'People Who Care About a Cause',
      date: '7 Feb, 2023',
      excerpt:
        'Community members worked hand-in-hand to provide immediate relief to those in need.',
    },
  ]

  return (
    <section id="news" className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-indigo-700">
          Latest News
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {newsItems.map((item) => (
            <article
              key={item.title}
              className="bg-white rounded-2xl shadow hover:shadow-lg transition p-6 flex flex-col"
            >
              <p className="text-sm text-indigo-600 font-medium mb-2">
                {item.date}
              </p>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-600 flex-grow">{item.excerpt}</p>
              <button className="mt-4 inline-block bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 self-start">
                Read More
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
