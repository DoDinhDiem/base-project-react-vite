import React from 'react';

import SlideShowComponent from './_components/slide-show.component';

const HomePage = () => {
  return (
    <div className="bg-gray-50 min-h-96">
      <div className="max-w-7xl mx-auto">
        <SlideShowComponent />
      </div>
    </div>
  );
};

export default HomePage;
