import React, {useReducer} from "react";

function Check(){
    const [checked,toggle] = useReducer(
        (checked)=>!checked,
        false
    );

    return (
        <>
            <h1>Elegir pan</h1>
            <input
                id="checkbox" 
                type="checkbox"
                value={checked}
                onChange={toggle}
            />
            <label htmlFor="checkbox">{checked?'Con pan':'Sin pan'}</label>
        </>
    )
}

export default Check;