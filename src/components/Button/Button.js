import React from "react";

function Button({ text, color, onClick, className = "btn" }) {
    const isTransparent = color === "transparent";

    return (
        <div className={className}>
            <button
                style={
                    isTransparent
                        ? undefined
                        : { backgroundColor: color, borderColor: color }
                }
                onClick={onClick}
            >
                {text}
            </button>
        </div>
    );
}

export default Button;
