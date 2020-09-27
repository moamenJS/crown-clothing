import React, { Component } from "react";

import MenuItem from "../menu-item/menu-item.component";
import sections from "./directory.data";

class Directory extends Component {
  constructor() {
    super();
    this.state = {
      directoryData: sections,
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {
          // option one
          this.state.directoryData.map((section) => (
            <MenuItem
              key={section}
              title={section.title}
              imageUrl={section.imageUrl}
              size={section.size}
            />
          ))

          /* option two
              this.state.directoryData.map(({title, imageUrl, id})=>(
                <MenuItem key={id} title={title} imageUrl={imageUrl}/>
            ))
            */
        }
      </div>
    );
  }
}

export default Directory;
