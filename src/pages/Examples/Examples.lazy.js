import React, { lazy, Suspense } from 'react';

const LazyExamples = lazy(() => import('./Examples'));

const Examples = props => (
  <Suspense fallback={null}>
    <LazyExamples {...props} />
  </Suspense>
);

export default Examples;
