
import React, { useEffect, useState } from "react";
import './Genrelist.css';
import Globalapi from "./Globalapi";



const GenreList=()=>{
    const [genrelist,setgenrelist]=useState([])
    const [activeIndex,setActiveIndex]=useState(0);
    const [gamelist,setGameList]=useState([]);
    const [game,setGame]=useState([]);


    useEffect(()=>{
        getGenreList();

    },[])
    useEffect(()=>{
        getGameList();
    })
    
    useEffect(() => {
        if (genrelist.length > 0) {
            getGameListbyGenreId(genrelist[activeIndex].id); 
        }
    }, [activeIndex, genrelist]);
    

    const getGenreList=()=>{
        Globalapi.getGenreList.then((res)=>{
            // console.log(res.data.results)
            setgenrelist(res.data.results)
        })
     
    }
    const getGameList=()=>{
        Globalapi.getGameList.then((res)=>{
            // console.log(res);
            setGameList(res.data.results);
           
        })

    }

    const getGameListbyGenreId=(id)=>{
        Globalapi.getGameListbyGenreId(id).then((res)=>{
            // console.log(res.data.results);
             console.log("game list by genre id",res.data.results);
            setGame(res.data.results);

           
        })

    }
    const firstGame = gamelist.length > 0 && game? gamelist[18] : null;


    return(
        <div className="categories">


           <div className="genre-list">
             <h2>GenreList</h2>
             {genrelist.map((item,index)=>(
                <div 
                className="genre-img-name"
                key={item.id}
                onClick={() => {setActiveIndex(index);  getGameListbyGenreId(item.id);}}
                style={{ backgroundColor: activeIndex === index ? '#de1b4a' : 'initial' }}
                
                >


              <img src={item.image_background}></img>
              <h3 className="item-name">{item.name}</h3>
             
                 </div>
             ))}
            
            </div>
           <div className="category-list">
             <div className="image-slider">

           {firstGame  &&
            <div>
                <div className="thumbnail-text">
           <h3>{firstGame.name}</h3>
           <button>Get NOW</button></div>

            <img src={firstGame.background_image}></img>
           
            </div>
           }
                
                
           </div>  
           <div className="marquee">
            <h2>Explore Diffrenet Categories</h2>
            <h2>Explore Diffrenet Categories</h2>

            <h2>Explore Diffrenet Categories</h2>

            <h2>Explore Diffrenet Categories</h2>

           </div>
           <div className="grid-card">
            
            {
                game.map((item)=>(
                   
                    <div className="cards-div">
                        <img src={item.background_image}></img>
                      <div className="name-genre"> 
                        <ul>
                        <i className="fa-brands fa-windows fa-bounce "></i>
                        <i className="fa-brands fa-xbox fa-bounce "></i>
                        <i className="fa-brands fa-linux fa-bounce "></i>

                        </ul>

                        <p>#{item.genres[0].name}</p> 
                        </div>
                        <h2>{item.name}</h2>
                        <div className="rating">

                        <p >Rating:</p>
                        <p>⭐{item.rating}</p>
                          </div>
                          <div className="release-div">
                        <p>Release Date:</p>
                        <p>{item.released}</p>
                        </div>
                        <div className="button-div">
                     <button>Explore More</button>

                        
                      </div>
                    </div>
                    
                ))
            }
           
           </div>
             </div>
          
        </div>
    )
}

export default GenreList;