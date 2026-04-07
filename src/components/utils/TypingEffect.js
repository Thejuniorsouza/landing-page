import React, { useState, useEffect } from "react";

const TypingEffect = ({
    text,
    speed = 30,
    className = "",
    tag = "a",
    href = "a",
}) => {
    const [displayText, setDisplayText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showCursor, setShowCursor] = useState(true);

    const isTypingComplete = currentIndex >= text.length;

    useEffect(() => {
        if (currentIndex < text.length) {
            const timer = setTimeout(() => {
                setDisplayText((prev) => prev + text[currentIndex]);
                setCurrentIndex((prev) => prev + 1);
            }, speed);

            return () => clearTimeout(timer);
        } else if (isTypingComplete && showCursor) {
            // Desaparecer o cursor 3 segundos após completar
            const hideTimer = setTimeout(() => {
                setShowCursor(false);
            }, 3000);

            return () => clearTimeout(hideTimer);
        }
    }, [currentIndex, text, speed, isTypingComplete, showCursor]);

    const Element = tag;
    const props = tag === "a" ? { href } : {};

    return (
        <Element className={className} {...props}>
            {displayText}
            {showCursor && <span className="typing-cursor-bar"></span>}
        </Element>
    );
};

export default TypingEffect;
