import React, { Component } from "react";
import styled from "styled-components";

import TextFields from "@material-ui/core/TextField";
import { LocalOffer, Home } from "@material-ui/icons";
import {
  FormControlLabel,
  FormGroup,
  Checkbox,
  Typography,
  Button,
} from "@material-ui/core";

const BigContainer = styled.div`
  background-color: #f5f3fc;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 16px;
`;

const CreateOfferContainer = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40vw;
  height: auto;
  border-radius: 10px;

  box-shadow: 2px 2px 20px 1px rgba(0, 0, 0, 0.2);
  margin-top: 20px;
  padding: 16px;
`;

const Payment = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8px;
`;

const ButtonBigContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 8px;
  padding: 16px;
`;
const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 170px;
  opacity: 30%;
  transition: 0.5s ease;

  :hover {
    transition: 0.5s ease;
    opacity: 100%;
  }
`;
const TextDecoration = styled.a`
  color: white;
  text-decoration: none;
`;
export class CreateOffer extends Component {
  state = {
    title: "",
    description: "",
    price: "",
    payment: [],
    date: "",
    credit: false,
    debit: false,
    cash: false,
    bill: false,
  };

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
    console.log(this.state);
  };

  handleCheckboxesChange = (name) => (event) => {
    this.setState({ [name]: event.target.checked });
    if (event.target.checked === true) {
      this.setState({ payment: [...this.state.payment, event.target.value] });
    } else {
      let paymentMethods = [...this.state.payment];
      let index = paymentMethods.indexOf(event.target.value);
      if (index > -1) {
        paymentMethods.splice(index, 1);
        this.setState({ payment: paymentMethods });
      }
    }
  };

  handleClickButton = () => {
    console.log(this.state);
    this.props.createOfferFunction(
      this.state.title,
      this.state.description,
      this.state.price,
      this.state.payment,
      this.state.date
    );

    this.setState({
      title: "",
      description: "",
      price: "",
      payment: [],
      date: "",
      credit: false,
      debit: false,
      cash: false,
      bill: false,
    });
  };

  render() {
    return (
      <BigContainer>
        <Typography variant="h5" color="primary">
          Espaço do cliente
        </Typography>
        <CreateOfferContainer>
          <Typography variant="title" color="secondary">
            Cadastre nova oferta
          </Typography>
          <TextFields
            margin="normal"
            label="Titulo"
            variant="outlined"
            autoFocus="false"
            name="title"
            value={this.state.title}
            onChange={this.handleInputChange}
          />
          <TextFields
            margin="normal"
            label="Descrição"
            variant="outlined"
            name="description"
            value={this.state.description}
            onChange={this.handleInputChange}
          />
          <TextFields
            margin="normal"
            label="Valor"
            min={0}
            variant="outlined"
            type="number"
            name="price"
            value={this.state.price}
            onChange={this.handleInputChange}
          />
          <TextFields
            variant="outlined"
            margin="normal"
            name="date"
            label="Prazo"
            value={this.state.date}
            onChange={this.handleInputChange}
          />
          <Payment>
            <Typography variant="subtitle1" color="primary">
              Formas de Pagamento:
            </Typography>
            <div>
              <FormGroup row>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.state.credit}
                      onClick={this.handleCheckboxesChange("credit")}
                      value="Crédito"
                    />
                  }
                  label="Crédito"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.state.debit}
                      onChange={this.handleCheckboxesChange("debit")}
                      value="Débito"
                    />
                  }
                  label="Débito"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.state.cash}
                      onChange={this.handleCheckboxesChange("cash")}
                      name="payment"
                      value="Dinheiro"
                    />
                  }
                  label="Transferência"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.state.bill}
                      onChange={this.handleCheckboxesChange("bill")}
                      value="Boleto"
                    />
                  }
                  label="Boleto"
                />
              </FormGroup>
            </div>
          </Payment>

          <div>
            <Button
              onClick={this.handleClickButton}
              color="secondary"
              variant="contained"
              size="large"
              margin-bottom="normal"
            >
              Criar oferta
            </Button>
          </div>
        </CreateOfferContainer>
        <ButtonBigContainer>
          <ButtonsContainer>
            <Button color="primary" variant="contained" size="medium">
              <Home color="secondary" />{" "}
              <TextDecoration href="/"> Pagina Inicial</TextDecoration>
            </Button>
          </ButtonsContainer>
          <ButtonsContainer>
            {" "}
            {/* <Button color="primary" variant="contained" size="medium">
              {" "}
              Ofertas <LocalOffer color="secondary" />
            </Button> */}
          </ButtonsContainer>
        </ButtonBigContainer>
      </BigContainer>
    );
  }
}
