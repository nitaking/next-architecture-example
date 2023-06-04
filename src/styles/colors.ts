export const primitiveColors = {
  black: "#1F2226",
  white: "#FFFFFF",

  // Greens
  cyan50: "#7FEFED",
  cyan100: "#5EDCDC",
  cyan200: "#48C9B0",
  cyan300: "#30B3A2",
  cyan400: "#1A9E94",

  // Reds
  rose200: "#C94860",
} as const;

export const semanticColors = {
  primary: primitiveColors.cyan200,
  secondary: primitiveColors.rose200,
} as const;
