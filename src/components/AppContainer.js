import React, { Component } from "react";
import styled from "styled-components";
import { Header } from "./Header/Header";
import { OfferTypes } from "./OfferTypes/OfferTypes";
import { LayoutFull } from "./LayoutFullContainer/LayoutFullContainer";
import { Footer } from "./Footer/Footer";

const WrapAll = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
`;

export class AppContainer extends Component {
  state = {
    offerTypesShow: true,
  };

  hideOfferBar = () => {
    this.setState({
      offerTypesShow: !this.state.offerTypesShow,
    });
  };

  render() {
    return (
      <WrapAll>
        <Header />
        {this.state.offerTypesShow && <OfferTypes />}
        <LayoutFull showOfferBar={this.hideOfferBar} />
        <Footer />
      </WrapAll>
    );
  }
}
