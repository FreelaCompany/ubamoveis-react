import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  max-width: 1220px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding-bottom: 100px;

  a {
    text-align: center;
  }

  @media (max-width: 1064px) {
    justify-content: center;
    a {
      text-align: center;
      width: 100%;
      margin: 10px 0;
      img {
        width: 100%;
        max-height: 300px;
      }
    }

    padding-bottom: 50px;
  }
`;
