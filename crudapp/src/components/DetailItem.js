import {useParams} from 'react-router-dom'
import axiosInstance from './axios1';
import {useEffect,useState} from 'react';


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

return (

    <>
      
    </>

)    


}

export default Detail;