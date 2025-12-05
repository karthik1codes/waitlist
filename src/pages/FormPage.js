import React, { lazy, Suspense } from 'react';
import '../App.css';
import './FormPage.css';

const WaitlistForm = lazy(() => import('../components/WaitlistForm'));

const FormPage = () => {
  return (
    <div className="form-page-container">
      <div className="form-page-content">
        <div className="gibson-form-wrapper">
          <Suspense fallback={<div className="loading-spinner" />}>
            <WaitlistForm />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default FormPage;

