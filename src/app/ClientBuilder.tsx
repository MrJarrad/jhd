'use client';
import { BuilderComponent } from '@builder.io/react';

export default function ClientBuilder({ content }: { content: any }) {
  return <BuilderComponent model="page" content={content} />;
}
