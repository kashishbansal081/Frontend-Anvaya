import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LeadForm from "./Components/Features/LeadForm";
import LeadManagementPage from "./Pages/Leads/LeadManagementPage";
import DashboardLayout from "./Pages/Dashboard/Dashboard";
import LeadListPage from "./Pages/Leads/LeadListPage";
import SalesAgentPage from "./Pages/SalesAgentPage";
import SalesAgentForm from "./Components/Features/SalesAgentForm";
import ReportsPage from "./Pages/ReportsPage";
import LeadsByStatus from "./Pages/LeadStatusViewPage";
import LeadsByAgent from "./Pages/SalesAgentViewPage";
import SettingPage from "./Pages/Setting";
import LeadStatusView from "./Components/Features/LeadStatusView";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SingupPage";
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./useContext/AuthContext";

function App() {
  const {token} = useContext(AuthContext)
  const router = createBrowserRouter([
    {
      path: "/",
      element: token ? <DashboardLayout /> : <Navigate to="/login" />,
    },
    {
      path: "/leadForm",
      element: <LeadForm />,
    },
    {
      path: "/leads/:leadId",
      element: <LeadManagementPage />,
    },
    {
      path: "/leadList",
      element: <LeadListPage />,
    },
    {
      path: "/agents",
      element: <SalesAgentPage />,
    },
    {
      path: "/agentForm",
      element: <SalesAgentForm />,
    },
    {
      path: "/reports",
      element: <ReportsPage />,
    },
    {
      path: "/leads/status",
      element: <LeadsByStatus />,
    },
    {
      path: "/leads/agents",
      element: <LeadsByAgent />,
    },
    {
      path: "/settings",
      element: <SettingPage />,
    },
    {
      path: "/demo",
      element: <LeadStatusView />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/signup",
      element: <SignupPage />,
    },
  ]);

  return (
    <div className="App">
      <ToastContainer position="top-right" autoClose={3000} />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
