import React from 'react';
import { useEffect, useState } from "react";
import './Serach_bar.css';
import SearchIcon from "@material-ui/icons/Search";
import './Navcity.css';
import Card from './Card';

export default function SearchBar() {
    const Feature_Api="https://api.themoviedb.org/3/search/movie?api_key=d792c3caf37f7ef3e35506b21a815e75&query=Jack+Reacher&page=1"
    const [pt,Setpt]=useState(true);
    const [ht,Setht]=useState(false);
    const [MovieList, SetmovieList] = useState([]);
    const GetplaceList = async (query) => {
        console.log(query);
        const temp = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=d792c3caf37f7ef3e35506b21a815e75&query=${query}&adult=false`).then(res => res.json());
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
    const changetype1 =()=>{
        Setpt(true);
        Setht(false);
    }
    const changetype2 =()=>{
        Setpt(false);
        Setht(true);
    }

    return (
        <>
        <div className="search">
            <div className="searchInputs">
                <input type="text" placeholder='Search Movie' value={wordEnter} onChange={handleFilter} />
                <div className="icon" onClick={handleSearch}><SearchIcon/></div>
            </div>
        </div>
        {MovieList.length!==0 &&(<div className="wrap">
            <ul className="nav">
                <li><p onClick={changetype1}>DataBase</p></li>
                <li><p onClick={changetype2}>Similar movies</p></li>
            </ul>
        </div>)}

        {pt &&  MovieList.length!==0 &&(<Card data = {MovieList}/>)} 
        {/* {ht && hotelsList.length!==0 &&(<Page2 title= {hotelsList}/>)} */}
        </>
    );
}
