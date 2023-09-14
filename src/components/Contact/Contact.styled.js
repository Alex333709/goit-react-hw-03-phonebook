import styled from 'styled-components';

export const ContactsItem = styled('div')(() => ({
  display: 'flex',
  gap: '20px',
  alignItems: 'center',
  fontSize: '18px',
  border: '1px solid #ccc',
  borderRadius: '8px',
  padding: '10px',
  margin: '5px 0',
  backgroundColor: '#FAF9F9',
  li: {
    listStyleType: 'none',
    width: '80%',
  },
}));

export const DeleteButton = styled('button')(() => ({
  backgroundColor: '#FF6961',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  padding: '8px 12px',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '#FF5E5A',
  },
}));
