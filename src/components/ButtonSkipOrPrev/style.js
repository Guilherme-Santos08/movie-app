import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  justify-content: center;

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 60px;
    height: 40px;
    background-color: rgb(72, 94, 139);
    color: white;
    font-size: 1.3rem;

    cursor: pointer;
    border: none;
    transition: filter 0.2s ease-in-out;

    &:hover {
      filter: brightness(0.9);
    }
  }

  .prev {
    margin-right: 8px;
    border-radius: 12px;
  }

  .next {
    border-radius: 12px;
  }
`;
