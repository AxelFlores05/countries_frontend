export const fetchCountries = async () => {
  const res = await fetch("http://localhost:8080/countries");
  if (!res.ok) throw new Error("Error al obtener los países");
  return await res.json();
};