import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.mim.css";

const SlideComponent = function () {
  return(
    <>
      <div>
        <Splide
          options={{
            type: "loop",
            perPage: 4, 
            perMove: 1,
            pagination: false
          }}
        >
          <SplideSlide></SplideSlide>
        </Splide>
      </div>
    </>
  )
};

export default SlideComponent