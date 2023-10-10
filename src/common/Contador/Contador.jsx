
import React, { useState } from 'react';
import './Contador.css';

export const Contador = ({intervalo}) => {

    /* 
        En React está terminantemente prohibida la modificación
        directa del valor de una variable de tipo hook de estado. Para ello
        nos haremos servir del setter correspondiente... en el ejemplo será setValor
    */
    const [valor, setValor] = useState(0);

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