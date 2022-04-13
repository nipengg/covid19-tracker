import React, { useState } from "react";

import { fetchData } from "./api";
import { Cards, Chart, CountryPicker } from "./components";
import styles from './App.module.css';

class App extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
  }

  render() {
    return (
      <div className={styles.container}>
        <Cards
          data={this.state.data}
        />
        <CountryPicker />
        <Chart />
      </div>
    );
  }
}

export default App;