import React from 'react';
import {MoneyType} from "./App";
import styled from "styled-components";

const Banknote = styled.div`
  width: 400px;
  height: 200px;
  margin: 10px;
  justify-content: center;
  align-content: center;
  background-color: ${props => {
      if (props.color === 'green') {
          return 'green'
      } else {
          return 'grey'
      }
  }};
`

type CurrentBankomatPropsType = {
    money: MoneyType
}
export const CurrentBankomat = (props:CurrentBankomatPropsType) => {

    return (
        <Banknote color={props.money.banknotes==='Dollars'?'green':'grey'}>
            <div>{props.money.banknotes}</div>
            <div>{props.money.value}</div>
        </Banknote>
    );
};
