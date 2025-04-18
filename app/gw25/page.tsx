'use client'
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RedirectOnLoad: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to a different route on component load
    navigate("https://gradient-week.vercel.app");
  }, [navigate]);

  return null; // No UI needed since this component just redirects
};

export default RedirectOnLoad;
