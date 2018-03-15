import React, { Component } from 'react'
import Button from "../mpa-common/Button";

export default class ReactComponent extends Component {
  render() {
    return (
      <div>
        THIS IS A PAGE - MAYBE THE LOGIN
        <Button />
        <button onClick={() => this.lazyLoad()} >Lazy</button>
      </div>
    )
  }

  _lazyLoad() {
    import("./lazy")
      .then(lazy => {
        this.setState({ someData: lazy.default });
      })
      .catch(err => {
        console.error(err);
      });
  }
}
