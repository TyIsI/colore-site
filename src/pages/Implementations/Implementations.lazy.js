import React, { lazy, Suspense } from 'react';

const LazyImplementations = lazy(() => import('./Implementations'));

const Implementations = props => (
  <Suspense fallback={null}>
    <LazyImplementations {...props} />
  </Suspense>
);

export default Implementations;
