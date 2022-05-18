import React from 'react'
import { useEffect, useState } from "react";
import Homepg from './Homepg';
import './Navbar.css';
import SearchBar from './SearchBar';
import SearchBar2 from './SearchBar2';
import array from "./titles.json";

export default function Navbar() {
    let Names = [...new Set(array)];
    const [p1,Setp1]=useState(true);
    const [p2,Setp2]=useState(false);
    const [p3,Setp3]=useState(false);
    const changepage1 = () => {
        Setp1(true);
        Setp2(false);
        Setp3(false);
    }
    const changepage2 = () => {
        Setp1(false);
        Setp2(true);
        Setp3(false);
    }
    const changepage3 = () => {
        Setp1(false);
        Setp2(false);
        Setp3(true);
    }
    return (
        <>
            <div className='navbar'>
                <div className='navbar__title navbar__item'>Movie Recommender</div>
                <div className='navbar__item' onClick={changepage1}>Home</div>
                <div className='navbar__item' onClick={changepage2}>Find My Movie</div>
                <div className='navbar__item' onClick={changepage3}>Similar Movie</div>
            </div>
            {p1 && <Homepg />}
            {p2 && <SearchBar />}
            {p3 && <SearchBar2 inputName={Names}/>}
        </>
    )

}
