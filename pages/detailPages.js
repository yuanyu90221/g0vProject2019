
import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import axios from 'axios'
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
export default class detailPages extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const styles = {
      hintStyle: { color: 'gray' },
      floatingLabelStyle: { color: '#e488ef' },
      floatingLabelFocusStyle: { color: '#e488ef' },
      underlineStyle: { color: '#fff' },
      underlineFocusStyle: { borderColor: '#e488ef' },
      inputStyle: { color: '#fff' },
      textareaStyle: { color: '#fff' },
      style: { marginTop: '10px' }
    }
    const styles1 = {
      container: {
        display: 'flex',
        flexWrap: 'wrap',
      }
    }
    return (<MuiThemeProvider>
      <TextField  hintText="Please enter your name"
          floatingLabelText="Name"
          fullWidth
          value={'text'} 
          {...styles}
          onChange={()=>{}}
          prepareStyles={''}
          id={'test'}
          require
          />
         </MuiThemeProvider>)
  }
};