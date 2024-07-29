import Property1Default from "./Property1Default";
import HyNiLnKinCaBnV from "./HyNiLnKinCaBnV";
import PropTypes from "prop-types";
import { useState } from "react";
import "./KhungGopY.css"; // Import the CSS file

const KhungGopY = ({ className = "" }) => {
  const [feedback, setFeedback] = useState("");

  // Hàm để xóa nội dung trường nhập liệu
  const clearFeedback = () => {
    setFeedback("");
  };

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  return (
    <div
      className={`absolute top-[2576px] left-[539px] w-[842px] h-[246px] text-center text-6xl font-quicksand ${className}`}
    >
      <img
        className="absolute top-[0px] left-[0px] rounded-6xl w-[842px] h-[246px]"
        alt=""
        src="/rectangle-3.svg"
      />
      <Property1Default
        property1DefaultPosition="absolute"
        property1DefaultTop="139px"
        property1DefaultLeft="680px"
        onClick={clearFeedback} // Truyền hàm xóa nội dung
      />
      <img
        className="absolute top-[139px] left-[91px] rounded-xl w-[579px] h-[42px]"
        alt=""
        src="/rectangle-4.svg"
        id="info"
      />
      <HyNiLnKinCaBnV />
      <input
        type="text"
        className="feedback-input absolute top-[139px] left-[91px] rounded-xl p-2 bg-transparent outline-none text-black"
        value={feedback}
        onChange={handleFeedbackChange}
        placeholder="Hãy cho chúng tôi biết ý kiến của bạn"
      />
    </div>
  );
};

KhungGopY.propTypes = {
  className: PropTypes.string,
};

export default KhungGopY;
