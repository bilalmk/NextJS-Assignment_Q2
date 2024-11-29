import CountryCard from "@/app/components/CountryCard";
import "@/app/globals.css";
import Link from "next/link";

export default function CountryName({ params }) {
  const countries = [
    { name: "Pakistan", population: 216.6, capital: "Islamabad" },
    { name: "India", population: 1391, capital: "Delhi" },
    { name: "Canada", population: 38, capital: "Ottawa" },
    { name: "Japan", population: 125.8, capital: "Tokyo" },
    { name: "Australia", population: 25.7, capital: "Canberra" },
  ];

  const findCountry = (name: string) =>
    countries.find((country) => name.toLowerCase() === country.name.toLowerCase());

  const result = findCountry(params.country_name);

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-50 via-blue-50 to-gray-200 p-8 text-gray-800">
      {result ? (
        <CountryCard
          name={result.name}
          population={result.population}
          capital={result.capital}
        />
      ) : (
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
          <h1 className="text-2xl text-red-500 font-semibold mb-4">
            {params.country_name} not found in the database. Please check the parameter name in the URL.
          </h1>
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-all duration-300"
          >
            Back
          </Link>
        </div>
      )}
    </div>
  );
}
