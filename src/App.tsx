import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import InsurancePage from "./features/insurance/InsurancePage";
import PlansPage from "./features/plans/PlansPage";
import SummaryPage from "./features/summary/SummaryPage";
import Container from "./components/layout/Container/Container";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Navigate to="/insurance" />} />
          <Route path="/insurance" element={<InsurancePage />} />
          <Route path="/plans" element={<PlansPage />} />
          <Route path="/summary" element={<SummaryPage />} />
        </Routes>
      </Container>
      <Footer />
    </BrowserRouter>
  )
}

export default App
