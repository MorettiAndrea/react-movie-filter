import { useState, useEffect } from "react";
import movies from "./data/movies";

export default function App() {
  const [selectedGenre, setSelectedGenre] = useState("Seleziona un genere");
  const [filteredMovies, setFilteredMovies] = useState(movies);

  useEffect(() => {
    if (selectedGenre === "Seleziona un genere") {
      setFilteredMovies(movies);
    } else {
      const filtered = movies.filter((movie) => movie.genre === selectedGenre);
      setFilteredMovies(filtered);
    }
  }, [selectedGenre]);

  const handleGenreChange = (event) => {
    setSelectedGenre(event.target.value);
  };

  return (
    <>
      <label htmlFor="categoria">Scegli una categoria:</label>
      <select onChange={handleGenreChange} value={selectedGenre}>
        <option value="Seleziona un genere">Seleziona un genere</option>
        <option value="Fantascienza">Fantascienza</option>
        <option value="Thriller">Thriller</option>
        <option value="Romantico">Romantico</option>
        <option value="Azione">Azione</option>
      </select>

      <h2>Lista Film:</h2>
      <ul>
        {filteredMovies.map((movie, index) => (
          <li key={index}>
            {movie.title} ({movie.genre})
          </li>
        ))}
      </ul>
    </>
  );
}
