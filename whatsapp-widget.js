/**
 * CAMPER VAN GOGH — WhatsApp contact widget
 * Styled to match the site's dark + champagne-gold design system.
 */
(function () {
  // --- CONFIGURATION ---
  var WHATSAPP_NUMBER = "44XXXXXXXXXX"; // <-- Replace with your actual number
  var MESSAGE = encodeURIComponent("Hi! I'm interested in booking Vincent. Can you help?");
  var URL = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + MESSAGE;

  var styles = [
    "#wa-widget{position:fixed;bottom:24px;right:24px;z-index:1100;display:flex;align-items:center;gap:12px;pointer-events:none;}",
    "@media (max-width:860px){#wa-widget{bottom:calc(84px + env(safe-area-inset-bottom));right:16px;}}",
    ".wa-bubble{background:rgba(24,24,27,.95);border:1px solid rgba(201,169,110,.3);color:#f3eee4;border-radius:100px;padding:9px 18px;font-family:'Inter',sans-serif;font-size:11px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;box-shadow:0 8px 24px rgba(0,0,0,.45);opacity:0;transform:translateX(8px);transition:all .3s cubic-bezier(.16,1,.3,1);pointer-events:none;white-space:nowrap;}",
    ".wa-button{width:56px;height:56px;background:#c9a96e;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#0a0a0b;box-shadow:0 8px 24px rgba(0,0,0,.4);transition:all .25s cubic-bezier(.16,1,.3,1);pointer-events:auto;text-decoration:none;}",
    ".wa-button:hover{background:#ddc492;transform:translateY(-3px);box-shadow:0 12px 32px rgba(201,169,110,.35);}",
    ".wa-button svg{width:28px;height:28px;fill:currentColor;}",
    "#wa-widget:hover .wa-bubble{opacity:1;transform:translateX(0);}",
    "@media (prefers-reduced-motion:reduce){.wa-bubble,.wa-button{transition:none;}}"
  ].join("");

  function inject() {
    var style = document.createElement("style");
    style.textContent = styles;
    document.head.appendChild(style);

    var widget = document.createElement("div");
    widget.id = "wa-widget";
    widget.innerHTML =
      '<div class="wa-bubble">Questions? Chat with us</div>' +
      '<a href="' + URL + '" target="_blank" rel="noopener" class="wa-button" aria-label="Chat on WhatsApp">' +
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.5 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2-1.42.25-.7.25-1.3.18-1.42-.07-.12-.27-.2-.57-.35M12.05 21.78h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.9-9.88a9.84 9.84 0 0 1 9.88 9.89c0 5.45-4.43 9.88-9.89 9.88m8.41-18.29A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.33.16 11.89c0 2.1.55 4.14 1.59 5.94L.06 24l6.33-1.66a11.88 11.88 0 0 0 5.66 1.44h.01c6.55 0 11.89-5.33 11.89-11.89 0-3.18-1.24-6.16-3.49-8.4"/></svg></a>';
    document.body.appendChild(widget);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", inject);
  } else {
    inject();
  }
})();
