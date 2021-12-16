import { useEffect, useState } from "react";
import axios from "./../../util/axiosInstance";

export default function Profile(){
    const [user, setUser] = useState(null);

    //load the profile information
    const getProfile = async() => {
        try {
            //making a get request to fetch the profile information
            const response = await axios.get("/api/users/profile");
            
            if(response.status === 200){
                setUser(response.data.user);
            }
            
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        //fetch profile information when component renders.
        getProfile();
    }, [])


    return (
      <>
        {
            user != null 
            ?
            <>
            <h1>{user._id}</h1>
            <h1>{user.firstname} {user.lastname}</h1>
            <h3>{user.username}</h3>
            <h4>{user.email}</h4>
            </>
            :
            <p>No user found</p>
  
        }
  
      </>
    )
}