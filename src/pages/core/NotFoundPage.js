import React from "react";
import { Image, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import NotFoundImage from "../../assets/images/404.png";

const NotFoundPage = () => {
  return (
    <main className="mt-4 text-center">
      <h1 className="display-5">
        Look like you are lost, let me help to go home
      </h1>
      <Container>
        <Image
          fluid
          style={{ height: 300 }}
          src={NotFoundImage}
          alt="404 Not Found"
        />
      </Container>
      <section>
        <Link className="btn btn-primary" to="/">
          <Button size="lg">Way To Home</Button>
        </Link>
      </section>
    </main>
  );
};

export default NotFoundPage;
