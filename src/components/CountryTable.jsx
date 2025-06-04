import React from "react";

const CountryTable = ({countries}) => {

    if (!Array.isArray(countries) || countries.length === 0) {
        return (
            <p className="text-gray-500 italic mt-4">
                No se encontraron paises para mostrar.
            </p>
        )
    }

    return(
        <div className="p-4">
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
                    {countries.map((country, idx) => (
                        <tr key={idx} className="hover:bg-gray-100">
                        <td className="px-6 py-4 border-b">{country.name}</td>
                        <td className="px-6 py-4 border-b">{country.capital}</td>
                        <td className="px-6 py-4 border-b">{country.region}</td>
                        <td className="px-6 py-4 border-b">{country.population.toLocaleString()}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default CountryTable;