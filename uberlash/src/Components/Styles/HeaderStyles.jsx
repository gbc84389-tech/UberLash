import styled from "styled-components";

export const Header_Items = styled.div`
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Search_Container = styled.div`
  width: 384px;
  display: flex;
  justify-content: start;
  align-items: center;

  input {
    width: 320px;
    height: 3rem;
    padding: 10px;
    font-size: 0.725rem;
    outline: none;
  }
`

export const Logo_Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 384px;
  flex: 1;
  
  h2 {
    background-color: #e72b84;
    padding: 0.275rem;
    color: white;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
  }

  small {
    color: #e72b84;
    border-radius: 5px;
    text-transform: uppercase;
    padding-top: 0.275rem;
    padding-bottom: 1rem;
  }
`;

export const Shopping_Cart = styled.div`
  display: flex;
  justify-content: end;
  gap: 1rem;
  width: 384px;

  img {
    width: 1.275rem;
    filter: brightness(0) saturate(100%) invert(27%) sepia(94%) saturate(3989%) hue-rotate(317deg) brightness(97%) contrast(87%);
  }
`;

// NAVBAR
export const NavBar = styled.nav`
  display: flex;
  gap: 2rem;
  justify-content: center;
  width: 100%;
  padding: 0.5rem 0 0.5rem 0;
  border-top: 1px solid gray;
  border-bottom: 1px solid gray;

  div {
    display: flex;
    justify-content: space-between;
    width: 50vw;
  }

  a {
    display: inline-block;
    position: relative;
    color: #e72b84;
    cursor: pointer;
  }

  a::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: 0;
    left: 0;
    background-color: #e72b84;
    transform: scaleX(0);
    transform-origin: bottom center;
    transition: transform 0.25s ease-out;
  }

  a:hover::after {
    transform: scaleX(1);
  }
`;