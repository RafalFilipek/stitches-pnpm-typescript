import { createStyled } from "@stitches/react";

const theme = {
  tokens: {
    fontSizes: {
      $10: "110px",
      $20: "20px",
      $30: "30px",
    },
    colors: {
      $red: "blue",
    },
  },
};

export const { css, styled } = createStyled(theme);
