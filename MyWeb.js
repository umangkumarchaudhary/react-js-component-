import React from "react";
import StudentDetails from "./StudentDetails";
import './MyWeb.css';

function MyWeb(){
    return(
        <div className="myweb">
            <StudentDetails 
             name="Umang Kumar"
             reg="12006142"
             course="B-Tech"
             />
        </div>
    )
}

export default MyWeb