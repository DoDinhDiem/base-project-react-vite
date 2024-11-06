import { RouterProvider } from 'react-router-dom';

import { router } from './configs/router.config';
import { LanguageProvider } from './hook/use-language';
import ReactQueryProvider from './react-query/provider';

const App = () => {
  return (
    <>
      <ReactQueryProvider>
        <LanguageProvider>
          <RouterProvider router={router} />
        </LanguageProvider>
      </ReactQueryProvider>
    </>
  );
};

export default App;
