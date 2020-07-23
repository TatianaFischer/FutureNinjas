import React, { Component } from 'react'
import styled from 'styled-components'
import TableFooter from '@material-ui/core/TableFooter';
import Typography  from '@material-ui/core/Typography'
import { Instagram, Facebook, WhatsApp, LinkedIn, YouTube } from '@material-ui/icons';



const StyledTipography = styled(Typography)`
   color: white;
`

const FooterContainer = styled(TableFooter)`
  background: #8762D1;
  color: white;
  min-height: 5vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px;
  
`
const IconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 20%;
  padding: 10px;
  cursor: pointer;
`

export class Footer extends Component {
    render() {
        return (
                <FooterContainer>
                <IconContainer>
            
                  <Facebook 
                    fontSize="large"
                  />
                  <Instagram 
                    fontSize="large"
                  />
                  <YouTube 
                    fontSize="large"
                  />
                  <LinkedIn 
                    fontSize="large"
                  />
                  <WhatsApp 
                    fontSize="large"
                  />
                 </IconContainer>
                 
                  <StyledTipography  variant='h8' >
                    ©2020, FutureNinjas Serviços de Internet. CNPJ 00.000.000/0000-00 - Av. Labenu, 001 - Labenu - Brasil.
                  </StyledTipography>
                 
                </FooterContainer>
            
        )
    }
}
