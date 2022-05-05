
import React from 'react'
import {Card ,Button } from 'react-bootstrap'
import MovieRating from '../Rating/Rating'

const MovieCard = ({movie}) => {
return (
    <div>
        
    
    
    
        <Card style={{ width: '18rem' , color:'black' , backgroundColor:'purple' }}>
        <Card.Img variant='Dark' src={movie.posterUrl} />
    <Card.Body>
    <Card.Title>{movie.title}</Card.Title>
    <Card.Text>{movie.description}</Card.Text>
    <MovieRating isMovieRating={true} movieRating={movie.rate}/>
    <br></br>

    <Button variant="dark">Watch </Button>{' '}
    </Card.Body>
</Card>


    </div>
)
}

export default MovieCard