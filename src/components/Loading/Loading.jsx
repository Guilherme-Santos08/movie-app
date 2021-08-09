import styled from "styled-components";
import Lottie from "react-lottie";
import * as loading from "./loading.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: loading.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const Loading = () => {
  return (
    <div>
      <Lottie options={defaultOptions} height={120} width={120}></Lottie>
    </div>
  );
};

export const Div = styled.div`
  align-items: center;
  justify-content: center;
`
export default Loading;
