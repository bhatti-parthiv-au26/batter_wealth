import logo from './logo.svg';
// parthiv_git
import React,{useState,useEffect} from 'react'
import axios from 'axios';


const App=()=>{
  const [data,setData]=useState([])
  useEffect(()=>{
    axios.get('https://api.github.com/users').then(res=>setData(res.data))
  },[])
  return(
    <div>
    {
      data && data.map((obj)=>{
        return(
        <div>
        <h1>{obj.login}</h1>
        <a href={obj.html_url}>url</a>
        </div>
        )
      })
    }
  )
  </div>
  )
}

  
  


export default App;
