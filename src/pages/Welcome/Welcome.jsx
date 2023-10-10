
import React from 'react';
import './Welcome.css';
import { Contador } from '../../common/Contador/Contador';

export const Welcome = () => {

    return (
        <div className='welcomeDesign'>
            soy welcome...
            <Contador intervalo={2}/> 
            <Contador intervalo={3}/>
            <Contador intervalo={214}/>
            <Contador intervalo={67}/> 
        </div>
    )
}