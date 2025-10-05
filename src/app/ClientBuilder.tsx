'use client';
import { useEffect } from 'react';
import { builder, BuilderComponent } from '@builder.io/react';
import { registerBuilderComponents } from '../../builder-registry';

const BUILDER_API_KEY = 'f4f23be0b5024386a74bae0866060e0c';

export default function ClientBuilder({ content }: { content: any }) {
  useEffect(() => {
    // Initialize builder client-side and register components
    (async () => {
      try {
        builder.init(BUILDER_API_KEY);
      } catch (e) {
        // ignore initialization errors
      }

      try {
        await registerBuilderComponents();
      } catch (e) {
        // ignore registration errors
      }
    })();
  }, []);

  return <BuilderComponent model="page" content={content ?? undefined} />;
}
