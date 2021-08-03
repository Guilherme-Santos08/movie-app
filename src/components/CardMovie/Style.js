import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 25px;

  max-width: 1358px;
  margin: 30px auto;


  .card__info {
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    border-radius: 8px;

    width: 319px;
    height: 402px;
    background-color: #334756;

    .card__img {
      max-width: 100%;
      position: relative;
      
      img {
        width: 100%;
        max-height: 215px;
        border-radius: 8px;
      }

      > div{
        font-weight: bold;

        width: 95px;
        height: 42px;
        background-color: #9BA4B4;
        border-radius: 10px;

        display: flex;
        align-items: center;
        justify-content: center;

        position: absolute;
        top: 1rem;
        left: 1rem;
      }
    }
    
    .movie {
      display: flex;
      flex-direction: column;
      margin-top: 28px;
      padding: 0 15px;

      font-size: 0.9rem;
      font-weight: 500;

      > div {
        margin-bottom: 15px;
      }

      & span + span {
        margin-top: 15px;
      }

      .movie__type {
        font-size: 0.8rem;
        color: #8D93AB;
      }
    }

    @media(max-width: 350px) {
      width: 300px;
    }
  }
`;
