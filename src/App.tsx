import { BrowserRouter, Routes, Route } from "react-router-dom";

// @ 별칭을 사용하여 src 폴더를 기준으로 경로를 잡습니다.
import HomePage from "@/pages/home/page"; 
import AboutPage from "@/pages/about/AboutPage"; 
import PrintMethodPage from "@/pages/print-method/PrintMethodPage";
import ContactPage from "@/pages/contact/page";
import NotFound from "@/pages/print-method/NotFound"; 

function App() {
  return (
    // 저장소 이름인 /website/와 반드시 일치해야 합니다.
    <BrowserRouter basename="/website">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/print-method" element={<PrintMethodPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
