import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Users from './pages/Users';
import Documents from './pages/Documents';
import Settings from './pages/Settings';
import Components from './pages/Components';
import Profile from './pages/Profile';
import { SidebarProvider } from './contexts/SidebarContext';

function App() {
  return (
    <SidebarProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<Users />} />
            <Route path="/documents" element={<Documents />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/components" element={<Components />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Layout>
      </Router>
    </SidebarProvider>
  );
}

export default App;
