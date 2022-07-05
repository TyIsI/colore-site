import React, { lazy, Suspense } from 'react';

const LazyLinks = lazy(() => import('./Links'));

const Links = props => (
  <Suspense fallback={null}>
    <LazyLinks {...props} />
  </Suspense>
);

export default Links;
