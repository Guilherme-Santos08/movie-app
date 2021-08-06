import { Div } from "./style";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const ButtonSkiporPrev = ({
  handlePrevClick,
  handleNextClick,
  blockOrPass,
}) => {
  console.log(blockOrPass.length)
  return (
    <Div>
      <button
        className={`prev ${0 === blockOrPass ? "disabled-btn" : ""}`}
        onClick={handlePrevClick}
      >
        <AiOutlineArrowLeft />
      </button>
      <button className="next" onClick={handleNextClick}>
        <AiOutlineArrowRight />
      </button>
    </Div>
  );
};

export default ButtonSkiporPrev;
