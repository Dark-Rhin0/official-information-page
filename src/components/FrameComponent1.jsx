import PropTypes from "prop-types";
import { useRef } from "react";
import confetti from "canvas-confetti";

const FrameComponent1 = ({ className = "" }) => {
  const logoRef = useRef(null);

  const handleClick = () => {
    const rect = logoRef.current.getBoundingClientRect();
    const originX = (rect.left + rect.width / 2 + 10) / window.innerWidth;
    const originY = (rect.top + rect.height / 2) / window.innerHeight;

    // Bắn hoa giấy theo vòng tròn
    for (let angle = 0; angle < 360; angle += 30) {
      confetti({
        angle: angle,
        spread: 55,
        particleCount: 10,
        origin: { x: originX, y: originY },
        colors: ['#fff', '#87df2c', '#3357FF'],
        startVelocity: 30,
      });
    }
  };

  return (
    <div
      className={`absolute top-[2887px] left-[0px] w-[1920px] h-[473px] overflow-hidden text-center text-3xl text-white font-quicksand ${className}`}
    >
      <div className="absolute top-[0px] left-[0px] rounded-81xl bg-gray-100 w-[1920px] h-[557px]" />
      <div className="absolute top-[29px] left-[1233px] w-[407px] h-[147px]">
        <button
          onClick={handleClick}
          className="absolute top-[77px] left-[169px] w-[70px] h-[70px] border-none bg-transparent p-0"
          style={{
            position: 'relative',
            display: 'inline-block',
            cursor: 'pointer',
            top: '77px',
            left: '0px',
          }}
        >
          <img
            ref={logoRef}
            className="w-full h-full object-cover mix-blend-luminosity"
            alt=""
            src="/logo-0-nn-2@2x.png"
            style={{
              transition: 'transform 0.5s ease-in-out',
              transformOrigin: 'center', // Đảm bảo ảnh xoay quanh tâm của nó
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'rotate(360deg)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'rotate(0deg)'}
          />
        </button>
        <b className="absolute top-[45px] left-[39px]">
          © Copyright by: Võ Lê Tiến Đạt
        </b>
        <b className="absolute top-[0px] left-[0px] text-7xl text-right">
          SMARTGRAM - STUDY IS FUTURE
        </b>
      </div>
      <div className="absolute top-[29px] left-[283px] w-[322px] h-[149px] text-base">
        <b className="absolute top-[49px] left-[2px]">
          Author: Nguyễn Huỳnh Tiến Phát
        </b>
        <b className="absolute top-[83px] left-[2px]">Author: Võ Lê Tiến Đạt</b>
        <b className="absolute top-[121px] left-[0px]">
          Trường THPT Trần Phú TP.HCM
        </b>
        <b className="absolute top-[0px] left-[0px] text-6xl">
          <span className="[text-decoration:underline]">Liên Hệ</span> :
        </b>
        <a
          href="https://www.facebook.com/profile.php?id=100064682389065"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="absolute top-[78px] left-[292px] w-[30px] h-[30.1px] object-cover"
            alt=""
            src="/fblink@2x.png"
          />
        </a>
        <a
          href="https://thpttranphu.hcm.edu.vn/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="absolute top-[114px] left-[287px] w-[35px] h-[35px] object-cover"
            alt=""
            src="/removebgai-1721144744017-1@2x.png"
          />
        </a>
        <a
          href="https://www.facebook.com/tienphat.nguyen.5209000"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="absolute top-[44px] left-[292px] w-[30px] h-[30.1px] object-cover"
            alt=""
            src="/fblink@2x.png"
          />
        </a>
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
