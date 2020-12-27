import React, { useState, useEffect } from "react";
import "./Main.css";
import { Button, Card, InputGroup, FormControl } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

const MovieCard = () => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [movies, setMovies] = useState([
    {
      title: "THE LORD OF THE RINGS",
      description: " ADVENTURES",
      posterUrl:
        "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
      rate: "3",
    },
    {
      title: "GOD FATHER",
      description: "DRAMA",
      posterUrl:
        "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
      rate: "5",
    },
    {
      title: "TITANIC",
      description: "Romance",
      posterUrl:
        "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
      rate: "5",
    },
    {
      title: "THE LORD OF THE RINGS",
      description: " ADVENTURES",
      posterUrl:
        "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
      rate: "3",
    },
  ]);
  const addMovie = (data) => {
    setMovies([...movies, { data }]);
  };
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  useEffect(() => {
    const results = movies.filter(
      (movie) =>
        movie.title.toLowerCase().includes(searchTerm) ||
        movie.rate.includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm, movies]);
  const handleCheange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <div className="mt-10">
        <InputGroup className="mt-10 sm">
          <InputGroup.Prepend></InputGroup.Prepend>
          <FormControl
            placeholder="Search"
            aria-describedby="basic-addon1"
            value={searchTerm}
            onChange={handleChange}
          />
        </InputGroup>
      </div>
      <div className=" movie">
        {searchResults.map((movie) => (
          <Card style={{ width: "18rem" }}>
            <Card.Img src={movie.posterUrl} />
            <Card.Body>
              <Card.Title>{movie.title}</Card.Title>
              <Card.Text> {movie.description}</Card.Text>
              <Card.Text> {movie.rate}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
      <div className="text-center">
        <Button variant="primary" onClick={handleShow}>
          +
        </Button>
        <div className="text-center">
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title className="text-muted justify-content-center">
                Add Movie{" "}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="text-center">
              <div>
                <input
                  type="text"
                  placeholder="Title"
                  name="title"
                  onChange={handleCheange}
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="image"
                  className="img-fluid"
                  name="image"
                  onChange={handleCheange}
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Description"
                  name="description"
                  onChange={handleCheange}
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Rate"
                  name="rate"
                  onChange={handleCheange}
                  required
                />
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="primary"
                onClick={(e) => {
                  e.preventDefault();
                  setMovies([...movies, data]);
                }}
              >
                ADD
              </Button>
              <Button variant="primary" onClick={handleClose}>
                close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  );
};
export default MovieCard;
