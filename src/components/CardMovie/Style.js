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
    position: relative;
    cursor: pointer;
    transition: filter 0.2s ease-in;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0); /*pode ser transparent também*/

    &:hover {
      filter: brightness(90%);
    }
    .card__img {
      max-width: 100%;
      position: relative;

      img {
        width: 100%;
        max-height: 402px;
        border-radius: 8px;
        color: inherit;
      }

      > div {
        font-weight: bold;

        width: 95px;
        height: 42px;
        background-color: #9ba4b4;
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
      display: none;

      display: flex;
      flex-direction: column;
      padding: 0 10px 10px;
      border-radius: 0 0 8px 8px;

      font-size: 0.9rem;
      font-weight: 500;
      background-color: #334756;
      width: 100%;
      /* backdrop-filter: blur(10px); */

      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 999;

      opacity: 0;
      visibility: hidden;
      overflow: hidden;

      transition: opacity 0.2s ease-in-out;

      &.show {
        opacity: 1;
        visibility: visible;
      }

      .countrie_end_date {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        margin-bottom: 15px;
      }

      & span + span {
        margin-top: 15px;
      }

      .movie__name {
        font-weight: bold;
        font-size: 1.3rem;
        text-align: center;
        margin-top: 10px;
      }
      .movie__type {
        font-size: 0.8rem;
        color: #8d93ab;
      }
      .movie__countrie {
        text-transform: uppercase;
      }
    }

    @media (max-width: 350px) {
      width: 300px;
    }
  }
`;
