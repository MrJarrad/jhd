import React from "react";
import "./Icon.css";

/**
 * Icon Component
 * -----------------------------------------
 * - Reads all sizing and stroke widths from base-icon.css tokens
 * - Supports both stroke and fill icons
 * - Normalized naming: ic-[name].svg (e.g., ic-arrow-right.svg)
 * - Default color is var(--color-ct-pri)
 */

export interface IconProps {
  /** Icon name (without prefix). Example: "arrow-right" -> ic-arrow-right.svg */
  name: string;
  /** Token size scale */
  size?: "100" | "200" | "300" | "400";
  /** Override color token (e.g. var(--color-ct-sec)) */
  color?: string;
  /** Whether to render stroke (outline) or fill icon */
  stroke?: boolean;
  /** Optional CSS class for layout overrides */
  className?: string;
  /** Optional accessible label */
  label?: string;
}

export const Icon = ({
  name,
  size = "300",
  color,
  stroke = true,
  className = "",
  label,
}: IconProps) => {
  const ariaProps = label
    ? { role: "img", "aria-label": label }
    : { "aria-hidden": true };

  return (
    <svg
      className={`icon ${className}`}
      style={{
        width: `var(--icon-w-${size})`,
        height: `var(--icon-h-${size})`,
        strokeWidth: `var(--icon-stroke-width-${size})`,
        stroke: stroke ? (color || "var(--color-ct-pri)") : "none",
        fill: !stroke ? (color || "var(--color-ct-pri)") : "none",
      }}
      {...ariaProps}
    >
      <use href={`#ic-${name}`} />
    </svg>
  );
};
