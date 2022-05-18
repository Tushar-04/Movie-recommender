import React from 'react';
import { useEffect, useState } from "react";
import './Serach_bar.css';
import SearchIcon from "@material-ui/icons/Search";
import Card from './Card';

export default function SearchBar() {
    const [MovieList, SetmovieList] = useState([]);
    const GetplaceList = async (query) => {
        console.log(query);
        const temp = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=d792c3caf37f7ef3e35506b21a815e75&query=${query}`).then(res => res.json());
        console.log(temp.results);
        SetmovieList(temp.results);
        
      };
    
      const handleSearch=() => {
        GetplaceList(wordEnter);
      };
    const [wordEnter,setWordEnter]=useState("");
    const handleFilter = event =>{
        const enteredWord = event.target.value;
        setWordEnter(enteredWord)
    };

    return (
        <>
        <div className="search">
            <div className="searchInputs">
                <input type="text" placeholder='Search Movie' value={wordEnter} onChange={handleFilter} />
                <div className="icon" onClick={handleSearch}><SearchIcon/></div>
            </div>
        </div>
        {MovieList.length!==0 &&(<Card data = {MovieList}/>)} 
        </>
    );
}
