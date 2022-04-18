import React,{useEffect, useState} from 'react'
import axios from 'axios'
const UserList = () => {
    const [userList,setUserList] = useState([])
    const getData=()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res=>{setUserList(res.data)})
        .catch(err=>console.log(err))
    }
    useEffect(()=>{
        getData()
    } , [])
  return (
    <div >
        <h1>UserList</h1>
       
{
userList.map (user=>
 <div key={user.id}>
<h1> {user.name}</h1>
<h1> {user.email}</h1>
<h1> {user.website}</h1>


 </div>


)

}     

    </div>
  )
}

export default UserList