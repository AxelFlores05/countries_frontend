import React, {useEffect, useState} from "react";
import CountryTable from "@/components/CountryTable";
import { fetchCountries } from "@/utils/fetchCountries";

export default function HomePage() {
  //----Hooks----//
  const [countries, setCountries] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  //----API----//
  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetchCountries();
        const sorted = data.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        setCountries(sorted);
        setFiltered(sorted);
      } catch (err) {
        console.error(err);
        setError("Error al obtener los países");
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  //----Filter----//
  useEffect(() => {
    const result = countries.filter((country) =>
      country.name.toLowerCase().includes(search.toLowerCase())
    );
    setFiltered(result);
  }, [search, countries]);

  return (
    <main className="min-h-screen p-6 bg-white text-black">
      <h1 className="text-3xl font-bold mb-6">Lista de Países</h1>

      <input
        type="text"
        placeholder="Buscar por nombre"
        className="border px-4 py-2 mb-4 w-full max-w-md"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {loading && <p className="text-gray-500">Cargando países...</p>}
      {error && <p className="text-red-600">{error}</p>}

      {!loading && !error && <CountryTable countries={filtered} />}
    </main>
  )
}
