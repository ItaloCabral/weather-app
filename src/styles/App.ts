import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

export const MenuToggle = styled.div<{isMenuOpen: boolean}>`
  position: absolute;
  top: 0;
  right: ${props => (props.isMenuOpen ? "40%" : "0")};
  width: 56px;
  height: 56px;
  display: grid;
  place-items: center;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
`;
