import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGrid'
import {GifGridItem} from './GifGridItem';
import "animate.css";
// import SpinnerLoading from './SpinnerLoading';

export const GifGrid = ( { category } ) => {

   const { data: images, loading } = useFetchGifs( category );

   

  return (
        <>
        <h3>{category}</h3> 

        {loading && <p className="animate__flash">Loading</p>}       
       

        <div className="cardContainer animate__backInDown">            
            {   
                images.map( img => 
                    <GifGridItem 
                        key={img.id} 
                        {...img}
                    /> 
                )
            }            
        </div>
        </>
    )
}
