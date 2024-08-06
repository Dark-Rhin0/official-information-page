import PropTypes from "prop-types";
import { useRef } from "react";
import confetti from 'canvas-confetti';
import './FeaturesAndBenefits.css';

const FeaturesAndBenefits = ({ className = "" }) => {
  const targetRef = useRef(null);

  const triggerConfetti = () => {
    if (targetRef.current) {
      const rect = targetRef.current.getBoundingClientRect();
      const originX = (rect.left + rect.width / 2) / window.innerWidth;
      const originY = (rect.top + rect.height / 2 -10) / window.innerHeight;

      // Trigger confetti in a circular pattern
      for (let angle = 0; angle < 360; angle += 30) {
        confetti({
          angle: angle,
          spread: 70,
          particleCount: 15,
          origin: { x: originX, y: originY },
          colors: ['#fff', '#87df2c', '#3357FF'],
          startVelocity: 35,
        });
      }
    }
  };

  return (
    <div
      className={`absolute top-[1000px] left-[0px] rounded-3xs [background:radial-gradient(50%_50%_at_50%_50%,_rgba(136,_0,_149,_0.9)_26.5%,_#250349)] w-[1920px] h-[1354px] overflow-hidden text-left text-6xl text-white font-quicksand ${className}`}
    >
      <img
        className="absolute top-[-24px] left-[99px] w-[300px] h-[300px] object-cover mix-blend-multiply floating-effect floating-effect1"
        alt=""
        src="/removebgai-1721140865383-1@2x.png"
      />
      <img
        className="absolute top-[14px] left-[1555px] w-[200px] h-[200px] object-cover floating-effect floating-effect2"
        alt=""
        src="/pngclipartthreeblackgearsillustrationgearcomputericonsmechanicalgearmiscellaneousengineeringthumbnailpng-1@2x.png"
      />
      <div className="absolute top-[787px] left-[1082px] w-[671px] h-[312px]">
        <img
          className="absolute top-[0px] left-[0px] rounded-xl w-[671px] h-[312px]"
          alt=""
          src="/rectangle-18.svg"
        />
        <div className="absolute top-[89.3px] left-[117px] w-[451px] h-[162.8px]">
          <b className="absolute top-[-6.3px] left-[0px] inline-block w-[451px] h-[217px] [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
            Chúng tôi đã thêm vào smartgram một công cụ lịch để giúp bạn dễ dàng 
            lên kế hoạch cho công việc học tập lâu dài. 
            Ngoài ra, bạn còn có thể tạo danh sách công việc cần làm, 
            để theo dõi và quản lý các nhiệm vụ quan trọng mà không bỏ sót chúng.
          </b>
        </div>
        <b className="absolute top-[4.71%] left-[15.5%] text-26xl font-quantico text-forestgreen text-justify [text-shadow:0px_4px_4px_rgba(211,_0,_0,_0.73)] [-webkit-text-stroke:1px_#ff9090]">
          Lên Lịch, lập kế hoạch
        </b>
      </div>
      <div className="absolute top-[320px] left-[1084px] w-[671px] h-[446px] text-4xl">
        <img
          className="absolute top-[3.9px] left-[0px] rounded-xl w-[671px] h-[442.1px]"
          alt=""
          src="/rectangle-16.svg"
        />
        <b className="absolute top-[0px] left-[203px] text-26xl inline-block font-inknut-antiqua text-chocolate text-justify w-[265px] h-[113px] [text-shadow:0px_4px_4px_rgba(255,_172,_96,_0.73)] [-webkit-text-stroke:1px_#ffc590]">
          Podomoro
        </b>
        <b className="absolute top-[100.3px] left-[115px] inline-block w-[447px] h-[139.3px] [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
          Podomoro có tên tiếng anh là Podomoro Technique, được phát triển bởi
          Francesco cirillo, đây là một phương pháp quản trị thời gian để nâng
          cao hiệu quả trong công việc.
        </b>
        <b className="absolute top-[266.8px] left-[115px] inline-block w-[438px] h-[141.2px] [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
          Smartgram sẽ chung cấp cho bạn một công cụ đếm giờ dựa trên
          kỹ thuật Podomoro nhằm giúp bạn tận dụng triệt để thời gian học tập và
          tăng độ tập trung.
        </b>
      </div>
      <div className="absolute top-[324px] left-[165px] w-[683px] h-[775px]">
        <div className="absolute top-[0px] left-[0px] shadow-[0px_4px_4px_rgba(255,_255,_255,_0.75)] rounded-xl [background:linear-gradient(180deg,_#000,_#404043)] w-[683px] h-[775px]" />
        <b className="absolute top-[129px] left-[116px] inline-block w-[442px]">
          Smartgram là ứng dụng mạng xã hội được thiết kế đặc biệt để kết nối
          học sinh, sinh viên và giáo viên tạo ra môi trường học tập năng động
          và sáng tạo.
        </b>
        <b className="absolute top-[534px] left-[115px] inline-block w-[443px]">
          Thông qua Smartgram, chúng tôi muốn thay đổi góc nhìn của mọi người về
          mạng xã hội. Đó không chỉ là nơi để giải trí mà còn là nơi giúp chúng ta tiếp cận
          với đa dạng kiến thức mới mà thường không có ở trường lớp.
        </b>
        <b className="absolute top-[336px] left-[115px] inline-block w-[440px]">
          Trong Smartgram bạn có thể chia sẻ kiến thức qua việc tạo bài đăng, 
          góp ý qua bình luận, tạo phòng học của riêng mình và còn nhiều 
          tính năng khác đang chờ bạn khám phá!
        </b>
        <b className="absolute h-[7.48%] w-[38.36%] top-[4.14%] left-[29.87%] text-26xl inline-block text-limegreen text-justify [text-shadow:0px_4px_4px_rgba(96,_255,_131,_0.73)] [-webkit-text-stroke:1px_#9fff90]" >
          Mạng xã hội
        </b>
      </div>
      <img
        className="absolute top-[1160px] left-[149px] w-[200px] h-[200px] object-cover floating-effect floating-effect3"
        alt=""
        src="/clock-1@2x.png"
      />
      <img
        className="absolute top-[1135px] left-[1530px] w-[250px] h-[250.4px] object-cover floating-effect floating-effect4"
        alt=""
        src="/removebgai-1721319104166-1@2x.png"
      />
      <div
        className="absolute top-[102px] left-[826px] w-[269px] h-[119px] text-justify text-26xl text-gold font-inter"
        ref={targetRef}
        onClick={triggerConfetti}
      >
        <img
          className="absolute top-[0px] left-[0px] rounded-81xl w-[269px] h-[119px] transition-shadow duration-50 hover:shadow-[0px_7px_10px_rgba(0,255,0,0.9)]"
          alt=""
          src="/rectangle-15.svg"
        />
        <b className="absolute top-[33px] left-[calc(50%_-_112.5px)] text-sweep-effect">
          Tính Năng
        </b>
      </div>
    </div>
  );
};

FeaturesAndBenefits.propTypes = {
  className: PropTypes.string,
};

export default FeaturesAndBenefits;
