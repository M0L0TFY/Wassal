import { useContext } from "react";
// import { CartContext } from "./CartContext";
import BasketIcon from "../assets/BasketIcon.png";
import BasketRemoveIcon from "../assets/BasketRemoveIcon.png";

export function ItemCard({ item }) {
  return (
    <>
      {/* <!-- Product Card 1 --> */}
      <div class="col-md-4">
        <div class="product-card shadow-sm">
          <div class="position-relative">
            <img
              src="https://via.placeholder.com/300x200"
              class="product-image w-100"
            />
            <span class="discount-badge">90%</span>
          </div>
          <div class="p-3">
            <span class="category-badge mb-2 d-inline-block">Category</span>
            <h6 class="mb-1">Item</h6>
            <div class="d-flex justify-content-between align-items-center">
              <span class="price-discount">EGP 999.99</span>
              <span class="price-before">EGP 999.99</span>
              <button class="btn">
                <img src={BasketIcon} alt="Add to cart" className="cartbtn" />
                <span className="RemoveCartbtn">
                  <img
                    src={BasketRemoveIcon}
                    alt="Remove from cart"
                    className="cartbtn"
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
