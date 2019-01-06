
import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import axios from 'axios'
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Card from 'material-ui/Card';
const MyButton = styled.button`
  border-radius: 16px;
  border-color: red;
  padding: 4px 8px;
  font-size: 20px;
`;
export default class detailPages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
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
    // const styles1 = {
    //   container: {
    //     display: 'flex',
    //     flexWrap: 'wrap',
    //   }
    // }
    let currentValue = this.state.value;
    return (<MuiThemeProvider>
         <Card>
          <MyButton>My button</MyButton>
          <MyButton>My button</MyButton>
          <MyButton>My button</MyButton>
          <MyButton>My button</MyButton>
          <MyButton>My button</MyButton>
         </Card>
        
         </MuiThemeProvider>)
  }
};