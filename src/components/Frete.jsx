import React, { Component } from 'react';

class Frete extends Component {
  render() {
    const { shipping } = this.props;
    if (shipping === true) {
      return <span data-testid="free-shipping">Frete Grátis!</span>;
    }
    return false;
  }
}

export default Frete;
