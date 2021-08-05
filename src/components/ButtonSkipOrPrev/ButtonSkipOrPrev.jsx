import { Div } from "./style";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const ButtonSkiporPrev = ({ handlePrevClick, handleNextClick }) => {
  return (
    <Div>
      <button className="prev" onClick={handlePrevClick}>
        <AiOutlineArrowLeft />
      </button>
      <button className="next" onClick={handleNextClick}>
        <AiOutlineArrowRight />
      </button>
    </Div>
  );
};

export default ButtonSkiporPrev;
