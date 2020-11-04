import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import InputForm from '../InputForm/InputForm';
import { addListsTC, deleteListsTC, getListsTC, updateListsTC } from './../../Redux/listAction';
import List from './../List/List';
import css from './Lists.module.css';


const Lists = () => {

    const lists = useSelector(state => state.listPage.lists);
    const uid = localStorage.getItem('uid');
    const localIsAuth = localStorage.getItem('isAuth');
    const login = useSelector(state => state.authPage.login)

    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getListsTC(uid));
    }, []);

    function useDeleteList(id) {
        dispatch(deleteListsTC(uid, id))
    }

    function useChangeIsNow(list) {
        let newIsNow = !list.isNow
        list.isNow = newIsNow;
        dispatch(updateListsTC(uid, list))
    }

    useEffect(() => {
        if (localIsAuth === 'false') {
            history.push('/')
        }
    }, [login]);

    if (localIsAuth === 'false') {
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


    return (
        <div className={css.allTasksWrapper}>
            {
                listsArray.length > 0
                    ? <div className={css.allTasks}>
                        <div className={css.header}>
                            <h2 className={css.headerText}>All Tasks</h2>
                            <div className={css.inputForm}>
                                <InputForm onSubmit = {onSubmit}

                                />
                            </div>
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