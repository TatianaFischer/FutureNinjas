import React, { Component } from 'react'
import styled from 'styled-components'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ninja from './ImgNinja.png'
import { LayoutFull } from '../LayoutFullContainer/LayoutFullContainer'
import { PauseCircleFilledTwoTone } from '@material-ui/icons';

const typographyColor = createMuiTheme({
    palette: {
      secondary: {
        main: "#FFFFFF"
      },
    },
  });


const HeaderContainer = styled(Toolbar)`
  background: #8762D1;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 15vh;
    padding: 0 10px;
`


const Image = styled.img`
  width: 7vw;
  height: 13vh;
`

export class Header extends Component {
  render() {
    return (
      <AppBar position="relative">
          <HeaderContainer>
              <a href="/"><Image src={ninja} alt="Logo"/></a>
             <MuiThemeProvider theme={typographyColor}>
                  <Typography color="secondary" variant='h4'>FutureNinjas</Typography>
             </MuiThemeProvider>
          </HeaderContainer>
      </AppBar>
    )
  }
}

