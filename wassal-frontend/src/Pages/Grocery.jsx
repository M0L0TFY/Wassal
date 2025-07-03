import { useParams } from "react-router-dom";
import { useState } from "react";
import { Login, LoginContext } from "../Components/Login";
import { Navbar } from "../Components/Navbar";
import { ItemCard } from "../Components/ItemCard";
import { Footer } from "../Components/Footer";

export function Grocery() {
  const [showLogin, setShowLogin] = useState(false);
  const { categoryName } = useParams();

  return (
    <>
      <LoginContext.Provider value={{ showLogin, setShowLogin }}>
        <Navbar />
        <Login />
      </LoginContext.Provider>
      <h1 style={{ textAlign: "center" }}>
        Enjoy our latest {categoryName} items
      </h1>
      <br />
      <div class="container py-5">
        {/* Top bar */}
        <div class="d-flex justify-content-between align-items-center mb-4">
          <h4 class="mb-0">Categories</h4>
          <div class="d-flex gap-2 align-items-center">
            <span class="text-muted">Sort by:</span>
            <button class="sort-btn">
              Newest <i class="bi bi-chevron-down ms-2"></i>
            </button>
          </div>
        </div>

        <div class="row g-4">
          {/* Filter sidebar */}
          <div class="col-lg-3">
            <div class="filter-sidebar p-4 shadow-sm">
              <div class="filter-group">
                <div class="form-check mb-2">
                  <input class="form-check-input" type="checkbox" id="all" />
                  <label class="form-check-label" for="all">
                    All
                  </label>
                </div>
                <div class="form-check mb-2">
                  <input class="form-check-input" type="checkbox" id="deals" />
                  <label class="form-check-label" for="deals">
                    Deals
                  </label>
                </div>
                <div class="form-check mb-2">
                  <input class="form-check-input" type="checkbox" id="plants" />
                  <label class="form-check-label" for="plants">
                    Fruits & Vegetables
                  </label>
                </div>
                <div class="form-check mb-2">
                  <input class="form-check-input" type="checkbox" id="bakery" />
                  <label class="form-check-label" for="bakery">
                    Bakery
                  </label>
                </div>
                <div class="form-check mb-2">
                  <input class="form-check-input" type="checkbox" id="meat" />
                  <label class="form-check-label" for="meat">
                    Poultry & Meat
                  </label>
                </div>
                <div class="form-check mb-2">
                  <input class="form-check-input" type="checkbox" id="dairy" />
                  <label class="form-check-label" for="dairy">
                    Dairy
                  </label>
                </div>
                <div class="form-check mb-2">
                  <input class="form-check-input" type="checkbox" id="snacks" />
                  <label class="form-check-label" for="snacks">
                    Snacks
                  </label>
                </div>
                <div class="form-check mb-2">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="beverages"
                  />
                  <label class="form-check-label" for="beverages">
                    Beverages
                  </label>
                </div>
              </div>

              <button class="btn btn-outline-primary w-100">
                Apply Filters
              </button>
            </div>
          </div>

          {/* Product items grid */}
          <div class="col-lg-9">
            <div class="row g-4">
              <ItemCard />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
