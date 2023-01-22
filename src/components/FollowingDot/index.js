import { useState, useEffect, useRef } from "react";

export const FollowingDot = () => {
    const [currentTarget, setCurrentTarget] = useState(1);
    const [currentOrigin, setCurrentOrigin] = useState(0);

    const dotRef = useRef(null);

    useEffect(() => {
        const getElXY = (el) => {
            var rect = el.getBoundingClientRect();
            return { x: rect.left, y: rect.top };
        };

        const getBodyMargin = () => {
            const body = document.body;
            const style = window.getComputedStyle(body);

            return {
                top: Number(style.marginTop.replace("px", "")),
                left: Number(style.marginLeft.replace("px", "")),
            };
        };

        const flyTo = (el, target) => {
            el.classList.remove("ani");
            const targetXY = getElXY(target);
            const dotXY = getElXY(el);
            const distanceX = targetXY.x - dotXY.x;
            const distanceY = targetXY.y - dotXY.y;
            const { top, left } = getBodyMargin();

            const xVal = dotXY.x - left + distanceX;
            const yVal = dotXY.y - top + window.scrollY + distanceY;

            el.style.transform = `translate(${xVal}px, ${yVal}px)`;

            el.classList.add("ani");
            // Setup for next iteration
            setCurrentTarget(currentTarget >= targets.length - 1 ? 0 : currentTarget + 1);
            setCurrentOrigin(currentTarget === 0 ? targets.length - 1 : currentTarget - 1);
        };

        const dot = dotRef.current;
        const targets = document.querySelectorAll(".dot-target");

        // if (document.readyState === "complete") {
        //     flyTo(dot, targets[0]);
        // } else {
        //     window.addEventListener("load", flyTo(dot, targets[0]));
        // }

        window.onresize = () => {
            handleResize();
        };

        const handleResize = () => {
            const dotXY = getElXY(dot);
            const elXY = getElXY(targets[currentOrigin]);
            const distanceX = elXY.x - dotXY.x;
            const distanceY = elXY.y - dotXY.y;
            const { top, left } = getBodyMargin();
            dot.style.transform = `translate(${dotXY.x - left + distanceX}px, ${dotXY.y - top + window.scrollY + distanceY}px)`;
        };

        const slideDivObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        flyTo(dot, entry.target);
                    }
                });
            },
            {
                root: null,
                threshold: 1,
                rootMargin: "0px 0px",
            }
        );

        const sections = Array.from(document.getElementsByClassName("dot-target"));

        for (let section of sections) {
            slideDivObserver.observe(section);
        }

        return () => {};
    }, []);

    return <div ref={dotRef} className="dot"></div>;
};

export const DotTarget = () => {
    return <div style={{ display: "inline" }} className="dot-target"></div>;
};
