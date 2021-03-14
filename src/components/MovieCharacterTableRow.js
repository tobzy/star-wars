import React from 'react';
import styled from "styled-components";
import { Loader } from "./Loader";
import { useGetMovieCharacter } from "../hooks/useMovies";


export const MovieCharacterTableRow = React.forwardRef(({characterUrl}, ref) => {
    const {data:character, isLoading:isLoadingCharacter} = useGetMovieCharacter(characterUrl);
    return (
        <MovieCharacter ref={ref} className={'movieCharacter'}>
            {isLoadingCharacter ? (
                <div style={{marginLeft: 25}}>
                    <Loader/>
                </div>
            ) : <>
                <p>{character?.name}</p>
                <p>{character?.gender}</p>
                <p className={'characterHeight'}>{character?.height}</p>
            </>}

        </MovieCharacter>
    )
});

const MovieCharacter = styled.section`
  display: flex;
  font-weight: 400;
  color: white;
  font-size: 14px;
  background: #363C3F;
  height: 50px;
    border-top: 1px solid #ebebeb;
  text-align: left;
  align-items: center;
  & p {
    width: 33%;
    padding-left: 10px;
    font-family: 'Poppins', sans-serif;
  }
  & p:first-child{
    padding-left: 25px;
  }
   & p:nth-child(2){
    text-transform: capitalize;
  }
`;