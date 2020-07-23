import React, { Component } from 'react'
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField';
import { Typography } from '@material-ui/core';

const FilterContainer = styled.div`
  display: flex;  
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background: #f5f3fc;
  min-height: 5vh;
`

export class Filters extends Component {

  returnUpdatedMinValue = (event) => {
    const value = Number(event.target.value)

    const updatedValue = {
      'valMin': value
    }

    this.props.handleNumberChange(updatedValue)
  }

  returnUpdatedMaxValue = (event) => {
    const value = Number(event.target.value)

    const updatedValue = {
      'valMax': value
    }

    this.props.handleNumberChange(updatedValue)
  }

  render() {
    return (
      <FilterContainer>
        <Typography color='secondary' variant='h6'>Filtros:</Typography>

        <TextField size='small' variant='outlined' label='Valor mínimo' onChange={this.returnUpdatedMinValue} min={0} />
        <TextField size='small' variant='outlined' label='Valor máximo' onChange={this.returnUpdatedMaxValue} />
        <TextField name='inputNameValue' size='small' color="secondary" variant='outlined' label='Título' value={this.props.titleValue} onChange={this.props.handleChange} />
        <TextField name='inputDescValue' size='small' color="secondary" variant='outlined' label='Descrição' value={this.props.descValue} onChange={this.props.handleChange} />
        
      </FilterContainer>
    )
  }
}
