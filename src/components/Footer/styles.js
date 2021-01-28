import styled from 'styled-components';

export const FooterBase = styled.footer`
  background: url('https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=770&q=80');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  border-top: 2px solid #000052;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 52px;
  padding-bottom: 52px;
  color: var(--white);
  text-align: center;
  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
`;
