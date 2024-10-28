import { RouterProvider } from 'react-router-dom';

import { router } from './configs/router.config';
import ReactQueryProvider from './react-query/provider';

const App = () => {
  return (
    <>
      <ReactQueryProvider>
        <RouterProvider router={router} />
      </ReactQueryProvider>
    </>
  );
};

export default App;
