import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Recipes from "./pages/recipes";
import SideMenu from "./components/SideMenu";

function App() {
  const recipesMenuItems = {
    Recipes: [
      // Define menu items for different pages
      // Example:
      //{ title: "RECIPES", path: "/recipes" },
      //{ title: "REVIEWS", path: "/reviews" },
    ],
  };
  return (
    <>
      <div className="setBrownBack body">
        <Header />
        <main className="w-100">
          <section className="d-flex-column-center p-0 mt-4 mb-2 w-100" />

          <div className="d-flex flex-column flex-lg-row justify-content-center align-items-center align-items-lg-start w-100 mt-5 mt-md-0">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <SideMenu
                      headerImage="../imgs/Recipe_MenuHeader.png"
                      menuItems={recipesMenuItems.Recipes}
                    />
                    <Recipes />
                  </>
                }
              />

              <Route
                path="/Recipes"
                element={
                  <>
                    <SideMenu
                      headerImage="../imgs/Recipe_MenuHeader.png"
                      menuItems={recipesMenuItems.Recipes}
                    />
                    <Recipes />
                  </>
                }
              />
            </Routes>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
