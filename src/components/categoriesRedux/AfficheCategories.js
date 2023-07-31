import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ReactLoading from 'react-loading';
import { useSelector } from 'react-redux';

const AfficheCategories = () => {
    const { categories, isLoading, error } = useSelector((state) => state.storecategories)

    const renderCategories = () => {
        if (isLoading) return <center><ReactLoading type='spokes' color="red"
            height={'8%'} width={'8%'} /></center>
        if (error) return <p>Impossible d'afficher la liste des categories...</p>
        return <React.Fragment>
            {categories &&
                <div
                    style={{ "display": "flex", "flexWrap": "wrap", "justifyContent": "left" }}>
                    {categories.map((cat, ind) => {
                        return <Card sx={{ maxWidth: 'auto', margin: 1 }} key={ind}>
                            <CardMedia
                                component="img"
                                alt="image"
                                height="160"
                                image={cat.imagecategorie}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div">
                                    {cat.nomcategorie}
                                </Typography>
                            </CardContent>
                        </Card>
                    })}</div>
            }
        </React.Fragment>
    }

    return (
        <div className='container'>
            {renderCategories()}
        </div>
    )
}

export default AfficheCategories
