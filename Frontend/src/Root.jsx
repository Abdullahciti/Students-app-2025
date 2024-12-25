import { Outlet, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import NavbarLg from "./NavbarLg";
import NavbarSm from "./NavbarSm";
import useWindowSize from "./hooks/useWindowSize";

function App() {
  const location = useLocation();
  const { width } = useWindowSize();

  return (
    <AnimatePresence>
      <div className="bg-mainColor flex max-w-full min-h-screen sm:flex-row flex-col relative overflow-hidden">
        <NavbarLg />
        <NavbarSm />
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={`mx-auto my-6 ${
            width > 767 ? "w-8/12" : "w-11/12 min-w-[360px] mt-24"
          }`}
        >
          <Outlet />
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export default App;
