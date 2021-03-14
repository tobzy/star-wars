import styled from 'styled-components';
import starWarsImage from './assets/star-wars.png';
import React, { useState } from "react";
import { MovieSelect } from "./components/MoviesSelect";
import { MovieDetails } from "./components/MoviesDetails";

function App() {
    const [selectedMovieId, setSelectedMovieId] = useState('');

    return (
        <AppWrapper>
            <AppHeader>
                <div className='image-container'>
                    <img src={starWarsImage} width={300} alt={'Logo'}/>
                </div>
            </AppHeader>
            <MovieSelect setSelectedMovieId={setSelectedMovieId} selectedMovieId={selectedMovieId}/>
            {selectedMovieId && <MovieDetails selectedMovieId={selectedMovieId}/>}

        </AppWrapper>
    );
}

export default App;


const AppHeader = styled.header`
  background-color: #1c1e22;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Poppins', sans-serif;
  height: 320px;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: #FFE300;
`;

const AppWrapper = styled.section`
  background-color: #272c30;
  min-height: 100vh;
`;