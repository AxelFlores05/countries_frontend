import React, {useState, useMemo} from "react";

const CountryTable = ({countries}) => {
    //Estados
    const [searchTerm, setSearchTerm] = useState("");
    
    //Ordenamiento
    const sortedCountries = useMemo(() => {
        return [...countries].sort((a, b) =>
        a.name.localeCompare(b.name)
        );
    }, [countries]);

    //Filtro
    const filteredCountries = useMemo(() => {
        return sortedCountries.filter(country =>
        country.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [searchTerm, sortedCountries]);

    return(
        <div className="p-4">
            <div className="overflow-x-auto shadow-md rounded-lg">
                <input
                    type="text"
                    placeholder="Buscar país..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="mb-4 px-3 py-2 border rounded w-full max-w-sm"
                />
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
                    {filteredCountries.map((country, idx) => (
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