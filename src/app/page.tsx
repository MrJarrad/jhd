import ClientBuilder from './ClientBuilder';
import '@/styles/tokens.css';
import Hero from './components/Hero';

const BUILDER_API_KEY = 'f4f23be0b5024386a74bae0866060e0c';

async function fetchBuilderPage(urlPath: string) {
  const url = `https://cdn.builder.io/api/v3/content/page?apiKey=${BUILDER_API_KEY}&limit=1&userAttributes.url=${encodeURIComponent(
    urlPath
  )}`;
  try {
    const res = await fetch(url);
    if (!res.ok) return null;
    const json = await res.json();
    return json?.results?.[0] ?? null;
  } catch (err) {
    return null;
  }
}

export default async function Page() {
  const content = await fetchBuilderPage('/');

  return (
    <main>
      <Hero />
      <ClientBuilder content={content} />
    </main>
  );
}
