import React, { useState, useEffect } from 'react';

export function Sort({children, by, sortOrder, selectedGender}) {
    const [filteredCharacters, setFilteredCharacters] = useState([]);

    useEffect(() => {
        filterGender();
        if(selectedGender && !filteredCharacters.length){
            filterGender();
        }
    }, [selectedGender,filteredCharacters.length]);

    const compare = (a, b) => {

        const columnMap = {
            "name": 0,
            "gender": 1,
            "height": 2,
        };

        let innertextA = a?.ref?.current?.children[columnMap[by]]?.innerText;
        let innertextB = b?.ref?.current?.children[columnMap[by]]?.innerText;

        if(by === "height"){
            return sortOrder === 'asc' ? +innertextA-innertextB:+innertextB-innertextA;
        }

        if (innertextA < innertextB) {
            return sortOrder === 'asc' ? -1 : 1;
        }
        if (innertextA > innertextB) {
            return sortOrder === 'asc' ? 1 : -1;
        }
        return 0;
    };

    const filterGender = () => {
        if (selectedGender) {
            let charactersNodesFilteredByGender = children.filter(characterNode => {
                return characterNode.ref?.current?.children[1]?.innerText?.toLowerCase() === selectedGender
            });

            setFilteredCharacters(charactersNodesFilteredByGender);
        } else {
            setFilteredCharacters([])
        }
    };


    if (filteredCharacters.length) {
        if(by){
            filteredCharacters.sort(compare)
        }
        return filteredCharacters
    }

    if (!by) {
        // If no 'sort by property' provided, return original list
        return children
    }
    return children.sort(compare)
}

