import {useState, useEffect} from 'react';
import Button from  '@mui/material/Button';
import axiosInstance from './axios1'
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import {useParams,useNavigate} from 'react-router-dom';


function Delete()
{  
    
    const move = useNavigate();
    const getId = useParams() 
    
    function deleteF()
    { 
       axiosInstance.delete('v1/posts/'+getId.id)
       .then((response) => 
       {
           move('/table')
       }
       
       ) 
    }


    return(
       <Container>
         <Typography variant='h3'> Are you sure you want delete {getId.id} </Typography>
              
        <Button  onClick={deleteF} variant='contained'>Delete</Button>


       </Container>


    )
}

export default Delete;