import React, { Component } from "react";
import styled from "styled-components";

import { Button } from "@material-ui/core";

import axios from "axios";

const OfferTypesContainer = styled.div`
  background: white;
  border-radius: 2px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 8vh;
  font-size: small;

  div p {
    align-self: center;
    color: purple;
  }
`;

const OfferButton = styled(Button)`
  margin: auto;
`;

export class OfferTypes extends Component {
  state = {
    offers: [],
  };

  componentDidMount = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/futureNinjasOne/jobs"
      )
      .then((response) => {
        this.setState({
          offers: response.data.jobs,
        });
      })
      .catch((error) => {
        alert("Erro");
      });
  };

  render() {
    return (
      <OfferTypesContainer>
        {this.state.offers.map((offer) => {
          return (
            <div key={offer.id}>
              <OfferButton color="secondary" size="small">
                {offer.title}
              </OfferButton>
            </div>
          );
        })}
      </OfferTypesContainer>
    );
  }
}
