import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Starred from './pages/Starred';
import MainPageLayout from './components/MainPageLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainPageLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/starred" element={<Starred />} />
        </Route>
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

        {/* <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="teams" element={<Teams />}>
            <Route path=":teamId" element={<Team />} />
            <Route path="new" element={<NewTeamForm />} />
            <Route index element={<LeagueStandings />} />
          </Route>
        </Route>
        <Route element={<PageLayout />}>
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/tos" element={<Tos />} />
        </Route>
        <Route path="contact-us" element={<Contact />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
