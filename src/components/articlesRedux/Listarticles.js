import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { getArticles, getArticlesPage } from '../../features/articleSlice';
import AfficheArticles from './AfficheArticles';

const Listarticles = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 14;

    const dispatch = useDispatch();

    const initFetch = useCallback(() => {
        const mesParams = {
            currentPage: currentPage,
            itemsPerPage: itemsPerPage
        };
        dispatch(getArticlesPage(mesParams));
    }, [currentPage])

    useEffect(() => {
        initFetch()
    }, [initFetch])
    return (
        <div>
            <AfficheArticles currentPage={currentPage} setCurrentPage={setCurrentPage} itemsPerPage={itemsPerPage} />
        </div>
    )
}

export default Listarticles
