import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Item = styled.li`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
  padding: 10px 0;
  margin: 5px;
  border-bottom: 2px solid #1976d2;

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
  }
`;

export const StyledLink = styled(NavLink)`
  font-size: 15px;
  font-weight: 500;
  text-decoration: none;
  transition: color 350ms cubic-bezier(0.4, 0, 0.2, 1);
  color: #000;
  &.active,
  &:hover {
    color: #1976d2;
  }
`;

export const Text = styled.p`
  font-size: 15px;
  font-weight: 500;
  &:hover {
    color: #1976d2;
  }
`;
