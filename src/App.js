import React, { memo, lazy, Suspense } from 'react';
import './App.css';
import GibsonLayout from './components/GibsonLayout';

// Lazy load the form component for code splitting
const WaitlistForm = lazy(() => import('./components/WaitlistForm'));

const App = memo(() => {
  return (
    <div className="App">
      <GibsonLayout>
        <Suspense fallback={<div className="loading-spinner" />}>
          <WaitlistForm />
        </Suspense>
      </GibsonLayout>
    </div>
  );
});

App.displayName = 'App';

export default App;

