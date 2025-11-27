import { notFound } from 'next/navigation';

export default async function Apps({ params }) {


    const { platform } = await params;
  console.log('Route params:', platform);
  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">

        {/* Page Header */}
        <header className="mb-8">
          <h1 className="text-3xl font-bold">{platform} Apps</h1>
          <p className="text-gray-600">Browse the best apps</p>
        </header>

        {/* Search Bar (STATIC) */}
        <div className="mb-6">
          <div className="flex w-full max-w-md items-center gap-2">
            <input
              placeholder="Search..."
              className="flex-1 px-4 py-2 rounded-md border bg-white focus:outline-none"
            />
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-md">Search</button>
          </div>
        </div>

        {/* FLEXBOX APPS LIST */}
        <section className="flex flex-wrap -mx-2">
          
          {/* ---------------- APP CARD (repeat manually) ---------------- */}
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="px-2 w-full sm:w-1/2 lg:w-1/3 mb-4">
              <article className="bg-white rounded-lg p-4 flex gap-4 hover:shadow-md transition-shadow">
                
                {/* App Icon */}
                <img
                  src={`https://picsum.photos/seed/app${i}/100/100`}
                  alt="App Icon"
                  className="w-16 h-16 rounded-md object-cover flex-none"
                />

                {/* Details */}
                <div className="flex-1 min-w-0">
                  <h2 className="text-lg font-semibold truncate">Sample App {i + 1}</h2>
                  <div className="text-sm text-gray-500">Tools • 25 MB</div>

                  <p className="mt-2 text-sm text-gray-600 line-clamp-3">
                    This is a short description of the app. It is static example text.
                  </p>

                  <div className="mt-3 flex items-center justify-between">
                    {/* Rating + Downloads */}
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-yellow-500">⭐ 4.{i}</span>
                      <div className="text-xs text-gray-500">{(i + 2) * 1000} downloads</div>
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-2">
                      <a href="#" className="text-sm text-indigo-600 hover:underline">
                        Details
                      </a>
                      <a
                        href="#"
                        className="px-3 py-1 text-sm bg-green-600 text-white rounded-md"
                      >
                        Download
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          ))}

        </section>

        {/* STATIC PAGINATION */}
        <nav className="mt-8 flex justify-center gap-2">
          <span className="px-3 py-1 bg-gray-200 text-gray-500 rounded-md">Prev</span>

          <span className="px-3 py-1 bg-indigo-600 text-white rounded-md">1</span>
          <span className="px-3 py-1 bg-white border rounded-md">2</span>
          <span className="px-3 py-1 bg-white border rounded-md">3</span>

          <span className="px-3 py-1 bg-white border rounded-md">Next</span>
        </nav>

      </div>
    </main>
  );
}
