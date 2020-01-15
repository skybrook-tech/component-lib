/** @jsx jsx */
import React, { Fragment } from "react";
import { addDecorator } from "@storybook/react";
import { Global, css, jsx } from "@emotion/core";
import { ThemeProvider } from "emotion-theming";
import globalCSS from "../src/theme/global-css";
import theme from "../src/theme/theme";
import "semantic-ui-css/semantic.min.css";

const ThemeDecorator = storyFn => (
  <>
    <ThemeProvider theme={theme}>
      <Global styles={globalCSS} />
      <div
        css={css`
          padding: 20px;
        `}
      >
        {storyFn()}
      </div>
    </ThemeProvider>
  </>
);

addDecorator(ThemeDecorator);
