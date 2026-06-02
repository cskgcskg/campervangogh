/**
 * CAMPERVAN GOGH - WhatsApp Business Widget
 * A Brutalist-style floating widget for direct communication.
 */

(function () {
    // --- CONFIGURATION ---
    const WHATSAPP_NUMBER = "44XXXXXXXXXX"; // <-- USER: Replace with your actual number
    const PRE_FILLED_MESSAGE = encodeURIComponent("Hi! I'm interested in booking Vincent. Can you help?");
    const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${PRE_FILLED_MESSAGE}`;

    // --- STYLES ---
    const styles = `
        #wa-widget {
            position: fixed;
            bottom: 24px;
            right: 24px;
            z-index: 9999;
            display: flex;
            align-items: center;
            gap: 12px;
            pointer-events: none;
        }

        /* Shift up on mobile to clear the dock */
        @media (max-width: 768px) {
            #wa-widget {
                bottom: 100px;
                right: 16px;
            }
        }

        .wa-bubble {
            background-color: #F2F0E9;
            border: 2px solid #121212;
            padding: 8px 16px;
            font-family: 'Inter', monospace;
            font-size: 10px;
            font-weight: bold;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            box-shadow: 4px 4px 0px 0px #121212;
            opacity: 0;
            transform: translateX(10px);
            transition: all 0.3s ease;
            pointer-events: none;
            white-space: nowrap;
        }

        .wa-button {
            width: 56px;
            height: 56px;
            background-color: #FF5733; /* Pop Orange */
            border: 2px solid #121212;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #121212;
            font-size: 24px;
            box-shadow: 4px 4px 0px 0px #121212;
            transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            pointer-events: auto;
            text-decoration: none;
        }

        .wa-button:hover {
            transform: translate(-2px, -2px);
            box-shadow: 6px 6px 0px 0px #121212;
            background-color: #121212;
            color: #FF5733;
        }

        .wa-button:active {
            transform: translate(2px, 2px);
            box-shadow: 0px 0px 0px 0px #121212;
        }

        #wa-widget:hover .wa-bubble {
            opacity: 1;
            transform: translateX(0);
        }
    `;

    // --- DOM INJECTION ---
    const injectWidget = () => {
        // Create style tag
        const styleSheet = document.createElement("style");
        styleSheet.innerText = styles;
        document.head.appendChild(styleSheet);

        // Create widget container
        const widget = document.createElement("div");
        widget.id = "wa-widget";
        widget.innerHTML = `
            <div class="wa-bubble">Have Questions? Chat Now</div>
            <a href="${WHATSAPP_URL}" target="_blank" class="wa-button" aria-label="Chat on WhatsApp">
                <i class="fab fa-whatsapp"></i>
            </a>
        `;
        document.body.appendChild(widget);
    };

    // Initialize when DOM is ready
    if (document.readyState === "complete" || document.readyState === "interactive") {
        injectWidget();
    } else {
        document.addEventListener("DOMContentLoaded", injectWidget);
    }
})();
