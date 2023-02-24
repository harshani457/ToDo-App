import React from 'react';
import style from './InputBox.module.css';

const InputBox = () => {

    const clickHandler = () => {
        console.log(typeWord);
     }

     let typeWord;
  
     const typeHandler = (event) => {
        console.log(event.target.value);
        typeWord = event.target.value;
     }  


    return ( 
        <div className={style.outer_div}>
           <input onChange={typeHandler} className={style.input_style} type="text" placeholder='Input Text' />
           <button className={style.button_style} type="button" onClick={clickHandler} >ADD</button>
        </div>
     );
}

export default InputBox;