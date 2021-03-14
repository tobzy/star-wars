import React from 'react';
import styled, {keyframes} from "styled-components";


export function Loader() {
    return (
        <LoaderDiv/>
    );
}


const spinAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const LoaderDiv = styled.div`
  border: 2px solid transparent;
  border-top: 2px solid #FFE300; /* Yellow */
  border-radius: 50%;
  width: 15px;
  height: 15px;
  margin-right: 20px;
  animation: ${spinAnimation} 1s linear infinite;
`;