/**
 * Created by pusti on 26.08.2017.
 */
import React from 'react';
import Forward from 'material-ui/svg-icons/content/forward';
import s from './Items.scss';

export const Short = ({oldBase,newBase}) => (
    <div className={s.container}>
        <span >{oldBase}</span>
        <Forward color="#009a00" className={s.arrow}/>
        <span>{newBase}</span>
    </div>
);

export const Long = ({date, oldBase,oldAmount,newBase,newAmount}) => (
    <div>
        <em className={s.date}>{date}:</em>
        <span className={s.out}> {oldAmount+" "+oldBase} </span>
        <span> has been changed into </span>
        <span className={s.in}> {newAmount+" "+newBase} </span>
    </div>
);