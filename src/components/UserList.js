import React,{useState,useEffect} from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import "./UserList.css";


const UserList = () => { 
    
    const [user, setUser] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        userData();
       }, []);
    const userData = async() => {
        const data = await axios.get('https://dummyapi.io/data/v1/user?limit=20',{headers: {"app-id" : "6200f750b9d3f148c5712e63"}});
        console.log(data);
        setUser(data.data.data);
    } 
    const onClickHandler = (id) => {
        navigate(`/${id}`)
    }
   
    const cap = (title) => {
        return  title[0].toUpperCase() + title.substr(1);
    }
   
  return ( 
        <div > 
          {user.map((users) => (
             <div className= 'header'>
                
                <img style={{hight:"100px", width:'150px'}}  src = {users.picture} alt = 'user-pic' />
                <br></br>
                Unique user id: {users.id}
                <br></br>
                Name: {`${cap(users.title)} . ${users.firstName} ${users.lastName}`}
                <br></br>
                <hr></hr>
                <button style={{textAlign:'center'}} onClick = {() => onClickHandler(users.id) } > Get Full Profile </button>
                <br></br>
                
              </div>
          ))  }
         </div> 
  )
}

export default UserList;