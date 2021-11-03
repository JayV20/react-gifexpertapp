import React, { useState } from 'react';
import { AddCategory } from './components/AddCatergory';
import { GIfGrid } from './components/GifGrid';

export const GifExpertApp = () =>{

    //const categories =['One Punch','Samuray X', 'Dragon Ball'];
    const [categories,setCategories]= useState(['One Punch']); 
    /*
    const handlerAdd= ()=>{
        setCategories(catey => [...categories,'HunterXHunter']);
    }
    */
    return (
        <div>
            <h2>GIF EXPERT APP</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>
            <ol>
                {
                categories.map(category=>(
                    <GIfGrid
                    key={category} 
                    category={category}/>
                ) )
                }
            </ol>
        </div>
    );
}