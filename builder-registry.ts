import { Builder } from "@builder.io/react";
import { Icon } from "@/app/components/icon/icon";

/**
 * ============================================================
 * Builder Component Registry
 * ============================================================
 * Registers custom JHD Design System components for use in Builder.io.
 * Components registered here become available in the Builder editor
 * and for AI generation (with full token support).
 */

/* ============================================================
   Icon Component
   ============================================================ */
Builder.registerComponent(Icon, {
  name: "Icon",
  description: "Token-based SVG icon component",
  inputs: [
    {
      name: "name",
      type: "string",
      enum: [
        "arrow-right",
        "arrow-left",
        "close",
        "menu",
        "external",
        "search",
        "plus",
        "minus"
        // Add more icon names as you add files to /public/icons
      ],
      helperText: "Select an icon from the system library",
      defaultValue: "arrow-right",
    },
    {
      name: "size",
      type: "string",
      enum: ["100", "200", "300", "400"],
      defaultValue: "300",
      helperText: "Token-based size scale",
    },
    {
      name: "color",
      type: "string",
      helperText: "Accepts any token (e.g. var(--color-ct-pri))",
    },
    {
      name: "stroke",
      type: "boolean",
      defaultValue: true,
      helperText: "Whether the icon uses a stroke (outline) style",
    },
    {
      name: "label",
      type: "string",
      helperText: "Accessible label (optional)",
    },
  ],
});
