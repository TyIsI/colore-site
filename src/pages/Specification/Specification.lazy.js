import React, { lazy, Suspense } from 'react';

const LazySpecification = lazy(() => import('./Specification'));

const Specification = props => (
  <Suspense fallback={null}>
    <LazySpecification {...props} />
  </Suspense>
);

export default Specification;
