import styled from "styled-components";

export const Menu = styled.header`
  max-width: 1358px;
  height: 90px;
  margin: auto;

  display: flex;
  align-items: center;

  span {
    font-size: 2.2rem;
    font-weight: bold;
    color: white;
    text-decoration: none;
    cursor: pointer;
  }

  nav {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
  }

  .language {
    font-weight: bold;
  }

  .search {
    max-width: 455px;
    width: 100%;

    display: flex;
    /* flex-direction: column; */
    align-items: center;
    justify-content: center;

    input {
      height: 51px;

      font-size: 1rem;
      color: white;
      font-weight: 500;
      text-align: center;

      background-color: #394867;
      border-radius: 999px;

      outline: none;
      border: 0;
      margin-right: 8px;

      &::placeholder {
        font-weight: bold;
      }
    }
    button {
      width: 100px;
      height: 38px;
      padding: 0 12px;

      text-transform: uppercase;
      font-weight: bold;
      color: white;
      background-color: rgb(72, 94, 139);

      border-radius: 8px;
      cursor: pointer;
      border: none;

      transition: filter .2s ease-in-out;

      &:hover {
        filter: brightness(0.9);
      }
    }
  }

  @media (max-width: 644px) {
    span {
      display: none;
    }
  /* }
  @media (max-width: 425px) {

    } */
  }
`;
