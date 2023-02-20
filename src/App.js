import "./index.css";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmployeesPage from "./pages/EmployeesPage";
import CustomersPage from "./pages/CustomersPage";

function App() {
  return (
    <BrowserRouter>
      <Header>
        <Routes>
          <Route path="/" element={<EmployeesPage />} />
          <Route path="/customers" element={<CustomersPage />} />
        </Routes>
      </Header>
    </BrowserRouter>
  );
}

export default App;
