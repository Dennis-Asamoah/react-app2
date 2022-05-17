import { useParams } from "react-router"
import {useState, useEffect} from 'react';
import axiosInstance  from "./axios1";


function Component2()   
{   
    const [items,setItems] = useState('')

    function fetchItems()
    { //axiosInstance.defaults.headers['Authorization'] = localStorage.getItem('access_token')
      //console.log(localStorage.getItem('access_token'))
      //console.log(localStorage.getItem('refresh_token'))
      axiosInstance.get('v1/foreignd/')
      .then( (response) =>
      {
        console.log(response.data)  
        //setItems(response.data)  
      }
    )

    }

    
    useEffect(fetchItems,[])

    console.log(123)
    const a = useParams(); 
    return <>
    <h1>
        Component2 is 3
    </h1>
    <h1>{a.number}</h1>
    </>
}

export default Component2