import { globalCss } from "@stitches/react";

export const globalStyles = globalCss({
    '*': { 
        margin: 0,
        padding: 0,
        boxSizing: 'border-box'
    },
    'body': {
        fontFamily: 'Roboto, sans-serif',
        background: '#E2E2E2'
    }
  });