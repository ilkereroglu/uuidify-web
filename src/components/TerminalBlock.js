import React, { useEffect, useState } from 'react';

export default function TerminalBlock() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        // Trigger fade-in animation on mount
        const timer = setTimeout(() => setVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`terminal-block ${visible ? 'visible' : ''}`}>
            <div className="terminal-window">
                <div className="terminal-header">
                    <span className="terminal-dot red"></span>
                    <span className="terminal-dot yellow"></span>
                    <span className="terminal-dot green"></span>
                </div>
                <div className="terminal-content">
                    <div>
                        <span className="terminal-prompt">$</span>
                        <span className="terminal-command"> curl https://api.uuidify.io/v4</span>
                    </div>
                    <div className="terminal-output">
                        {`{
  "uuid": "f47ac10b-58cc-4372-a567-0e02b2c3d479",
  "version": "v4",
  "timestamp": "${new Date().toISOString()}"
}`}
                    </div>
                </div>
            </div>
        </div>
    );
}
