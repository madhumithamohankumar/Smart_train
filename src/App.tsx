import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import Dashboard from './pages/Dashboard';
import CargoRequests from './pages/CargoRequests';
import RakeManagement from './pages/RakeManagement';
import AIRecommendations from './pages/AIRecommendations';
import MapView from './pages/MapView';
import Analytics from './pages/Analytics';
import Notifications from './pages/Notifications';
import Profile from './pages/Profile';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/cargo" element={<CargoRequests />} />
          <Route path="/rakes" element={<RakeManagement />} />
          <Route path="/ai-recommendations" element={<AIRecommendations />} />
          <Route path="/map" element={<MapView />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  );
}
