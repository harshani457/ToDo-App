import React from 'react';
import Title from './Title';
import style from './OuterWraper.module.css';
import InputBox from './InputBox';
import WorkRecord from './WorkRecord';

const OuterWraper = () => {
    return(
        <div className={style.outer}>
            <Title/>
            <InputBox/>
            <WorkRecord/>
            <WorkRecord/>
            <WorkRecord/>
            <WorkRecord/>
            <WorkRecord/>
            
        </div>
    );
}

export default OuterWraper;