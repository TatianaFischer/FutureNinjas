import React, { Component } from "react";
import styled from "styled-components";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { Typography, Button, Fab } from "@material-ui/core";
import {
  KeyboardBackspaceRounded,
  AttachMoney,
  CreditCard,
} from "@material-ui/icons";
import axios from "axios";

const OfferDetailsContainer = styled.div`
  background: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 30vh;
  padding: 0 8px;
`;
const ValueDueContainer = styled.div`
  width: 25%;
  display: flex;
  justify-content: space-between;
`;

const BackContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  opacity: 30%;
  transition: 0.5s ease;

  :hover {
    transition: 0.5s ease;
    opacity: 100%;
  }
`;
const GeneralContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  padding: 16px;
`;

export class OfferDetails extends Component {
  takeOffer = (id) => {
    axios
      .put(
        `https://us-central1-labenu-apis.cloudfunctions.net/futureNinjasOne/jobs/${id}/take`
      )
      .then((response) => {
        window.alert("Parabens, você pegou a oferta!");
        this.props.updateDetails(id);
      })
      .catch((e) => {
        window.alert("Houve um erro inesperado! Tente novamente.");
      });
  };

  giveUpOffer = (id) => {
    axios
      .put(
        `https://us-central1-labenu-apis.cloudfunctions.net/futureNinjasOne/jobs/${id}/giveup`
      )
      .then((response) => {
        window.alert("Aaaah, mas porque voce desistiu da oferta?");
        this.props.updateDetails(id);
      })
      .catch((e) => {
        window.alert("Houve um erro inesperado! Tente novamente.");
      });
  };

  updateTaken = (id) => {
    const details = this.props.offerState;

    console.log(details);

    if (!details.taken) {
      this.takeOffer(id);
    } else {
      this.giveUpOffer(id);
    }
  };

  render() {
    const details = this.props.offerState;

    const methods = details.paymentMethods.map((method) => {
      if (method === "Crédito" || method === "Débito") {
        return <CreditCard color="primary" />;
      } else if (method === "Dinheiro") {
        return <AttachMoney color="primary" />;
      } else {
        return <div></div>;
      }
    });

    console.log(details);

    const taken = details.taken ? "Desistir da oferta" : "Pegar oferta";

    return (
      <OfferDetailsContainer>
        <Typography color="secondary" variant="h4">
          {details.title}
        </Typography>

        <GeneralContainer>
          <Typography color="primary" variant="h5">
            {details.description}
          </Typography>
        </GeneralContainer>

        <ValueDueContainer>
          <Typography color="primary" variant="h6">
            Valor: {details.value}
          </Typography>
          <Typography color="primary" variant="h6">
            Prazo: {details.dueDate}
          </Typography>
        </ValueDueContainer>

        <Typography variant="h6" color="primary">
          Formas e pagamento:
        </Typography>

        <GeneralContainer>{methods}</GeneralContainer>

        <GeneralContainer>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            onClick={() => this.updateTaken(details.id)}
          >
            {taken}
          </Button>
        </GeneralContainer>

        <BackContainer>
          <Fab
            color="primary"
            variant="extended"
            onClick={this.props.handleList}
          >
            <KeyboardBackspaceRounded color="secondary" />
            Voltar
          </Fab>
        </BackContainer>
      </OfferDetailsContainer>
    );
  }
}
