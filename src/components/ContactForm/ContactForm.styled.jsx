import styled from '@emotion/styled';
import { Form, Field, ErrorMessage } from 'formik';


export const FormEl = styled(Form)`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px
`;

export const InputEl = styled(Field)`
  // font-size: 50px;
  width: 300px;
  // height: 30px;
  // margin: 10px;
  // padding: 50px;
  border-radius: 5px;
  // outline-color: #5edcb0;
  border-color: #64b5f6;
  font-weight: 700;
`;

export const Label = styled.label`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 5px;
  color: #0d47a1;
`;

export const SubmitButton = styled.button`
  width: 150px;
  height: 40px;
  background-color: #39bb96;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  outline-color: #504e4e;
`;

export const Error = styled(ErrorMessage)`
  width: 300px;
  text-align: center;
  color: red;
  margin-bottom: 15px;
  font-weight: 500;
  font-size: 16px;
`;

