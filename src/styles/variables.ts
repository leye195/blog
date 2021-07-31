//colors
export const Colors = {
  black: "black",
  white: "white",
};

// breakpoints
export type BreakpointsType = "sm" | "md" | "lg" | "xl";
export type MediaType =
  | BreakpointsType
  | "smDown"
  | "mdDown"
  | "lgDown"
  | "xlDown"
  | "mdOnly"
  | "lgOnly"
  | "xlOnly";
type BreakpointsNum = Record<BreakpointsType, number>;
type MediaQueries = Record<MediaType, string>;

export const breakpoints: BreakpointsNum = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};

export const media: MediaQueries = {} as MediaQueries;
const breakpointKeys = Object.keys(breakpoints);

breakpointKeys.forEach((key) => {
  media[key as BreakpointsType] = `@media (min-width: ${
    breakpoints[key as BreakpointsType]
  }px)`;
});
breakpointKeys.reduce((prevMin, key): number => {
  const min: number = breakpoints[key as BreakpointsType];
  const max: number = min - 1;

  media[`${key}Down` as MediaType] = `@media (max-width: ${max}px)`;

  if (prevMin) {
    media[
      `${key}Only` as MediaType
    ] = `@media (min-width: ${prevMin}px) and (max-width: ${max}px)`;
  }

  return min;
}, 0);
