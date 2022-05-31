import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ROUTES } from "./constants/routes";
import { BaseLayout, MainLayout } from "./layouts";
import {
  Bowls,
  CheckOut,
  Desserts,
  Drinks,
  Final,
  Home,
  MakeYourOwn,
  NotFound,
  Payment,
  Sides,
  TimeOut,
} from "./pages";

function App() {
  return (
    <Routes>
      <Route path={ROUTES.HOME} /*element={<BaseLayout />}*/>
        <Route element={<BaseLayout />}>
          <Route index element={<Home />} />
          <Route element={<MainLayout />}>
            <Route path={ROUTES.BOWLS} element={<Bowls />} />
            <Route path={ROUTES.MAKE_YOUR_OWN} element={<MakeYourOwn />} />
            <Route path={ROUTES.SIDES} element={<Sides />} />
            <Route path={ROUTES.DESSERTS} element={<Desserts />} />
            <Route path={ROUTES.DRINKS} element={<Drinks />} />
          </Route>
        </Route>
        <Route path={ROUTES.CHECK_OUT} element={<CheckOut />} />
        <Route path={ROUTES.PAYMENT} element={<Payment />} />
        <Route path={ROUTES.FINAL} element={<Final />} />
        <Route path={ROUTES.TIMEOUT} element={<TimeOut />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
