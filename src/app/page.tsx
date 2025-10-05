import { builder } from '@builder.io/react';
import ClientBuilder from './ClientBuilder';
import '@/styles/tokens.css';

builder.init('f4f23be0b5024386a74bae0866060e0c'); // your public API key

export default async function Page() {
  const content = await builder.get('page', { url: '/' }).toPromise();

  return (
    <main>
      <ClientBuilder content={content} />
    </main>
  );
}
