export async function registerBuilderComponents() {
  try {
    const { Builder } = await import("@builder.io/react");
    const { Icon } = await import("./src/app/components/Icon");

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
            "minus",
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
  } catch (e) {
    // If registration fails (e.g., server-side or in incompatible env), silently ignore
  }
}
