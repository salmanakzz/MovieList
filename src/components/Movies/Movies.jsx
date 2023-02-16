import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { fetchMovies } from "../../api/fetchMovies";
import { Movie } from "../Movie/Movie";

export const Movies = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    const body = {
      category: "movies",
      language: "kannada",
      genre: "all",
      sort: "voting",
    };
    fetchMovies(body).then((data) => {
      setMovies(data.result);
    });
  }, []);

  return (
    <div className="w-[100%] pl-[1rem] pt-4 flex justify-center">
      <div className="w-[50%] my-[5rem]">
        <Typography component="h2" variant="h6" color="black" gutterBottom className="!font-bold !text-[1.4rem]">
          Movies
        </Typography>

        {movies?.map((movie, id) => (
          <Movie movie={movie} key={id} />
        ))}
      </div>
    </div>
  );
};
