import * as React from "react";
import { Grid, Paper } from "@mui/material";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export const Movie = ({ movie }) => {
  const {
    title,
    poster,
    director,
    genre,
    stars,
    language,
    releasedDate,
    totalVoted,
    voted,
    pageViews,
  } = movie;
  console.log(movie);
  return (
    <Grid item xs={12} className="py-1">
      <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
        <div className="flex movie-card items-center ml-[2rem]">
          <div className="grid items-center justify-center vote">
            <ArrowDropUpIcon className="!text-[3rem] !fill-[#808080]" />
            <h6 className="flex justify-center">{totalVoted}</h6>
            <ArrowDropDownIcon className="!text-[3rem] !fill-[#808080]" />
          </div>
          <div className=" mx-[4%]">
            <div className="w-[150px]">
              <img
                src={poster}
                alt=""
                className="!h-[185px] !w-[126px] rounded"
              />
            </div>
          </div>
          <div>
            <h2 className="font-bold text-[1.4rem]">{title}</h2>
            <h6>
              <span className="font-medium">Genre: {genre}</span>
            </h6>
            <h6>
              <span className="font-medium">Directer: {director}</span>
            </h6>
            <h6>
              <span className="font-medium">Starring: {stars}</span>
            </h6>
            <h6>
              Mins |{" "}
              {new Date(releasedDate).toLocaleDateString("en-us", {
                day: "numeric",
                month: "short",
              })}{" "}
              | {language}
            </h6>
            <h6 className="text-[#1a5fe7]">
              {pageViews} views | Voted by {voted.length} people
            </h6>
          </div>
        </div>
      </Paper>
    </Grid>
  );
};
