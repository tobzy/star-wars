import React, { useRef, useState, useEffect } from 'react';
import styled from "styled-components";
import { Loader } from "./Loader";
import { useGetMovie } from "../hooks/useMovies";
import { MovieCharacterTableRow } from "./MovieCharacterTableRow";
import { Sort } from "./Sort";

export function MovieDetails({selectedMovieUrl}) {
    const {data: movie, isLoading: isLoadingMovie, refetch} = useGetMovie(selectedMovieUrl);
    const [selectedGender, setSelectedGender] = useState('');
    const [sortBy, setSortBy] = useState(null);
    const [sortOrder, setSortOrder] = useState('asc');
    const [numberOfRows, setNumberOfRows] = useState(0);
    const [heightSum, setHeightSum] = useState(0);

    const characters = movie?.characters || [];
    const characterRef = useRef([]);


    const setOrder = () => {
        if (sortOrder === 'asc') {
            setSortOrder('desc')
        } else {
            setSortOrder('asc')
        }
    };

    const sortTable = (by) => {
        setSortBy(previousValue => {
            if (previousValue === by) {
                setOrder();
                return by
            }
            return by
        });
    };

    useEffect(() => {
        setSelectedGender('')
    }, [selectedMovieUrl]);

    useEffect(() => {
        setInterval(() => {
            const tableRows = document.getElementsByClassName('movieCharacter') || [];
            setNumberOfRows(tableRows?.length);
            let heightSum = 0;
            for (let row of Array.from(tableRows)) {
                heightSum = heightSum + (Number(row?.children[2]?.innerText) || 0); //may be NaN leading to a bad sum.
            }
            setHeightSum(heightSum);
        }, 2000)
    }, [selectedGender, sortBy, sortOrder, characters.length, movie]);

    useEffect(() => {
        characters.forEach((c, i) => {
            characterRef.current[i] = React.createRef()
        });
        refetch();
    }, [characters.length]);


    const heightInInches = heightSum / 2.54;
    const heightInFeet = parseInt(heightInInches / 12);
    const remainingInches = heightInFeet >= 1 ? `${(heightInInches % 12).toFixed(1)}in` : '';

    return (
        <DetailsWrapper>
            <TitleWrapper>
                {isLoadingMovie ? (
                    <Loader/>
                ) : null}
                <MovieTitle>{isLoadingMovie ? 'Loading Movie' : `Selected Movie: ${movie.title}`}</MovieTitle>
            </TitleWrapper>
            <div>
                <OpeningCrawl direction="left">
                    {movie?.opening_crawl}
                </OpeningCrawl>
            </div>
            {!isLoadingMovie ? (
                <>
                    <SelectDropdown value={selectedGender} onChange={(e) => {
                        setSelectedGender(e.target.value)
                    }}>
                        <option value="">Filter Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </SelectDropdown>
                    <div className='table'>
                        <TableHeader>
                            <p onClick={() => {
                                sortTable('name')
                            }}>Name </p>
                            <p onClick={() => {
                                sortTable('gender')
                            }}>Gender</p>
                            <p onClick={() => {
                                sortTable('height')
                            }}>Height (cm)</p>
                        </TableHeader>
                        <Sort by={sortBy} sortOrder={sortOrder} selectedGender={selectedGender}>
                            {characters.map((characterUrl, index) => (
                                <MovieCharacterTableRow
                                    characterUrl={characterUrl}
                                    key={index}
                                    ref={characterRef.current[index]}/>
                            ))}
                        </Sort>
                        <TableFooter>
                            <p>Total characters: {numberOfRows} </p>
                            {heightSum && <p>Sum of heights: {heightSum}cm ({heightInFeet}ft/{remainingInches})</p>}
                        </TableFooter>
                    </div>
                </>
            ) : null}

        </DetailsWrapper>
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
  width: 200px;
  margin-bottom: 20px;
  padding: 6px 12px;
  outline: none;
`;

const DetailsWrapper = styled.div`
  max-width: 991px;
  padding: 50px 15px;
  margin:auto;
`;

const TitleWrapper = styled.div`
  margin-bottom: 10px;
  display: flex;
`;

const TableHeader = styled.section`
  display: flex;
  font-weight: 400;
  color: white;
  font-size: 14px;
  background: #1b1f22;
  min-height: 50px;
  text-align: left;
  align-items: center;
  & p {
    width: 33%;
    padding-left: 10px;
    font-weight: 700;
    cursor: pointer;
    font-family: 'Poppins', sans-serif;
  }
  & p:first-child{
    padding-left: 25px;
  }
`;

const TableFooter = styled(TableHeader)`
  & p {
    cursor:none;
  }
`;

const MovieTitle = styled.p`
  font-size: 19px;
  font-weight: 400;
  margin: 0;
  color: #FFE300;
  font-family: 'Poppins', sans-serif;
`;

const OpeningCrawl = styled.marquee`
    height: 50px;
    display: flex;
    align-items: center;
    font-family: 'Poppins';
    color: white;
    font-weight: 300;
    font-size: 15px;
`;

// Hook

