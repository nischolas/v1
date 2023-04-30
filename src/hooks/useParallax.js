import { useState, useEffect, useRef } from "react";

const useParallax = (scrollSpeed) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!isVisible && ref.current) {
                const elementTop = ref.current.getBoundingClientRect().top;
                const elementBottom = ref.current.getBoundingClientRect().bottom;

                if (elementTop <= window.innerHeight && elementBottom >= 0) {
                    setIsVisible(true);
                }
            }

            if (isVisible) {
                const scrollPosition = window.pageYOffset;
                const translate = `translateY(${scrollPosition * scrollSpeed}px)`;

                if (ref.current) {
                    ref.current.style.transform = translate;
                }
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [isVisible, scrollSpeed]);

    return ref;
};

export default useParallax;
