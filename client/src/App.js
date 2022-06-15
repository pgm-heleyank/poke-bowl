import { Route, Routes, useLocation } from "react-router-dom";
import { request } from "graphql-request";
import "./App.scss";
import { ROUTES } from "./constants/routes";
import { BaseLayout, MainLayout } from "./layouts";
import {
  BowlsPage,
  CheckOutPage,
  DessertsPage,
  DrinksPage,
  FinalPage,
  HomePage,
  MakeYourOwnPage,
  NotFoundPage,
  PaymentPage,
  PayPage,
  SidesPage,
  SuccessPage,
  TimeOutPage,
} from "./pages";
import { createContext, useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

/* contexts*/
export const DataContext = createContext();
export const OrderContext = createContext();

const App = () => {
  const [data, setData] = useState(null);
  const [order, setOrder] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      const data = await request(
        "https://api-eu-west-2.graphcms.com/v2/cl3njxpr53ywe01z10dg5bezs/master",
        `
        query Data {
          bowls {
            id
            description
            inPriceItems
            name
            price
            svg {
              id
              url
            }
            ingredients {
              id
              isCrustation
              isFish
              isGluten
              isLactose
              isNut
              isVegan
              isVegetarian
              name
              price
              svg {
                id
                url
              }
            }
          }
          desserts {
            id
            isCrustation
            isFish
            isGluten
            isLactose
            isNut
            isVegan
            isVegetarian
            name
            svg {
              id
              url
            }
          }
          drinks {
            id
            name
            price
            svg {
              id
              url
            }
          }
          ingredients {
            id
            isCrustation
            isFish
            isGluten
            isLactose
            isNut
            isVegan
            isVegetarian
            name
            price
            svg {
              id
              url
            }
            label
          }
          plates {
            id
            inPriceItems
            name
            price
            svg {
              id
              url
            }
          }
          sides {
            id
            description
            inPriceItems
            name
            price
            ingredients {
              id
              isCrustation
              isFish
              isGluten
              isLactose
              isNut
              isVegan
              isVegetarian
              name
              price
              svg {
                id
                url
              }
            }
            svg {
              id
              url
            }
          }
        }
        
    `
      );

      setData(data);
    };

    fetchData();
  }, []);

  if (!data) return <p>loading....</p>;

  return (
    <DataContext.Provider value={[data, setData]}>
      <OrderContext.Provider value={[order, setOrder]}>
        <AnimatePresence>
          <Routes location={location} key={location.key}>
            <Route path={ROUTES.HOME} /*element={<BaseLayout />}*/>
              <Route element={<BaseLayout />}>
                <Route index element={<HomePage />} />
                <Route element={<MainLayout />}>
                  <Route path={ROUTES.BOWLS} element={<BowlsPage />} />
                  <Route
                    path={ROUTES.MAKE_YOUR_OWN}
                    element={<MakeYourOwnPage />}
                  />
                  <Route path={ROUTES.SIDES} element={<SidesPage />} />
                  <Route path={ROUTES.DESSERTS} element={<DessertsPage />} />
                  <Route path={ROUTES.DRINKS} element={<DrinksPage />} />
                </Route>
              </Route>
              <Route path={ROUTES.CHECK_OUT} element={<CheckOutPage />} />
              <Route path={ROUTES.PAY} element={<PayPage />} />
              <Route path={ROUTES.PAYMENT} element={<PaymentPage />} />
              <Route path={ROUTES.SUCCESS} element={<SuccessPage />} />
              <Route path={ROUTES.FINAL} element={<FinalPage />} />
              <Route path={ROUTES.TIMEOUT} element={<TimeOutPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </AnimatePresence>
      </OrderContext.Provider>
    </DataContext.Provider>
  );
};

export default App;
