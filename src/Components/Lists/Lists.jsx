import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import InputFormList from '../InputFormList/InputFormList';
import { addListsTC, deleteListsTC, getListsTC } from './../../Redux/listAction';
import List from './../List/List';
import css from './Lists.module.css';


const Lists = () => {

    const lists = useSelector(state => state.listPage.lists);
    // const uid = useSelector(state => state.authPage.userUid);
    const uid = localStorage.getItem('uid');
    const localIsAuth = localStorage.getItem('isAuth');
    const isAuth = useSelector(state => state.authPage.isAuth);
    const login = useSelector(state => state.authPage.login)
    const history = useHistory();
    const dispatch = useDispatch();

    // debugger
    useEffect(() => {
        dispatch(getListsTC(uid));
    }, []);

    function useNewList(list) {
        dispatch(addListsTC(uid, list))
    };

    function useDeleteList(id) {
        dispatch(deleteListsTC(uid, id))
    }

    if (localIsAuth === 'false') {
        console.log('push /')
        history.push('/')
    }

    let listsArray = [];
    if (lists) {
        listsArray = Object.values(lists);
    } else {
        listsArray = []
    }

    return (
        <div className={css.allTasksWrapper}>
            {
                listsArray.length > 0
                    ? <div className={css.allTasks}>
                        <div className={css.header}>
                            <h2 className={css.headerText}>All Tasks</h2>
                            <div className={css.inputForm}>
                                <InputFormList useNewTask={useNewList} />
                            </div>
                        </div>
                        <div className={css.tasks}>
                            {listsArray.length > 1
                                ? listsArray.map(l => <List list={l} deleteList={useDeleteList}  uid={uid} />)
                                : <List list={listsArray[0]} deleteList={useDeleteList} uid={uid} />
                            }
                        </div>
                    </div>
                    : <div className={css.allTasks}>
                        <div className={css.header}>
                            <h2 >All Tasks: 0</h2>
                            <div className={css.inputForm}>
                                <InputFormList useNewTask={useNewList} />
                            </div>
                        </div>
                    </div>
            }
        </div>
    )
}

export default Lists;