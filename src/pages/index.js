import React, {useEffect, useState} from "react";
import CountryTable from "@/components/CountryTable";

export default function HomePage() {
  //Estados
  
  const [countries, setCountries] = useState([]);
  
  //Efectos secundarios
  useEffect(() => {
    fetch("http://localhost:8080/countries")
      .then((res) => res.json())
      .then((data) => setCountries(data))
      .catch((error) => console.error("Error:", error));
  },[])

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-center">Lista de países</h1>
      <CountryTable countries={countries} />
    </div>
  )
}
