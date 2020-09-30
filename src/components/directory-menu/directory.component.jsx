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
              key={section.id}
              title={section.title}
              imageUrl={section.imageUrl}
              size={section.size}
              linkUrl={section.linkUrl}
            />
          ))

          /* option two
              this.state.directoryData.map(({title, imageUrl, id})=>(
                <MenuItem key={id} title={title} imageUrl={imageUrl}/>
            ))
           // in menu items Receive the information in this way -> ({key, title, imageUrl})
          */

          /* option 3
           this.state.directoryData.map(({ id, ...otherSectionProps }) => (
            <MenuItem
              key={id}
              {...otherSectionProps}
              // in menu items Receive the information in this way -> ({key, title, imageUrl, linkUrl, history, size, ....})
            />
          */
        }
      </div>
    );
  }
}

export default Directory;
