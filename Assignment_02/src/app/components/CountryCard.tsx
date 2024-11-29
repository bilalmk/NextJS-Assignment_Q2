import Link from "next/link";

interface CountryProps {
  name: string;
  population: number;
  capital: string;
}

export default function CountryCard({
  name,
  population,
  capital,
}: CountryProps) {
  return (
    <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
      <h1 className="text-3xl font-bold mb-4 text-blue-600">
        Country Name: <span className="text-gray-800">{name}</span>
      </h1>
      <p className="text-lg mb-2">
        <span className="font-semibold text-gray-700">Population:</span>{" "}
        {population.toLocaleString()} (in thousands)
      </p>
      <p className="text-lg mb-4">
        <span className="font-semibold text-gray-700">Capital:</span> {capital}
      </p>
      <div>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-all duration-300"
        >
          Back
        </Link>
      </div>
    </div>
  );
}

