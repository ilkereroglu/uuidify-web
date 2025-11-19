import React, { useEffect, useState } from 'react';

export default function UUIDBackground() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        // Generate random UUID segments
        const hexChars = '0123456789abcdef';
        const generateSegment = () => {
            let segment = '';
            for (let i = 0; i < 4; i++) {
                segment += hexChars[Math.floor(Math.random() * 16)];
            }
            return segment;
        };

        const newItems = Array.from({ length: 15 }).map((_, i) => ({
            id: i,
            text: generateSegment(),
            left: Math.random() * 100, // Random horizontal position
            top: Math.random() * 100,  // Random vertical position
            delay: Math.random() * 5,  // Random animation delay
            duration: 10 + Math.random() * 10, // Random duration between 10-20s
            size: 0.8 + Math.random() * 1.2, // Random font size scale
        }));

        setItems(newItems);
    }, []);

    return (
        <div className="uuid-background-container">
            {items.map((item) => (
                <div
                    key={item.id}
                    className="uuid-floating-item"
                    style={{
                        left: `${item.left}%`,
                        top: `${item.top}%`,
                        animationDelay: `${item.delay}s`,
                        animationDuration: `${item.duration}s`,
                        fontSize: `${item.size}rem`,
                    }}
                >
                    {item.text}
                </div>
            ))}
        </div>
    );
}
