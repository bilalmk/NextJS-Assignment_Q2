import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 via-blue-50 to-gray-200 text-gray-800 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4 text-black">
          Country List
        </h1>
        <h2 className="text-lg text-center mb-8 text-gray-700">
        Select a country from the list below to view its details


        </h2>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { name: "Pakistan", link: "./country/pakistan" },
            { name: "India", link: "./country/india" },
            { name: "Japan", link: "./country/japan" },
            { name: "Australia", link: "./country/australia" },
            { name: "Canada", link: "./country/canada" },
          ].map((country, index) => (
            <li key={index}>
              <Link
                href={country.link}
                className="block w-full text-center py-4 bg-slate-700 text-white rounded-lg shadow-md hover:bg-red-700 hover:shadow-lg transition-all duration-300"
              >
                {country.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}