/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
// import ButtonSUI from "semantic-ui-react/dist/commonjs/elements/Button";

const baseStyles = theme => css`
  &&& {
    & input {
      background: var(--main-primary-dark);
    }
    &:hover {
      background-color: var(--main-primary-dark);
    }
    color: var(--main-white);
    border: 0;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
    transition: all ease-in-out 0.2s;
    font-weight: bold;
    background-color: ${theme.colors.primary};
  }
`;

const Button = props => {
  const { children, onClick, className } = props;

  return (
    <button onClick={onClick} css={baseStyles} className={className}>
      {children}
    </button>
  );
};

export default Button;
