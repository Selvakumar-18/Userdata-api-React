import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function App(){
  const[data,setData] = useState(null);
  const [loading,setLoading]=useState(true);
  const [error,setError] =useState(null);

  useEffect(()=>{
    axios("https://api.jsonbin.io/b/5e860506f6c42126c823d453/1")
    .then((response)=>{
        setData(response.data);
        console.log(response.data[0].firstname);
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
      //<input 
      //placeholder="Enter" 
      //onChange={(response)}/>
    <div className="table">
        
      <h1 className="heading">User Data</h1>
      <table>
        <thead>
          <tr>

            <th>s.no</th>
            <th>firstname</th>
            <th>lastname</th>
            <th>company</th>
            <th>address</th>
            <th>city</th>
            <th>country</th>
            
          </tr>
        </thead>
      
      <tbody>
        {
          data.map((data,index)=>{
            return(
              <tr key={index}>
                <td>{index+1}</td>
                <td>{data.firstname}</td>
                <td>{data.lastname}</td>
                <td>{data.company}</td>
                <td>{data.address}</td>
                <td>{data.city}</td>
                <td>{data.country}</td> 
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