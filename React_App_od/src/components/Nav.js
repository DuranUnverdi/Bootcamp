import React from "react";
import "../App.css";

function Nav({ links }) {
  var resultHtml = [];
  links.forEach(({ title, id, link }) => {
    resultHtml.push(
      <div key={id} className="alignment">
        <ul>
          <li>
            <a href={link}>{title}</a>
          </li>
        </ul>
      </div>
    );
  });

  return <div>{resultHtml}</div>;
}
export default Nav;
