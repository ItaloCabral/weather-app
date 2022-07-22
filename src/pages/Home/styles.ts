import styled from "styled-components";

import rainingBg from "assets/images/raining-bg.jpg";

export const Container = styled.div`
  background-image: url(${rainingBg});
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 8%;
`;

export const Logo = styled.div`
  font-size: 2.4rem;
`;

export const Content = styled.div`
  display: flex;
  margin-bottom: 3.6rem;

  .degrees {
    font-size: 12rem;
    display: flex;
    flex-direction: column;
    justify-content: end;
  }

  .location {
    font-size: 1.6rem;
    display: flex;
    flex-direction: column;
    justify-content: end;
    margin: 2rem;
  }
  
  .condition {
    display: flex;
    flex-direction: column;
    justify-content: end;
    margin: 2rem;
  }
`;
