import axios from "../axios/axios";

export const fetchMovies = async (body) => {
  try {
    const { data } = await axios.post(null, body);
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
