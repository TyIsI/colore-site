import React, { lazy, Suspense } from 'react';

const LazyFAQ = lazy(() => import('./FAQ'));

const FAQ = props => (
  <Suspense fallback={null}>
    <LazyFAQ {...props} />
  </Suspense>
);

export default FAQ;
