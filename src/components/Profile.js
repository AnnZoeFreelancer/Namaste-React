import {useState,useEffect} from "react";
const Profile=(props)=>{
    const [count] = useState(0);
    const [count2,setCount2] = useState(0);
    const [count3,setCount3] = useState(0);
    useEffect(()=>{
        //API Call
        console.log("useEffect, api calls here");
    },[count,count2]);
    useEffect(()=>{
        //API Call
        console.log("useEffect, api calls here, count3 changed");
    },[count3]);
    useEffect(()=>{
        console.log("set Inteval");
        const timer = setInterval(()=>{
            console.log("sets interval inside useEFfect");
        },1000);
        return(()=>{
            console.log("useEffect Return");
            clearInterval(timer);
        })
    })
    console.log("render functional");

    return(
        <div>
            <h1>Profile functional component</h1>
            <h2>Name: {props.name}</h2>
            <h3>Count: {count}</h3>
            <h3>Count2: {count2}</h3>
            <h3>Count3: {count3}</h3>
            <button onClick={()=>{
                setCount2(1);
                setCount3(2);}}>SetCount</button>
        </div>
    );
};
export default Profile;