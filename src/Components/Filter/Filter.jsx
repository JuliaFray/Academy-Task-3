import React from 'react';
import css from './Filter.module.css'

const Filter = (props) => {
    return (
        <div className={css.btns}>
            <button onClick={props.isNowSort} name='isNowSort' className={`${css.btn}`}>Sort by IsNow</button>

            {props.isList
                ? <button onClick={props.countSort} name='countSort' className={`${css.btn}`}>Sort by subTasks count</button>
                : <button onClick={props.isDoneSort} name='isDoneSort' className={`${css.btn}`}>Sort by IsDone</button>}

            <button onClick={props.showAll} name='showAll' className={`${css.btn}`}>ShowAll</button>
        </div>
    )
}

export default Filter