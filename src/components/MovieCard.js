import React, { useState, useEffect } from "react";
import "../Main.css";
import {
  Button,
  Card,
  InputGroup,
  FormControl,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import { movieList } from "./movies";
const MovieCard = () => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [movies, setMovies] = useState(movieList);

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleInput = (e) => {
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
    console.log(data);
  };
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="auto" lg=" auto">
          <div className="mb-10">
            <InputGroup className="mt-10 sm">
              <InputGroup.Prepend></InputGroup.Prepend>
              <FormControl
                placeholder="Search"
                aria-describedby="basic-addon1"
                value={searchTerm}
                onChange={handleInput}
              />
            </InputGroup>
          </div>
          <div className=" movie">
            {searchResults.map((movie) => (
              <Card style={{ width: "18rem" }}>
                <Link to={`description/${movie.id}`}>
                  <Card.Img src={movie.posterUrl} />
                </Link>
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
        </Col>
      </Row>
    </Container>
  );
};
export default MovieCard;
