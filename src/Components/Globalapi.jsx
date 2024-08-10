
import axios from "axios";
const key="a6a53706f5d2437199740279bedadc18";

const axiosCreate=axios.create(
    {
        baseURL:'https://api.rawg.io/api'

    }

    
)

const getGenreList=axiosCreate.get('/genres?key='+key);
const getGameList=axiosCreate.get('/games?key='+key)
const getGameListbyGenreId=(id)=>axiosCreate.get('/games?key='+key+'&genres='+id)



export default {getGenreList,getGameList,getGameListbyGenreId};