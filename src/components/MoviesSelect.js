import React from 'react';
import styled from "styled-components";
import { Loader } from "./Loader";
import { useGetMovies } from "../hooks/useMovies";


export function MovieSelect({selectedMovieUrl, setSelectedMovieUrl}) {
    const {data: movies = [], isLoading: isLoadingMovies} = useGetMovies([]);
    const viewMovieDetails = async (event) => {
        setSelectedMovieUrl(event.target.value);
    };

    return (
        <Form>
            <SelectWrapper>
                <LabelWrapper>
                    {isLoadingMovies ? (
                        <Loader/>
                    ) : null}
                    <SelectLabel
                        htmlFor="select_movies">{isLoadingMovies ? 'Loading Movies' : 'Select a movie'}</SelectLabel>
                </LabelWrapper>
                <SelectDropdown value={selectedMovieUrl} onChange={viewMovieDetails}>
                    <option value="">Select an option to view details</option>
                    {movies.sort((a, b) => b.release_date - a.release_date).map((movie, index) => {
                        return <option value={movie.url} key={index}>{movie.title}</option>
                    })}
                </SelectDropdown>
            </SelectWrapper>
        </Form>
    );


}

const SelectDropdown = styled.select`
  border: 1px solid #d1d1d1;
  background-color: #fff;
  height: 50px;
  border-radius: 3px;
  font-size: 16px;
  color: #000;
  font-family: Poppins,Helvetica,Arial,sans-serif;
  display: block;
  width: 100%;
  padding: 6px 12px;
  outline: none;
`;

const SelectWrapper = styled.div`
  max-width: 991px;
  padding: 0 15px;
  margin:auto;
`;

const LabelWrapper = styled.div`
  margin-bottom: 10px;
  display: flex;
`;

const Form = styled.form`
  padding: 50px 0;
  /* border: 1px solid rgba(0, 0, 0, 0.6); */
`;

const SelectLabel = styled.label`
  font-size: 19px;
  font-weight: 400;
  margin: 0;
  color: #FFE300;
  display: block;
  font-family: 'Poppins', sans-serif;
`;