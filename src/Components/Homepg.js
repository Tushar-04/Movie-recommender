import React from 'react'
import Card from './Card';
import { useEffect, useState } from "react";
import './Homepg.css';

export default function () {
    const [MovieList, SetmovieList] = useState([]);
    const GetplaceList2 = async (query) => {
        console.log(query);
        const temp = await fetch(`
    https://api.themoviedb.org/3/discover/movie?api_key=d792c3caf37f7ef3e35506b21a815e75&sort_by=popularity.desc&include_adult=false`).then(res => res.json());
        console.log(temp.results);
        SetmovieList(temp.results);

    };
    if(MovieList.length==0){
        GetplaceList2();
    }
    return (
        <div className='Trend'>
            <h1>Movies trending this week</h1>
            {MovieList.length !== 0 && (<Card data={MovieList} />)}
        </div>
    )
}
