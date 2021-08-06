import { Div } from "./style";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const ButtonSkiporPrev = ({
  handlePrevClick,
  handleNextClick,
  blockOrPass,
}) => {
  console.log(blockOrPass.length);
  return (
    <Div>
      <button
        style={
          blockOrPass === 1 ? { cursor: "no-drop" } : { cursor: "pointer" }
        }
        className="prev"
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
