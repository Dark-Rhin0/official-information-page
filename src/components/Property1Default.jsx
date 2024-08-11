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
      className={`relative w-[70px] h-[42px] text-center text-xl text-white font-quicksand ${className}`}
      style={property1DefaultStyle}
      onClick={handleClick}
    >
      <ToastContainer />
      <img
        className="absolute inset-0 w-full h-full rounded-81xl max-w-full max-h-full object-cover"
        alt=""
        src="/rectangle-5.svg"
        id="feedback"
      />
      <b
        className="absolute inset-0 flex items-center justify-center [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.5)] cursor-pointer"
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
