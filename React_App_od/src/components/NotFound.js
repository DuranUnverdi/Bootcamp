import React, { Component } from "react";
import { Container } from "reactstrap";

class NotFound extends Component {
  render() {
    return (
      <div>
        <Container>
          <h2 className="Notfound">Sayfa Bulunamadı</h2>
        </Container>
      </div>
    );
  }
}
export default NotFound;
