import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import InputFormList from '../InputFormList/InputFormList';
import { addListsTC, deleteListsTC, getListsTC, updateListsTC } from './../../Redux/listReducer';
import css from './Lists.module.css';
import List from './../List/List'


const Lists = () => {

    const lists = useSelector(state => state.listPage.lists);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getListsTC());
    }, [lists.length]);

    function useNewList(list) {
        dispatch(addListsTC(list))
    };

    function useDeleteList(id) {
        dispatch(deleteListsTC(id))
    }

    function useUpdateList() { }


    const isAuth = useSelector(state => state.authPage.isAuth);

    if (!isAuth) {
        return <Redirect to={'/login'} />
    }

    let listsArray = [];
    listsArray = Object.values(lists);

    return (
        <div className={css.allTasks}>
            <div className={css.header}>
                <h2 >All Tasks</h2>
            </div>

            <div className={css.inputForm}>
                <InputFormList useNewTask={useNewList} />
            </div>

            <div className={css.tasks}>
                {listsArray.length > 1
                    ? listsArray.map(l => <List list={l} deleteList={useDeleteList} updateList={useUpdateList} />)
                    : <List list={listsArray[0]} deleteList={useDeleteList} updateList={useUpdateList} />
                }
            </div>

        </div>
    )
}

export default Lists;