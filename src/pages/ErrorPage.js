import React from 'react'
import { Button, Container } from "react-bootstrap/";
import { Link } from "react-router-dom";

const imgURL =
  "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/m3/react-routing/404.gif";

  function ErrorPage() {
  return (
    <div>
      <Container>
        <h1>Invalid Route</h1>
        <img src={imgURL} alt="404 error gif" className="page-img" />
      </Container>
      <Link to="/">
        <Button>Home</Button>
      </Link>
      <br/>
    </div>
  );
}

export default ErrorPage

