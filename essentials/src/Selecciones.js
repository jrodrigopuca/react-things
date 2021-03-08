import React, {useState, useEffect} from "react";

function Selecciones(){
    const [food,setFood] = useState("");
    const [dessert,setDessert] = useState("");

    useEffect(()=>{
        console.log(`Bien, elegiste ${food} de plato principal`)
    },[food])

    useEffect(()=>{
        console.log(`Bien, elegiste ${dessert} de postre`)
    },[dessert])

    return (
        <>
            <p>{(food && dessert)? `la comida principal elegida es ${food} y el postre ${dessert}`:''}</p>
            
            <button onClick={()=>setFood("bondiola")}>Elegir Bondiola</button>
            <button onClick={()=>setFood("milanesa")}>Elegir Milanesa</button>
            <button onClick={()=>setFood("albondigas")}>Elegir Albondigas</button>

            <button onClick={()=>setDessert("Gelatina")}>Elegir Gelatina</button>
            <button onClick={()=>setDessert("Flan")}>Elegir Flan</button>
        </>
    )
}

export default Selecciones;