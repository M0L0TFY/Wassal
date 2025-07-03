import Figure from "react-bootstrap/Figure";
import { Link } from "react-router-dom";

import saleCategory from "../assets/saleCategory.png";
import fAvCategory from "../assets/fAvCategory.png";
import bakeryCategory from "../assets/bakeryCategory.png";
import meatCategory from "../assets/meatCategory.png";
import milkCategory from "../assets/milkCategory.png";
import condimentsCategory from "../assets/condimentsCategory.png";
import snacksCategory from "../assets/snacksCategory.png";
import beveragesCategory from "../assets/beveragesCategory.png";
import arrowCategory from "../assets/arrowCategory.png";

export function Categories() {
  return (
    <>
      <br />
      <h1 style={{ textAlign: "center" }}>Categories</h1>

      <Link to={"/Category/Deals"}>
        <Figure className="category">
          <div className="img-bg">
            <Figure.Image width={120} height={180} src={saleCategory} />
          </div>
          <Figure.Caption className="captions">Deals</Figure.Caption>
        </Figure>
      </Link>

      <Link to={"/Category/Plants"}>
        <Figure className="category">
          <div className="img-bg">
            <Figure.Image width={120} height={180} src={fAvCategory} />
          </div>
          <Figure.Caption className="captions">
            Fruits & Vegetables
          </Figure.Caption>
        </Figure>
      </Link>

      <Link to={"/Category/Bakery"}>
        <Figure className="category">
          <div className="img-bg">
            <Figure.Image width={120} height={180} src={bakeryCategory} />
          </div>
          <Figure.Caption className="captions">Bakery</Figure.Caption>
        </Figure>
      </Link>

      <Link to={"/Category/Meat"}>
        <Figure className="category">
          <div className="img-bg">
            <Figure.Image width={120} height={180} src={meatCategory} />
          </div>
          <Figure.Caption className="captions">Poultry & Meat</Figure.Caption>
        </Figure>
      </Link>

      <Link to={"/Category/Dairy"}>
        <Figure className="category">
          <div className="img-bg">
            <Figure.Image width={120} height={180} src={milkCategory} />
          </div>
          <Figure.Caption className="captions">Dairy</Figure.Caption>
        </Figure>
      </Link>

      <Link to={"/Category/Condiments"}>
        <Figure className="category">
          <div className="img-bg">
            <Figure.Image width={120} height={180} src={condimentsCategory} />
          </div>
          <Figure.Caption className="captions">Condiments</Figure.Caption>
        </Figure>
      </Link>

      <Link to={`/Category/Snacks`}>
        <Figure className="category">
          <div className="img-bg">
            <Figure.Image width={120} height={180} src={snacksCategory} />
          </div>
          <Figure.Caption className="captions">Snacks</Figure.Caption>
        </Figure>
      </Link>

      <Link to={"/Category/Beverages"}>
        <Figure className="category">
          <div className="img-bg">
            <Figure.Image width={120} height={180} src={beveragesCategory} />
          </div>
          <Figure.Caption className="captions">Beverages</Figure.Caption>
        </Figure>
      </Link>

      <Link to={"/Category/All"}>
        <Figure className="category">
          <div className="img-bg">
            <Figure.Image width={120} height={180} src={arrowCategory} />
          </div>
          <Figure.Caption className="captions">View all</Figure.Caption>
        </Figure>
      </Link>
    </>
  );
}
