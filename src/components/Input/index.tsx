import React from 'react';
import {IInputProps} from './types';
import {Label, InputText} from './styles';

const Input = ({label}: IInputProps) => {
  return (
    <>
      <Label>{label}</Label>
      <InputText />
    </>
  );
};

export default Input;
