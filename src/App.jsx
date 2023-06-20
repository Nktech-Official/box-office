import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Home from './pages/Home';
import Starred from './pages/Starred';
import MainPageLayout from './components/MainPageLayout';
import Show from './pages/Show';
import { GolobalThemes } from './theme';

const queryClinet = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClinet}>
      <GolobalThemes>
        <BrowserRouter>
          <Routes>
            <Route element={<MainPageLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/starred" element={<Starred />} />
            </Route>

            <Route path="/show/:showId" element={<Show />} />

            <Route
              path="*"
              element={
                <div
                  style={{
                    height: '100vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontWeight: 800,
                    fontSize: '2.5rem',
                  }}
                >
                  404 Page not Found
                </div>
              }
            />
          </Routes>
        </BrowserRouter>
      </GolobalThemes>
    </QueryClientProvider>
  );
}

export default App;
