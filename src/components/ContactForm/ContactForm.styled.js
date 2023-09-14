import styled from 'styled-components';

export const Form = styled('form')(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  backgroundColor: '#EFEFEF',
  padding: '20px',
  borderRadius: '8px',
}));

export const Input = styled('input')(() => ({
  border: '1px solid #ccc',
  borderRadius: '4px',
  padding: '12px',
  margin: '8px 0',
  width: '80%',
  '&:focus': {
    borderColor: '#007BFF',
  },
}));

export const ContactsFormButton = styled('button')(() => ({
  backgroundColor: '#007BFF',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  padding: '12px 20px',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '#0056b3',
  },
}));
