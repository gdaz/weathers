// @flow

import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";

const Image = styled.img`
  width: 45%;
  float: left;
  margin-right: 10px;
`;

class Weather extends Component {
  state = {
    nameR: [],
    alpha2CodeR: [],
    flagR: [],
    allR: []
  };
  componentDidMount() {
    axios
      .get(`https://restcountries.eu/rest/v2/regionalbloc/asean`)
      .then(response => {
        const arr = [];
        const dataResponse = response.data;
        Object.entries(dataResponse).forEach(value => {
          arr.push(value);
        });
        const alpha2 = arr.map(obj => obj.alpha2Code);
        const name = arr.map(obj => obj.name);
        const flag = arr.map(obj => obj.flag);
        const all = arr.map(obj => obj);
        this.setState({ alpha2CodeR: alpha2 });
        this.setState({ nameR: name });
        this.setState({ flagR: flag });
        this.setState({ allR: all });
      });
  }
  render() {
    return (
      <div>
        <header
          style={{
            position: "absolute",
            top: 0,
            rigth: 0,
            height: 120,
            left: 0
          }}
        >
          Nation
        </header>
        <div
          style={{
            position: "absolute",
            top: 120,
            right: "30%",
            bottom: 0,
            left: 0,
            background: "black"
          }}
        />
        <div />
        <div
          style={{
            postion: "absolute",
            top: 120,
            width: "40%",
            bottom: 0,
            right: 0,
            background: "green"
          }}
          className="list-details"
        >
          {this.state.allR.map(acc => (
            <div className="list-item">
              <Image alt={`${acc.name} poster`} src={`${acc.flag}`} />
              <p className="list-caption">{acc.name}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Weather;
