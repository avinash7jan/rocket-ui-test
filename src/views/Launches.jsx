import React, { Component } from 'react';
import ConnectedView from './ConnectedView';
import { fetchLaunchesIfNeeded } from "../actions/Launches";
import Launch from '../components/Launch';
import Accordion from '../components/accordion/Accordion';
import { fetchRocketsIfNeeded } from '../actions/Rockets';

class LaunchesView extends Component {
  componentDidMount() {
    const { dispatch, launchCollection, rocketCollection } = this.props;
    fetchLaunchesIfNeeded({ dispatch, launchCollection });
    fetchRocketsIfNeeded({ dispatch, rocketCollection });
  }

  getContent() {
    const { launchCollection, rocketCollection } = this.props;

    if ((!launchCollection || launchCollection.fetching)
        && (!rocketCollection || rocketCollection.fetching)) {
      return <div> LOADING </div>;
    }

    if (!launchCollection.launches.length && !rocketCollection.rockets.length) {
      return <div> NO DATA </div>;
    }

    console.log(rocketCollection.rockets)

    return <Accordion
      titleProp='mission_name'
      items={launchCollection.launches}
      itemTemplate={(launch) => <Launch {...{
        key: launch.launch_id,
        launch,
        rocket: rocketCollection.rockets.find(r => r.rocket_id === launch.rocket.rocket_id)
      }} />}
    ></Accordion>;
  }

  render() {
    return (
      <div>
        <h2> SpaceX launches </h2>
        {this.getContent()}
      </div>
    );
  }
}

export default ConnectedView(LaunchesView, 'launches');
