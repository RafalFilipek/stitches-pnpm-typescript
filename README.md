# stitches-pnpm-typescript

In `src/createStyled.tsx` you should see error on `css`:

```
The inferred type of 'css' cannot be named without a reference to '.pnpm/@stitches/react@0.0.2_react@17.0.1/node_modules/@stitches/core'. This is likely not portable. A type annotation is necessary.ts(2742)
```

Fun fact. If I remvoe `declaration` and `declarationMap` from `tsconfig.json` there is no error.

~~It works with Yarn.~~
