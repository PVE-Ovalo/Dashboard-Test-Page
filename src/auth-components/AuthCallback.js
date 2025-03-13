import React, { useEffect } from "react";
import { useAuth } from "../context/AuthProvider";
import { useSearchParams, useNavigate } from "react-router-dom";

const AuthCallback = () => {
  const { exchangeCodeForToken } = useAuth();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

/*  useEffect(() => {
    const code = searchParams.get("code");
    if (code) {
      exchangeCodeForToken(code);
      navigate("/dashboard"); // Redirige vers le tableau de bord
    }
  }, [searchParams, exchangeCodeForToken, navigate]);

*/

useEffect(() => {
  
  const urlParts = window.location.href.split("#");
  const baseUrl = urlParts[0]; // Partie avant le #
  const urlParams = new URLSearchParams(new URL(baseUrl).search);
  const code = urlParams.get("code");
  if (code) {
    exchangeCodeForToken(code);
    navigate("/dashboard"); // Redirige vers le tableau de bord
  }
}, [searchParams, exchangeCodeForToken, navigate]);

  return <div>Connexion en cours...</div>;
};

export default AuthCallback;
