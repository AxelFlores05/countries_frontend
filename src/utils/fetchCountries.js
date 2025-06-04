export const fetchCountries = async () => {
  const res = await fetch("http://localhost:8080/countries");

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    const message = errorData?.error || "Error al obtener los países";
    throw new Error(message);
  }

  return await res.json();
};