import React from "react";
import { useParams, useLocation, useHistory } from "react-router-dom";
import { movieList } from "./movies";
import { Card, Button, Container } from "react-bootstrap";
import ReactPlayer from "react-player";

function Description() {
  let { id } = useParams();
  let location = useLocation();
  let history = useHistory();
  console.log("id", id);
  console.log("location =>", location);
  const movie = movieList.filter((item) => item.id == id)[0];
  const goBack = () => {
    history.goBack();
  };
  return (
    <Container>
      <div>
        <Card className="text-center">
          <Card.Body>
            <Card.Title>{movie.title}</Card.Title>
            <ReactPlayer
              className="react-player fixed-bottom text-center"
              url={movie.trailerLink}
              width="50%"
              height="50%"
              controls={true}
            />
            <Card.Text> {movie.description}</Card.Text>
          </Card.Body>
        </Card>
        <Button
          variant="success"
          className="text-center"
          onClick={() => goBack()}
        >
          Back
        </Button>
      </div>
    </Container>
  );
}

export default Description;
