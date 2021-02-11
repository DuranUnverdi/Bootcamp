import React from "react";
import Nav from "./Nav";
import { Container } from "reactstrap";

function Header({ links }) {
  var resultHtml = [];
  links.forEach(({ id }) => {
    resultHtml.push(<div key={id}></div>);
  });

  return (
    <>
      {resultHtml}
      <Container>
        <div className="position">
          <div>
            <h2>Duran</h2>
          </div>
          <div>
            <Nav links={links} />
          </div>
        </div>
      </Container>
    </>
  );
}
export default Header;
