import { Outlet } from 'react-router-dom';
import { Header, Main, StyledLink } from './SharedLayout.styled';
export const SharedLayout = () => {
  return (
    <div>
      <Header>
        <nav>
          <StyledLink to="/">Home</StyledLink>
        </nav>
      </Header>
      <Main>
        <Outlet />
      </Main>
    </div>
  );
};
