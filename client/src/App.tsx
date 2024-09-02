import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Compiler } from "./pages/Compiler";
import { NotFound } from "./NotFound";
import { ThemeProvider } from "@/components/theme-provider";
// import { Button } from "./components/ui/button";

function App() {

  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/compiler" element={<Compiler />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* Welcom to my online web dev compiler
        <Button variant="default">Test btn</Button> */}
      </ThemeProvider>
    </>

  );
}

export default App;
