import React, { Component } from 'react'
import styled from 'styled-components'
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core'
import axios from 'axios'

const CardStyle = styled(Card)`
  background: white;
  min-height: 20vh;
  transform: scale(1.0);
  transition: 0.3s; 

  :hover {
    transform: scale(1.05);
    transition: 0.3s ease-in;
  }
`
const Space = styled.div`
  min-height: 12vh;
`

export class ProductCard extends Component {

  getOfferDetails = id => {
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/futureNinjasOne/jobs/${id}`).then(response =>{
      console.log(response.data)
    }).catch(e => {
      window.alert('Houve um erro ao abrir a oferta!')
    })

  }

  render() {

    const offers = this.props.offer
    const raised = true

    return (
      <CardStyle elevation={raised ? 8:1}>
        <CardContent>
          <Typography color='primary' variant='h6' align="left">{offers.title}</Typography>
          <Space>
            <Typography color='secondary' variant='subtitle1' align='left'>{offers.description}</Typography>
            <Typography color='secondary' variant= 'body1' align='right'>Prazo: {offers.dueDate}</Typography>
          </Space>
        </CardContent>
        <div>
        <CardActions>
          <Button color="secondary" variant='contained' size="small" onClick={() => this.props.getDetails(offers.id)}>informaçoes</Button>
        </CardActions>
        </div>
      </CardStyle>
    )
  }
}
