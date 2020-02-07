import React,{useState,useEffect} from 'react';

export default function Child(props){
    const[multiply,setMultiply]=useState(100);

    useEffect(()=>{
        document.title='child called';
        return()=>{
            document.title='parent called again';
        }
    },[props])

    return(
        <>
            <p>initial Multiply---{multiply} </p>
            <input type="button" value="Inc. multi" onClick={()=>setMultiply( multiply+1)}/>
        </>
    );
}