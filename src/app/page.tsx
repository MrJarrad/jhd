import { builder } from "@builder.io/react";
import { RenderBuilderContent } from "@builder.io/react";
import "@/styles/tokens.css";

// 👇 Replace this with your actual Builder.io API Key (found under Account → Settings → API Keys)
builder.init("f4f23be0b5024386a74bae0866060e0c");

export default async function Page() {
  // Fetch the Builder.io content for the page matching the current URL (in this case, "/")
  const content = await builder
    .get("page", { url: "/" })
    .toPromise();

  return (
    <main>
      <RenderBuilderContent content={content} model="page" />
    </main>
  );
}
