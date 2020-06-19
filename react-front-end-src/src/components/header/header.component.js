import React from "react";
import logo from "../../logo.svg";

import {
  imgStyle,
  navStyle,
  listStyle,
  navItemStyle,
  ghLinkStyle,
} from "./header.style";

export const Header = () => (
  <nav style={navStyle}>
    <ul className="container" style={listStyle}>
      <li style={navItemStyle}>
        <img alt="CloudFormation Linter" src={logo} style={imgStyle} />
      </li>

      <li style={navItemStyle} className="float-right">
        <a
          href="//github.com/aws-cloudformation/cfn-python-lint"
          target="_blank"
          rel="noopener noreferrer"
          style={ghLinkStyle}
        >
          GitHub
        </a>
      </li>
    </ul>
  </nav>
);
