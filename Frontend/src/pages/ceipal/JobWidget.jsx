import React, { useEffect } from "react";

const apiKey = import.meta.env.VITE_API_KEY;
const portalId = import.meta.env.VITE_API_PORTAL_ID;

const JobWidget = () => {
  useEffect(() => {
  
    if (!apiKey || !portalId) {
      console.error("Missing CEIPAL API Key or Portal ID in environment variables");
      return;
    }

    // Create script element
    const script = document.createElement("script");
    script.src = "https://jobsapi.ceipal.com/APISource/widget.js";
    script.type = "text/javascript";
    script.setAttribute("data-ceipal-api-key", apiKey);
    script.setAttribute("data-ceipal-career-portal-id", portalId);

    document.body.appendChild(script);

    // Cleanup script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="example-widget-container" className="fullscreen-container"></div>;
};

export default JobWidget;
