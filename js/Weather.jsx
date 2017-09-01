// @flow

import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import Spinner from "./Spinner";

const Image = styled.img`
  width: 45%;
  float: left;
  margin-right: 10px;
`;

class Weather extends Component {
  state = {
    dataNation: {
      nameR: [],
      alpha2CodeR: [],
      flagR: [],
      allR: []
    }
  };
  componentDidMount() {
    axios
      .get(`https://restcountries.eu/rest/v2/regionalbloc/asean`)
      .then(response => {
        const dataResponse = response.data;
        console.log("dataResponse: ", dataResponse);
        this.setState({ dataNation: dataResponse });
      });
  }
  render() {
    console.log("this: ", this.state.dataNation);
    let nationData;
    if (this.state.dataNation.nameR) {
      nationData = <h1>{this.state.dataNation.nameR}</h1>;
    } else {
      nationData = <Spinner />;
    }
    return (
      <div>
        {nationData}
      </div>
    );
  }
}

export default Weather;
