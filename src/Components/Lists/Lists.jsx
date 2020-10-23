import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InputFormList from '../InputFormList/InputFormList';
import { deleteListsTC, getListsTC, updateListsTC, addListsTC } from './../../Redux/listReducer';
import List from './../List/List';
import css from './Lists.module.css';
import { Redirect } from 'react-router';


const Lists = () => {

    const isAuth = useSelector(state => state.authPage.isAuth);
    const lists = useSelector(state => state.listPage.lists);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getListsTC());
    }, []);

    function useDeleteList(id) {
        dispatch(deleteListsTC(id))
    };

    function useUpdateList(list) {
        dispatch(updateListsTC(list))
    };

    function useNewList(list) {
        dispatch(addListsTC(list))
    }

    if (!isAuth) {
        return <Redirect to={'/login'} />
    }
    // console.log(lists)

    return (
        <div className={css.allTasks}>
            <div className={css.header}>
                <h2 >Active Tasks</h2>
            </div>

            <div className={css.inputForm}>
                <InputFormList useNewTask={useNewList} />
            </div>

            <div className={css.tasks}>
                {lists.length > 1
                    ? lists.map(l => <List list={l} deleteList={useDeleteList} updateList={useUpdateList} />)
                    : <List list={lists[0]} deleteList={useDeleteList} updateList={useUpdateList} />
                }
            </div>

        </div>
    )
};

export default Lists;