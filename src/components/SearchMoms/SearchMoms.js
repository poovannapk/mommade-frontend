import React from 'react';
import './SearchMoms.css'
const SearchMoms = () => {
    return (
        <div className='main'>
        <div className='searchContainer__wrapper'>
        <div className='.searchContainer__tagline'>
        <h1 className='search-tagline'>Discover the best food  & drinks</h1></div>
        <div className='searchBox'>
           <select id="autoComplete__home" type="dropdown" class="mom-search"
               placeholder="Search by city or neighborhood" autocomplete="off" required="" >
                   <option value="1">--Select--</option>
                   <option value="1">Bengaluru</option>
               </select>
               <input value="" placeholder="Search for Mom's Food House" class="mom-search" />
               <button class="u-textCenter searchButton searchButton--home">Search</button>
           </div>
        </div>
         
        </div>
    );
};

export default SearchMoms;