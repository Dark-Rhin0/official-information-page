import React, { useMemo, useState } from "react";
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
  const [isHovered, setIsHovered] = useState(false);

  const property1DefaultStyle = useMemo(
    () => ({
      position: property1DefaultPosition,
      top: property1DefaultTop,
      left: property1DefaultLeft,
    }),
    [property1DefaultPosition, property1DefaultTop, property1DefaultLeft]
  );

  const handleClick = () => {
    toast.success("Cảm ơn vì những đóng góp của bạn!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    if (onClick) onClick();
  };

  return (
    <div
      className={`relative w-[70px] h-[42px] text-center text-xl font-quicksand ${className} 
        transition-all duration-300 ease-in-out rounded-full overflow-hidden 
        bg-gradient-to-r from-blue-600 to-blue-900 hover:from-blue-700 hover:to-blue-950
        ${isHovered ? "shadow-[0_0_15px_rgba(59,130,246,0.7)]" : "shadow-md"}`}
      style={property1DefaultStyle}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <ToastContainer />
      <b
        className={`absolute inset-0 flex items-center justify-center cursor-pointer text-white 
        transition-all duration-300 ${isHovered ? "scale-110" : ""}`}
      >
        Gửi
      </b>
    </div>
  );
};

Property1Default.propTypes = {
  className: PropTypes.string,
  property1DefaultPosition: PropTypes.string,
  property1DefaultTop: PropTypes.string,
  property1DefaultLeft: PropTypes.string,
  onClick: PropTypes.func,
};

export default Property1Default;
