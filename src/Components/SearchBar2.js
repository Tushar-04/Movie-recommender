import React from 'react';
import { useEffect, useState } from "react";
import './Serach_bar.css';
import SearchIcon from "@material-ui/icons/Search";
import Card from './Card';

export default function SearchBar2(props) {
    const [MovieList, SetmovieList] = useState([]);
    const GetplaceList = async (query) => {
        console.log(query);
        const temp = await fetch(`http://127.0.0.1:5000/recommend?title=${query}`).then(res => res.json());
        console.log(temp);
        SetmovieList(temp.results);
        
      };
    
      const handleSearch=() => {
        SetmovieList([]);
        GetplaceList(wordEnter);
      setFilteredData([]);
      };
    const [filteredData,setFilteredData]=useState([]);
    const [wordEnter,setWordEnter]=useState("");
    const handleFilter = event =>{
        const enteredWord = event.target.value;
        setWordEnter(enteredWord)
        if (enteredWord === "") {
            setFilteredData([]);
            return;
        }
        const temp= props.inputName.filter(value =>{
            return value.toLowerCase().includes(enteredWord.toLowerCase());
        });
        setFilteredData(temp);
    };

    return (
        <>
        <div className="search">
            <div className="searchInputs">
                <input type="text" placeholder='Search Movie' value={wordEnter} onChange={handleFilter} />
                <div className="icon" onClick={handleSearch}><SearchIcon/></div>
            </div>
        </div>
        {filteredData.length!==0 && (
                <div className="result">
                <div className="suggest-box">
                {filteredData.slice(0,15).map(title =>{
                    return <div className="suggest-box-item" onClick={()=>setWordEnter(title)} key = {props.inputName.indexOf(title)}>{title}</div>
                })}
                </div>
            </div>
            )}
        
        {MovieList.length!==0 &&(
            <div>
                <h1 className='simi'>Similar movies to {wordEnter}</h1>
            <Card data = {MovieList}/>
            </div>
            
        )} 
        </>
    );
}
