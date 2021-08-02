import styled from "styled-components";

export const Infos = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  max-width: 1300px;
  width: 100%;
  margin: 90px auto;

  .infos__title {
    width: 350px;
    h1 {
      line-height: 1.3;
      font-size: 2.6rem;
    }
  }

  .infos__about {
    width: 485px;
    line-height: 1.5;
    text-align: left;
    font-weight: 400;

    p:first-child {
      margin-bottom: 10px;
    }
  }

  @media (max-width: 865px) {
    justify-content: center;
    p,
    h1 {
      text-align: center;
    }
    h1 {
      margin-bottom: 20px;
    }
  }
`;
