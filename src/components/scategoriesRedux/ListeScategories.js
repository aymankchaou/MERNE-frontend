import React, { useCallback, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getScategories } from '../../features/scategorieSlice';
import AfficheScategories from '../../components/scategoriesRedux/AfficheScategories'

const ListeScategories = () => {
    const dispatch = useDispatch();

    const initFetch = useCallback(() => {
        dispatch(getScategories())
    }, [dispatch])

    useEffect(() => {
        initFetch()
    }, [initFetch])
    return (
        <div>
            <AfficheScategories />
        </div>
    )
}

export default ListeScategories
