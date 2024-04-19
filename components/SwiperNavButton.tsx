'use clients'
import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

export const SwiperNavButton = ({
    containerStyles,
    btnStyles,
    iconStyles,
}: {
    containerStyles: string;
    btnStyles: string;
    iconStyles: string;
}) => {
    const swiper = useSwiper();  // Get the swiper instance

    return (
        <div className={`${containerStyles}`}>
            <button className={`${btnStyles}`} onClick={() => swiper.slidePrev()}>
                <PiCaretLeftBold className={`${iconStyles}`} />
            </button>
            <button className={`${btnStyles}`} onClick={() => swiper.slideNext()}>
                <PiCaretRightBold className={`${iconStyles}`} />
            </button>
        </div>
    );
};
