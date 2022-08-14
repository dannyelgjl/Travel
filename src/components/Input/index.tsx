import React from 'react';

import {Label, InputText} from './styles';

interface IInputProps {
  label: string;
}

const Input = ({label}: IInputProps) => {
  return (
    <>
      <Label>{label}</Label>
      <InputText />
    </>
  );
};

export default Input;
