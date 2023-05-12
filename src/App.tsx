import { Route, Routes } from "react-router";
import GlobalStylesComponent from "./components/GlobalStylesComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import EventPage from "./components/EventPage";
import HomePage from "./components/HomePage";

function App() {
  return (
    <>
      <GlobalStylesComponent />
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/event" element={<EventPage />} />
      </Routes>
      <FooterComponent />
    </>
  );
}

export default App;
