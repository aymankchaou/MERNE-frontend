import React, { useMemo, useState } from 'react'
import ReactLoading from 'react-loading';
import { useDispatch, useSelector } from "react-redux"
import { MaterialReactTable } from 'material-react-table';
import Createarticle from './Createarticle';
import Button from 'react-bootstrap/Button';
import { delArticle } from '../../../features/articleSlice';
import { toast } from 'react-toastify';

const AffichearticleAdmin = () => {

    const { articles, isLoading, error } = useSelector((state) => state.storearticles);
    const dispatch = useDispatch();
    const handleDelete = (id, ref) => {
        if (window.confirm("supprimer Article O/N")) {
            dispatch(delArticle(id));
            toast(`Article ${ref} Supprimé`, { 
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        }
    }

    //should be memoized or stable
    const columns = useMemo(
        () => [
            {
                accessorKey: 'imageart',
                header: 'Image',
                Cell: ({ cell }) => <img src={cell.getValue()}
                    width={100}
                    loading='lazy' />,
            },
            {
                accessorKey: 'reference',
                header: 'Réference',
                size: 100,
            },
            {
                accessorKey: 'designation', //normal accessorKey
                header: 'Désignation produit',
                size: 100,
            },
            {
                accessorKey: 'prix',
                header: 'Prix',
                size: 100,
            },
            {
                accessorKey: 'qtestock',
                header: 'Qte stock',
                size: 100,
            },
            {
                accessorKey: 'marque',
                header: 'Marque',
                size: 100,
            },
            {
                accessorKey: '_id',
                header: 'actions',
                size: 100,
                Cell: ({ cell, row }) => (
                    <div >
                        <Button
                            onClick={(e) => {
                                handleDelete(cell.row.original._id, cell.row.original.reference);
                            }}
                            size="md"
                            className="text-danger btn-link delete"
                        >
                            <i className="fa fa-trash" />
                        </Button>
                    </div>
                ),
            },
        ],
        [articles],
    );

    if (isLoading) return <center><ReactLoading type='spokes' color="red"
        height={'8%'} width={'8%'} /></center>
    if (error) return <p>Impossible d'afficher la liste des articles...</p>

    return (
        <div>
            <Createarticle />
            <MaterialReactTable columns={columns} data={articles} />;
        </div>
    )
}

export default AffichearticleAdmin
