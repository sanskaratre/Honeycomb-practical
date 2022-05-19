import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import "./DetailPage.css"

const DetailPage = () => {
    const [user, setUser] = useState([]);

    useEffect(() => {
        userData();
       }, []);

    const {id} = useParams();
    
    const userData = async() => {
        const data = await axios.get(`https://dummyapi.io/data/v1/user/${id}`,{headers: {"app-id" : "6200f750b9d3f148c5712e63"}});
        console.log(data);
        setUser(data.data,data);
    } 
    
  return (
    <div className='detail'>
      
      <h2>User Full Profile</h2>
      { user.id}
      <h4>{`${user.title} . ${user.firstName} ${user.lastName}`}</h4>
      <img style={{hight:"100px", width:'150px'}}  src = {user.picture} alt = 'user-pic' />
      <br></br>
      <br></br>
      Gender: {user.gender}
      <br></br>
      Date Of Birth: {user.dateOfBirth}
      <br></br>
      <br></br>
      Email: {user.email}
      <br></br>
      Phone no.: {user.phone}
      
    </div>
)
}

export default DetailPage;