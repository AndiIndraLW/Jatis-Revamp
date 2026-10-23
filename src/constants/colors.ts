/**
 * Jatis Brand Color Guide
 */
export const COLORS = {
  indigo: "#2b2170",
  white: "#ffffff",
  orange: "#ff6c22",
  grey: "#6e6e6e",
  darkGrey: "#333333",
  lightIndigo: "#f3f1f9",
} as const;

export type ColorKey = keyof typeof COLORS;
export type ColorValue = (typeof COLORS)[ColorKey];
