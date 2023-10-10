
import React, { useState, useEffect } from 'react';
import './Contador.css';

export const Contador = ({intervalo}) => {

    /* 
        En React está terminantemente prohibida la modificación
        directa del valor de una variable de tipo hook de estado. Para ello
        nos haremos servir del setter correspondiente... en el ejemplo será setValor
    */
    const [valor, setValor] = useState(0);

    // useEffect(()=>{
    //     // Este useEffect con el corchete vacío siempre se ejecutará cuando se monte el componente
    //     // por primera vez...
    // },[]);

    // useEffect(()=>{
    //     // Este useEffect sin el corchete, siempre se ejecutará cuando se actualice el componente
    // });

    useEffect(()=>{
        // Este useEffect, cuyo uso recomiendo por defecto...se ejecutará cuando mute el valor
        // del estado referenciado entre corchetes

        console.log("valor vale.... ", valor);

        if(valor === 9){
            setValor(15);
        }
    },[valor]);

    const operar = (operacion) => {

        if(operacion){
            setValor(valor + intervalo);
        } else {

            setValor(valor - intervalo);

        }

    }

    return (
        <div className='contadorDesign'>
            <div onClick={()=>operar(true)}>+</div>
            {valor}
            <div onClick={()=>operar(false)}>-</div>
        </div>
    )
}