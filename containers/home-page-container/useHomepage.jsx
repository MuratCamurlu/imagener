"use client";
import { useContext, createContext, useState, useMemo } from "react";
const HomePageContext = createContext();

export const HomePageProvider = ({ children }) => {
  const [prompt, setPrompt] = useState("");
  const [image, setImage] = useState(null);
  const [error, setError] = useState(null);
  const [resultPrompt, setResultPrompt] = useState("");
  const [isSubmitting, setSubmitting] = useState(false);

  const changePrompt = (newPrompt) => setPrompt(newPrompt);

  const copyPrompt = (copiedPrompt) => {
    changePrompt(copiedPrompt);
    window.scrollTo(0, 0);
  };

  const generateImage = async () => {
    setSubmitting(true);
    setImage(null);
    setResultPrompt("");

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });
      if (!response.ok) throw new Error(response.statusText || response.status);

      const generatedImage = await response.json();
      setError(null);
      setResultPrompt(prompt);
      setImage(generatedImage);
    } catch (error) {
      setError(error);
    }
    setSubmitting(false);
  };

  const data = useMemo(
    () => ({
      prompt,
      setPrompt,
      isSubmitting,
      copyPrompt,
      generateImage,
      image,
      resultPrompt,
      error,
    }),
    [isSubmitting, prompt, image, resultPrompt, error]
  );

  return (
    <HomePageContext.Provider value={data}>{children}</HomePageContext.Provider>
  );
};

export const useHomePage = () => {
  const context = useContext(HomePageContext);
  return context;
};
