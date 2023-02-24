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
            <WorkRecord title="Sample Title one"/>
            <WorkRecord title="Sample Title two"/>
            <WorkRecord title="Sample Title three"/>
            <WorkRecord title="Sample Title four"/>
            <WorkRecord title="Sample Title five"/>
            
        </div>
    );
}

export default OuterWraper;