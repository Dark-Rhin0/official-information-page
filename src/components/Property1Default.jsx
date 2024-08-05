import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Property1Default = ({
  className = "",
  property1DefaultPosition = "absolute",
  property1DefaultTop = "0px",
  property1DefaultLeft = "0px",
  onClick,
}) => {
  const property1DefaultStyle = useMemo(() => {
    return {
      position: property1DefaultPosition,
      top: property1DefaultTop,
      left: property1DefaultLeft,
    };
  }, [property1DefaultPosition, property1DefaultTop, property1DefaultLeft]);

  const handleClick = () => {
    toast.success('Cảm ơn vì những đóng góp của bạn!', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: true, // Hide the progress bar
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    if (onClick) onClick();
  };

  return (
    <div
      className={`w-[70px] h-[42px] text-center text-xl text-white font-quicksand ${className}`}
      style={property1DefaultStyle}
    >
      <ToastContainer />
      <img
        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-81xl max-w-full overflow-hidden max-h-full"
        alt=""
        src="/rectangle-5.svg"
      />
      <b
        className="absolute h-[71.43%] w-[51.43%] top-[16.67%] left-[22.86%] inline-block [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.5)] cursor-pointer"
        id="feedback"
        onClick={handleClick}
      >
        Gửi
      </b>
    </div>
  );
};

Property1Default.propTypes = {
  className: PropTypes.string,

  /** Style props */
  property1DefaultPosition: PropTypes.string,
  property1DefaultTop: PropTypes.string,
  property1DefaultLeft: PropTypes.string,

  /** Prop để xử lý nhấp chuột */
  onClick: PropTypes.func,
};

export default Property1Default;
