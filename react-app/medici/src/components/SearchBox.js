import React from 'react';

const SearchBox=({searchField,searchChange})=>{
    return(
        <input
            type='search' 
            placeholder='cauta..'
            onChange={searchChange}
            />
    );
}

export default SearchBox; 