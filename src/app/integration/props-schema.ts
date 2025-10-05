
export type SurfaceOption = "base" | "thick" | "thickest" | "thin" | "thinnest";
export type SurfaceInverseOption = "base" | "thick" | "thickest" | "thin" | "thinnest";

export type ThemeOption = "light" | "dark";
export type GridOption = "contained" | "flush";
export type SpacingOption = "none" | "sm" | "md" | "lg" | "xl";
export type TypographyRole = "title" | "subtitle" | "body";
export type ActionSize = "sm" | "md" | "lg";

export interface BuilderProps {
  surface?: SurfaceOption;
  surfaceInverse?: SurfaceInverseOption;

  theme?: ThemeOption;
  grid?: GridOption;
  spacing?: SpacingOption;
  typography?: TypographyRole;
  actionSize?: ActionSize;
}
