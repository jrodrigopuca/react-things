import React, {useState, useEffect} from 'react';

function Perfil({user}){
    const [data, setData]= useState(null)
    const [loading, setLoading]= useState(false)
    const [error, setError] = useState(null)

    useEffect(()=>{
        if (!user) return;
        setLoading(true)
        fetch(`http://api.github.com/users/${user}`)
            .then((response)=>response.json())
            .then(setData)
            .then(()=>setLoading(false))
            .catch(setError)
        
    }, [user])


    if (loading) return <p>Cargando...</p>;
    if (error) return <p>Error</p>;
    if (!data) return null;

    return(
        <>
            <h1>{data.name}</h1>
            <p>{data.location}</p>
            <img alt={data.login} src={data.avatar_url}/>
        </>
    )
}

export default Perfil;