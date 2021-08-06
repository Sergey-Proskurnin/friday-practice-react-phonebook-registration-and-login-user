import { useEffect, useRef } from 'react';
import { textAnimation } from 'helpers/animationText';
import { gsap, TimelineLite, Power3 } from 'gsap';

const HomePage = () => {
  let textRef = useRef(null);
  let title = useRef(null);
  let image = useRef(null);
  const t1 = new TimelineLite({ delay: 0.3 });
  // useEffect(() => {
  //   textAnimation(textRef);
  // }, []);

  useEffect(() => {
    // gsap.fromTo(title, 1, { y: -1000 }, { y: 0 });
    // gsap.fromTo(title, 1, { y: -1000 }, { y: 0 });
    t1.fromTo(title, 1, { y: -1000 }, { y: 0 }).fromTo(
      image,
      1,
      { transform: 'scale(0.1)', opacity: 0, ease: Power3.easeInOut() },
      { transform: 'scale(1)', opacity: 1, ease: Power3.easeInOut(), borderRadius: "50%", rotate: "30"  },
    );

    setTimeout(() => textAnimation(textRef), 1200);
  }, [t1]);
  return (
    <>
      <h1 ref={el => (title = el)}>
        <div ref={el => (textRef = el)}>
          <p>
            Hello. It's a homepage.Hello. It's a homepage.Hello. It's a
            homepage.Hello. It's a homepage.Hello. It's a homepage.Hello. It's a
            homepage.Hello. It's a homepage.Hello. It's a homepage.Hello. It's a
            homepage.Hello. It's a homepage.Hello. It's a homepage.Hello. It's a
            homepage.Hello. It's a homepage.Hello. It's a homepage.Hello. It's a
            homepage.Hello. It's a homepage.Hello. It's a homepage.Hello. It's a
            homepage.Hello. It's a homepage.Hello. It's a homepage.Hello. It's a
            homepage.Hello. It's a homepage.Hello. It's a homepage.Hello. It's a
            homepage.Hello. It's a homepage.Hello. It's a homepage.Hello. It's a
            homepage.Hello. It's a homepage.Hello. It's a homepage.Hello. It's a
            homepage.Hello. It's a homepage.Hello. It's a homepage.Hello. It's a
            homepage.Hello. It's a homepage.Hello. It's a homepage.Hello. It's a
            homepage.Hello. It's a homepage.Hello. It's a homepage.
          </p>
        </div>
      </h1>

      <img
      alt="cat"
        ref={el => (image = el)}
        src="https://pixnio.com/free-images/2017/09/26/2017-09-26-07-29-23.jpg"
        width="500"
        // height="500"
      />
    </>
  );
};

export default HomePage;
