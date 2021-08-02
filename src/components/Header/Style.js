import styled from "styled-components";

export const Menu = styled.header`
  max-width: 1358px;
  height: 90px;
  margin: auto;

  display: flex;
  align-items: center;

  span {
    font-size: 2.2rem;
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

      &::placeholder {
        font-weight: bold;
      }
    }
  }

  @media (max-width: 644px) {
    span {
      display: none;
    }
  }
`;
