import React from "react";

const CountryTable = ({countries}) => {
    return(
        <div className="overflow-x-auto shadow-md rounded-lg">
            <table className="min-w-full border border-gray-300 bg-white">
                <thead className="bg-gray-100">
                <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 border-b">Nombre</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 border-b">Capital</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 border-b">Región</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 border-b">Población</th>
                </tr>
                </thead>
                <tbody>
                {countries.map((country, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 border-b">{country.name}</td>
                    <td className="px-6 py-4 border-b">{country.capital}</td>
                    <td className="px-6 py-4 border-b">{country.region}</td>
                    <td className="px-6 py-4 border-b">{country.population.toLocaleString()}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default CountryTable;