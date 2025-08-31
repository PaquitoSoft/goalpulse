/// <reference lib="webworker" />

import { cleanupOutdatedCaches, precacheAndRoute } from 'workbox-precaching';
import { clientsClaim } from 'workbox-core';

declare const self: ServiceWorkerGlobalScope;

// self.__WB_MANIFEST is default injection point
precacheAndRoute(self.__WB_MANIFEST);

// clean old assets
cleanupOutdatedCaches();

// Navigation fallback is handled by Workbox configuration in vite.config.ts

self.skipWaiting();
clientsClaim();

// Example of custom service worker logic you can add:
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// You can add more custom logic here, like:
// - Custom caching strategies
// - Background sync
// - Push notifications
// - Shared utility functions from your src/ directory
