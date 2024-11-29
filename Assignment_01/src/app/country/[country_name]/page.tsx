import "@/app/globals.css";
import Link from "next/link";

export default function CountryName({ params }) {
    const countries = [
        {
          name: "Pakistan",
          population: 216.6, // Updated in millions
          capital: "Islamabad",
        },
        {
          name: "India",
          population: 1391, // Updated in millions
          capital: "Delhi",
        },
        {
          name: "Canada",
          population: 38, // Updated in millions
          capital: "Ottawa",
        },
        {
          name: "Japan",
          population: 125.8, // Updated in millions
          capital: "Tokyo",
        },
        {
          name: "Australia",
          population: 25.7, // Updated in millions
          capital: "Canberra",
        },
      ];
      

  function findCountry(name: string) {
    return countries.find(
      (country) => name.toLowerCase() === country.name.toLowerCase()
    );
  }

  const result = findCountry(params.country_name);

  return (
    <div className=" min-h-screen bg-gradient-to-r from-gray-50 via-blue-50 to-gray-200 p-8 text-gray-800">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
        {result ? (
          <div>
            <h1 className="text-3xl font-bold mb-4 text-blue-600
            ">
              Country Name: <span className="text-gray-800">{result.name}</span>
            </h1>
            <p className="text-lg mb-2">
              <span className="font-semibold text-gray-700">Population:</span>{" "}
              {result.population.toLocaleString()} (in thousands)
            </p>
            <p className="text-lg mb-4">
              <span className="font-semibold text-gray-700">Capital:</span>{" "}
              {result.capital}
            </p>
          </div>
        ) : (
          <h1 className="text-2xl text-red-500 font-semibold mb-4">
            {params.country_name} not found in the database. Please check the
            parameter name in the URL.
          </h1>
        )}
        <div>
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-all duration-300"
          >
            Back
          </Link>
        </div>
      </div>
    </div>
  );
}