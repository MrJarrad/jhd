"use client";
import { BuilderComponent } from "@builder.io/react";

export function BuilderSection({ model = "page", content }) {
  return (
    <section
      style={{
        fontFamily: "var(--ff-sans)",
        color: "var(--color-ct-pri)",
      }}
    >
      <BuilderComponent model={model} content={content} />
    </section>
  );
}
