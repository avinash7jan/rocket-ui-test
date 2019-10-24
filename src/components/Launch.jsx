import React, { Component } from 'react';
import Rocket from './Rocket';

class Launch extends Component {

  render() {

    let launch = this.props.launch;

    return (
      <React.Fragment>
        <Rocket rocket={launch.rocket} {...this.props} />
      </React.Fragment>
    );
  }
}

export default Launch;
