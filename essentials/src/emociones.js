import React, {useState} from "react";

function Emociones(){
    const [emotion,setEmotion] = useState("triste");
    return (
        <>
            Emoción actual es {emotion}
            <button onClick={()=>setEmotion("alegre")}>Cambiar a alegre</button>
            <button onClick={()=>setEmotion("feliz")}>Cambiar a feliz</button>
            <button onClick={()=>setEmotion("emocionado")}>Cambiar a emocionado</button>
        </>
    )
}

export default Emociones;