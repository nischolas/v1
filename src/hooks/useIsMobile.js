import { useState, useEffect, useRef } from "react";

export default function useIsViewportLessThanWidth(width = 768, delay = 100) {
    const [isLessThanWidth, setIsLessThanWidth] = useState(window.innerWidth < width);
    const isLessThanWidthRef = useRef(isLessThanWidth);

    useEffect(() => {
        const handleResize = () => {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = setTimeout(() => {
                const newIsLessThanWidth = window.innerWidth < width;
                setIsLessThanWidth(newIsLessThanWidth);
                isLessThanWidthRef.current = newIsLessThanWidth;
            }, delay);
        };

        const timeoutRef = { current: null };
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
            clearTimeout(timeoutRef.current);
        };
    }, [width, delay]);

    return isLessThanWidthRef.current;
}
