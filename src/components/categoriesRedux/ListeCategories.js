import React, { useCallback, useEffect } from 'react'
import { getCategories } from '../../features/categorieSlice'
import AfficheCategories from './AfficheCategories'
import { useDispatch } from 'react-redux'

const ListeCategories = () => {
    const dispatch = useDispatch()

    const initFetch = useCallback(() => {
        dispatch(getCategories())
    }, [dispatch])

    useEffect(() => {
        initFetch()
    }, [initFetch])
    return (
        <div>
            <AfficheCategories />
        </div>
    )
}

export default ListeCategories
