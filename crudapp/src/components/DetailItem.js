import {useParams} from 'react-router-dom'
import axiosInstance from './axios1';
import {useEffect,useState} from 'react';
import Album from './Album';


function Detail()
{
const id = useParams()
const [item,setItem] = useState([])

function fetchData()
{
    axiosInstance.get('v1/posts/'+id.id)
    .then((response) =>
    { const  datum = response.data
      setItem(datum)   

    }
    )
}

useEffect(fetchData,[])

return (

      <>

   <h1>{item.id}</h1>
   <Album/>
      
      </>
      
    

)    


}

export default Detail;