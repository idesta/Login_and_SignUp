import React, {useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home(){

    const navigate = useNavigate ();

    useEffect(() => {

        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/login", {replace: true});
        }
    }, [navigate]);



    const handleLogout = () => {

        localStorage.removeItem("token")

        navigate("/login", {replace: true});
    };


    return(
        <div >
            <h2> Home Page </h2>
            <button onClick={handleLogout} className="btn btn-success w-25 rounded-0"> Logout  </button>

        </div>
        
    );
}

export default Home;