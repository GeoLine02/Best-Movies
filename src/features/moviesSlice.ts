import { SerializedError, createSlice } from "@reduxjs/toolkit";
import { IMovieDetails, IMovieType } from "../types/movies";
import { createAsyncThunk } from "@reduxjs/toolkit";

interface IinitialState {
  isMoviesDataLoading: boolean;
  isMovieByIdDataLoading: boolean;
  status: "idle" | "pending" | "success" | "rejected";
  movies: IMovieType[];
  series: IMovieType[];
  movieById: IMovieDetails | null;
  serieById: IMovieDetails | null;
  error: SerializedError | null;
  search: IMovieType[];
}

const initialState: IinitialState = {
  isMoviesDataLoading: false,
  isMovieByIdDataLoading: false,
  status: "idle",
  movies: [],
  series: [],
  movieById: null,
  serieById: null,
  error: null,
  search: [],
};

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_X_RAPIDAPI_KEY,
    "X-RapidAPI-Host": "imdb-top-100-movies.p.rapidapi.com",
  },
};

export const fetchMoviesData = createAsyncThunk(
  "movieSlice/fetchMoviesData",
  async () => {
    const url = "https://imdb-top-100-movies.p.rapidapi.com/";
    const resp = await fetch(url, options);
    if (resp.ok) {
      const data = await resp.json();
      return data;
    } else {
      throw new Error();
    }
  }
);

export const fetchSeriesData = createAsyncThunk(
  "moviesSlice/fetchSeriesData",
  async () => {
    const url = "https://imdb-top-100-movies.p.rapidapi.com/series/";
    const resp = await fetch(url, options);
    if (resp.ok) {
      const data = await resp.json();
      return data;
    }
  }
);

export const fetchMovieByID = createAsyncThunk(
  "movieSlice/fetchMovieByIdData",
  async (id: string) => {
    const url = `https://imdb-top-100-movies.p.rapidapi.com/${id}`;
    const res = await fetch(url, options);
    if (res.ok) {
      const data = await res.json();
      return data;
    }
  }
);

export const fetchSeriesByID = createAsyncThunk(
  "movieSlice/fetchSeriesByIdData",
  async (id: string) => {
    const url = `https://imdb-top-100-movies.p.rapidapi.com/series/${id}`;
    const res = await fetch(url, options);
    if (res.ok) {
      const data = await res.json();
      return data;
    }
  }
);

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    searchMovies: (state, action) => {
      const searchTerm = action.payload.toLowerCase();
      state.search = [...state.movies, ...state.series].filter((movie) =>
        movie?.title?.toLowerCase().includes(searchTerm)
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMoviesData.pending, (state) => {
        state.status = "pending";
        state.isMoviesDataLoading = true;
      })
      .addCase(fetchMoviesData.fulfilled, (state, action) => {
        state.isMoviesDataLoading = false;
        state.status = "success";
        state.movies = action.payload;
      })
      .addCase(fetchMoviesData.rejected, (state, action) => {
        state.isMoviesDataLoading = false;
        state.status = "rejected";
        state.error = action.error;
      })
      //fetching moviesbyID data
      .addCase(fetchMovieByID.pending, (state) => {
        state.status = "pending";
        state.isMovieByIdDataLoading = true;
      })
      .addCase(fetchMovieByID.fulfilled, (state, action) => {
        state.isMovieByIdDataLoading = false;
        state.status = "success";
        state.movieById = action.payload;
      })
      .addCase(fetchMovieByID.rejected, (state, action) => {
        state.isMovieByIdDataLoading = false;
        state.status = "rejected";
        state.error = action.error;
      })
      // fetching series data
      .addCase(fetchSeriesData.pending, (state) => {
        state.status = "pending";
        state.isMoviesDataLoading = true;
      })
      .addCase(fetchSeriesData.fulfilled, (state, action) => {
        state.status = "success";
        state.isMovieByIdDataLoading = false;
        state.series = action.payload;
      })
      .addCase(fetchSeriesData.rejected, (state, action) => {
        state.status = "rejected";
        state.isMovieByIdDataLoading = false;
        state.error = action.error;
      })
      // fetching series by id data
      .addCase(fetchSeriesByID.pending, (state) => {
        state.isMovieByIdDataLoading = true;
        state.status = "pending";
      })
      .addCase(fetchSeriesByID.fulfilled, (state, action) => {
        state.isMovieByIdDataLoading = false;
        state.status = "success";
        state.serieById = action.payload;
      })
      .addCase(fetchSeriesByID.rejected, (state, action) => {
        state.isMovieByIdDataLoading = false;
        state.status = "rejected";
        state.error = action.error;
      });
  },
});

export const { searchMovies } = moviesSlice.actions;
export default moviesSlice.reducer;
