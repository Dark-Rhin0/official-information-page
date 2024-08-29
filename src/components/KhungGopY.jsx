import React, { useState } from "react";
import Property1Default from "./Property1Default";
import HyNiLnKinCaBnV from "./HyNiLnKinCaBnV";
import PropTypes from "prop-types";
import { database } from "../firebaseConfig";
import { ref, push } from "firebase/database";
import "./KhungGopY.css";

const KhungGopY = ({ className = "" }) => {
  const [feedback, setFeedback] = useState("");

  const clearFeedback = () => {
    setFeedback("");
  };

  const saveFeedback = () => {
    const feedbackRef = ref(database, "feedbacks");
    push(feedbackRef, { text: feedback })
      .then(() => {
        console.log("Góp ý đã được lưu!");
      })
      .catch((error) => {
        console.error("Lỗi khi lưu góp ý:", error);
      });
  };

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleSubmit = () => {
    saveFeedback();
    clearFeedback();
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
        onClick={handleSubmit}
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
        placeholder="Chia sẻ ý tưởng của bạn tại đây"
      />
    </div>
  );
};

KhungGopY.propTypes = {
  className: PropTypes.string,
};

export default KhungGopY;
