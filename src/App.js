import axios from 'axios';
import './App.css';
import React, { useEffect, useState } from 'react';

export default function App(){
  const[data,setData] = useState(null);
  const [loading,setLoading]=useState(true);
  const [error,setError] =useState(null);

  useEffect(()=>{
    axios("https://reqres.in/api/users?page=2")
    .then((response)=>{
        setData(response.data);
        console.log(response.data.data[3].first_name);
    })
    .catch((error)=>{
      console.error("error fetch data:",error);
      setError(error);
    })
    .finally(()=>{
      setLoading(false);
    });

  },[]);

  if (loading) return "loading";
  if (error) return "error";

  return(
    <div className="table">
      <h1 className="heading">User Data</h1>
      <table>
        <thead>
          <tr>
            <th>S.no</th>
            <th>Id</th>
            <th>Email</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Image</th>
            
          </tr>
        </thead>
      
      <tbody>
        {
          data.data.map((data,index)=>{
            return(
              <tr key={index}>
                <td>{index+1}</td>
                <td>{data.id}</td>
                <td>{data.email}</td>
                <td>{data.first_name}</td>
                <td>{data.last_name}</td>
                <td>
                  <img src={data.avatar}/>
                </td>
              </tr>
            )
          })
        }
      </tbody>
      </table>
      {/* <pre>{JSON.stringify(data,null,2)}</pre> */}
    </div>
  );
}
