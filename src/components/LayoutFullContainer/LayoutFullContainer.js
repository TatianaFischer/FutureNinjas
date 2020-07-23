import React, { Component } from "react";
import styled from "styled-components";
import { ProductGrid } from "../Products/ProductsGrid";
import { CreateOffer } from "../CreateOffer/CreateOffer";

import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@material-ui/core";
import axios from "axios";

const LayoutFullContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: auto;
`;

const HomePageContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 16px;
  flex-grow: 1;
  min-width: 30vw;
  height: 80vh;
`;

const CardStyle = styled(Card)`
  background: white;
  min-height: 20vh;
  transform: scale(1);
  transition: 0.2s;

  padding: 50px 10px;

  :hover {
    transform: scale(1.2);
    transition: 0.4s ease-in;
  }
`;
const OfferButton = styled(Button)`
  margin: auto;
  margin-top: 40px;
`;

export class LayoutFull extends Component {
  state = {
    page: "initial",
    offers: [],
  };

  onClickBack = () => {
    this.setState({
      page: "initial",
    });
  };

  onClickGrid = () => {
    this.props.showOfferBar();
    this.setState({
      page: "grid",
    });
  };

  onClickCreate = () => {
    // this.props.showOfferBar();
    this.setState({
      page: "create",
    });
  };

  createOffer = (title, description, value, payment, date) => {
    const body = {
      title: title,
      description: description,
      value: value,
      paymentMethods: payment,
      dueDate: date,
    };
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/futureNinjasOne/jobs",
        body
      )
      .then((response) => {
        window.alert("Oferta criada com sucesso! Boa sorte.");
        this.getOffer();
      })
      .catch((error) => {
        window.alert("Erro ao cadastrar oferta");
        console.log(error);
      });
  };

  componentDidMount() {
    this.getOffer();
  }

  componentDidUpdate() {
    this.getOffer();
  }

  getOffer = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/futureNinjasOne/jobs"
      )
      .then((response) => {
        this.setState({
          offers: response.data.jobs,
        });
      })
      .catch((e) => {
        window.alert("Houve um erro ao carregar os dados.");
      });
  };

  renderPage = () => {
    switch (this.state.page) {
      case "grid":
        return (
          <ProductGrid
            handleOffers={this.state.offers}
            handleChange={this.handleInputChange}
            handleBack={this.onClickBack}
          />
        );

      case "create":
        return <CreateOffer createOfferFunction={this.createOffer} />;

      default:
        return (
          <HomePageContainer>
            <CardStyle>
              <CardContent>
                <Typography color="secondary" variant="h5" align="center">
                  Sou Cliente
                </Typography>

                <Typography color="primary" variant="body2" align="center">
                  O jeito mais esperto de contratar um serviço.
                </Typography>
                <Typography color="primary" variant="body3">
                  Fale o que precisa, escolha o melhor fornecedor.
                </Typography>
                <CardActions>
                  <OfferButton
                    color="secondary"
                    variant="contained"
                    size="large"
                    onClick={this.onClickCreate}
                  >
                    CADASTRE UMA OFERTA
                  </OfferButton>
                </CardActions>
              </CardContent>
            </CardStyle>

            <CardStyle>
              <CardContent>
                <Typography color="secondary" variant="h5" align="center">
                  Sou Fornecedor
                </Typography>
                <Typography color="primary" variant="body2" align="center">
                  Consiga mais clientes direto do seu celular.
                </Typography>
                <Typography color="primary" variant="body3">
                  Veja os serviços que estão disponíveis para você!
                </Typography>
                <CardActions>
                  <OfferButton
                    color="secondary"
                    variant="contained"
                    size="large"
                    onClick={this.onClickGrid}
                  >
                    VEJA AS OFERTAS
                  </OfferButton>
                </CardActions>
              </CardContent>
            </CardStyle>
          </HomePageContainer>
        );
    }
  };

  render() {
    return <LayoutFullContainer>{this.renderPage()}</LayoutFullContainer>;
  }
}
