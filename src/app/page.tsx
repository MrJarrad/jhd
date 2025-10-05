// src/app/page.tsx

import { builder } from "@builder.io/react";
import { RenderBuilderContent } from "@builder.io/react";
import "@/styles/tokens.css";

// 🧩 Initialize Builder.io with your public API key
builder.init("f4f23be0b5024386a74bae0866060e0c");

// ✅ This is a Server Component (Next.js App Router)
export default async function Page() {
  // Fetch Builder.io content for this URL ("/")
  const content = await builder
    .get("page", { url: "/" })
    .toPromise();

  // Optionally handle missing content gracefully
  if (!content) {
    return (
      <main style={{ padding: "2rem", textAlign: "center" }}>
        <h1>No Builder.io content found</h1>
        <p>Create a new “Page” entry at URL “/” in Builder.io</p>
      </main>
    );
  }

  // ✅ Render the Builder.io page content
  return (
    <main>
      <RenderBuilderContent content={content} model="page" />
    </main>
  );
}
