import styled from 'styled-components';

export const NavbarWrapper = styled.nav`
    grid-column: 1 / span 3;
    background-color: var(--white);
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 1px 10px rgba(0, 0, 0, 0.08);
`;

export const LeftSection = styled.div`
    width: 199px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const RightSection = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    border-left: 1px solid rgba(0, 0, 0, 0.08);
    padding-left: 20px;
    padding-right: 40px;
    height: 100%;
`;

export const Hamburger = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    color: #fff;
    font-size: 1.5rem;
    cursor: pointer;
  }
`;

export const LogoImage = styled.img`
    width: 60px;
    height: auto;
`;

export const AlertBox = styled.div`
    width: 100px;
    height: 40px;
    background-color: var(--light-red);
    color: var(--white);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    cursor: pointer;
    font-size: 0.675rem;
    gap: 6px;
`;
