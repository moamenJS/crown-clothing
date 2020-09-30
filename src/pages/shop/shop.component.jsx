import React from "react";

import "./shop.styles.scss";
import SHOP_DATA from "./shop.data";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
class ShopPage extends React.Component {
  constructor() {
    super();
    this.state = {
      collections: SHOP_DATA,
    };
  }
  render() {
    return (
      <div>
        {this.state.collections.map(({ id, ...iterator }) => (
          <CollectionPreview key={id} {...iterator} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
