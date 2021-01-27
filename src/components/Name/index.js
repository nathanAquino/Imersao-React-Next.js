import styled from 'styled-components';

const Name = styled.input`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.secondary};
  outline: none;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  padding: 10px;
  color: ${({ theme }) => theme.colors.contrastText};
  ::placeholder {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export default Name;
