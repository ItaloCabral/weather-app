import styled from "styled-components";

export const SideContainer = styled.div<{ show: boolean }>`
  width: 40%;
  height: 100%;
  background-color: #28413e33;
  backdrop-filter: blur(10px);
  position: absolute;
  top: 0;
  right: ${props => (props.show ? "0" : "-40%")};
  z-index: 1;
  padding: 36px;
  font-size: 1.6rem;
  color: #aaa;
  transition: all 0.3s ease-in-out;
`;

export const InputGroup = styled.div`
  display: flex;
`;

export const Button = styled.button`
  background-color: #718583;
  color: #28413e;
  border: none;
  padding: 10px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  width: 72px;
  height: 72px;
  transition: all 0.2s ease;

  &:hover {
    background-color: #28413e;
    color: #718583;
    cursor: pointer;
  }

`;

export const Input = styled.input`
  width: calc(100% - 36px);
  height: 36px;
  border: none;
  border-bottom: 1px solid #aaa3;
  padding: 0 16px;
  font-size: 1.2rem;
  color: #fff;
  background-color: transparent;
  outline: none;
  transition: all 0.2s ease;
  &:focus {
    border-bottom: 1px solid #fff;
  }
`;

export const RecentSearches = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 36px;
  font-size: 1.6rem;
  height: 30%;
  justify-content: space-evenly;
  align-items: flex-start;
  border-bottom: 1px solid #aaaa;

  a{
    text-decoration: none;
    color: #aaa;
    &:hover {
      color: #718583;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 36px;
  font-size: 1.4rem;
  height: 50%;
  color: #fff;

  .details{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 60%;

    .value{
      display: flex;
      width: 100%;
      justify-content: space-between;

      span:first-child{
        color: #aaa;
      }
    }
  }
`;
