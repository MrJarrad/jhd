"use client";
import { BuilderComponent } from "@builder.io/react";

export function BuilderSection({ model = "page", content }) {
  return (
    <section
      style={{
        fontFamily: "var(--ff-sans)",
        color: "var(--color-ct-pri)",
        background: "var(--color-bg-default-pri)", 
      }}
    >
      <BuilderComponent model={model} content={content} />
    </section>
  );
}
