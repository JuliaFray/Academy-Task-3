import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteListsTC, getListsTC } from './../../Redux/listReducer';
import List from './../List/List';


const Lists = () => {

    const lists = useSelector(state => state.listPage.lists);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getListsTC());
    }, []);

    function useDeleteList(id) {
        dispatch(deleteListsTC(id))
    };

    return (
        <div>
            {lists.map(l => <List
                    list={l}
                    deleteList={useDeleteList}
                />)}
        </div>
    )
};

export default Lists;