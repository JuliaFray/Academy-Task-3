import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import InputForm from '../InputForm/InputForm';
import { addListsTC, deleteListsTC, getListsTC, sortByCountTC, sortListsByIsNow, updateListsTC } from './../../Redux/listAction';
import List from './../List/List';
import css from './Lists.module.css';
import { setIsAuth } from '../../Redux/authAction';
import Filter from '../Filter/Filter';


const Lists = () => {

    const lists = useSelector(state => state.listPage.lists);
    const uid = localStorage.getItem('uid');
    const localIsAuth = localStorage.getItem('isAuth');
    const isAuth = useSelector(state => state.authPage.isAuth);

    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getListsTC(uid));
    }, []);

    useEffect(() => {
        if (localIsAuth === 'true') {
            dispatch(setIsAuth(true))
        }
    }, [isAuth]);

    function useDeleteList(id) {
        dispatch(deleteListsTC(uid, id))
    }

    function useChangeIsNow(list) {
        let newIsNow = !list.isNow
        list.isNow = newIsNow;
        dispatch(updateListsTC(uid, list))
    }

    if (!isAuth) {
        history.push('/')
    }

    let listsArray = [];
    if (lists) {
        listsArray = Object.values(lists);
    } else {
        listsArray = []
    }

    const onSubmit = (data) => {
        let newTask = {
            taskListName: data.taskText,
            isNow: data.isNow
        }
        dispatch(addListsTC(uid, newTask))
    }

    function useIsNowSort() {
        dispatch(sortListsByIsNow(listsArray))
    }

    function useCountSort() {
        dispatch(sortByCountTC(uid))
    }

    function useShowAll() {
        dispatch(getListsTC(uid));
    }

    return (
        <div className={css.allTasksWrapper}>
            {
                listsArray.length > 0
                    ? <div className={css.allTasks}>
                        <div className={css.header}>
                            <h2 className={css.headerText}>All Tasks</h2>
                            <div className={css.inputForm}>
                                <InputForm onSubmit = {onSubmit} />
                            </div>
                            <Filter isList = {true} isNowSort = {useIsNowSort} 
                            countSort = {useCountSort} showAll = {useShowAll} />
                        </div>
                        <div className={css.tasks}>
                            {listsArray.length > 1
                                ? listsArray.map(l => <List list={l} changeIsNow = {useChangeIsNow} deleteList={useDeleteList}  uid={uid} />)
                                : <List list={listsArray[0]} changeIsNow = {useChangeIsNow} deleteList={useDeleteList} uid={uid} />
                            }
                        </div>
                    </div>
                    : <div className={css.allTasks}>
                        <div className={css.header}>
                            <h2 >All Tasks: 0</h2>
                            <div className={css.inputForm}>
                                <InputForm onSubmit = {onSubmit}/>
                            </div>
                        </div>
                    </div>
            }
        </div>
    )
}

export default Lists;