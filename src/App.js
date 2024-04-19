import Dashboard from "./scenes/dashboard";
import SideBar from "./scenes/global/SideBar";
import TopBar from "./scenes/global/TopBar";
import { Route, Routes } from "react-router-dom";
import Team from "./scenes/team/Team";
import Contacts from "./scenes/contacts/Contacts";
import Invoices from "./scenes/invoices/Invoices";
import Form from "./scenes/form/Form";
import Bar from "./scenes/bar/Bar";
import Pie from "./scenes/pie/Pie";
import Line from "./scenes/line/Line";
import Faq from "./scenes/faq/Faq";
import Callender from "./scenes/Callender/Callender";
import Geography from "./scenes/geography/Geography";
function App() {
  return (
    <div className="app dark:bg-slate-900 flex transition-all duration-700 ease-in-out">
      <SideBar />
      <main className="content w-full h-screen px-3">
        <TopBar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Team" element={<Team />} />
          <Route path="/Contacts" element={<Contacts />} />
          <Route path="/Invoices" element={<Invoices />} />
          <Route path="/Form" element={<Form />} />
          <Route path="/Bar" element={<Bar />} />
          <Route path="/Pie" element={<Pie />} />
          <Route path="/Line" element={<Line />} />
          <Route path="/Callender" element={<Callender />} />
          <Route path="/Faq" element={<Faq />} />
          <Route path="/Geography" element={<Geography />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
