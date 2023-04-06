"use client";

import { useHomePage } from "../useHomepage";
import styles from "./styles.module.scss";

const PromptForm = () => {
  const { prompt, setPrompt } = useHomePage();
  const handleFormSubmit = () => {};

  return (
    <div className={styles.promptForm}>
      <form className={styles.form} onSubmit={handleFormSubmit}>
        <textarea
          className={styles.promptTextarea}
          type="text"
          placeholder="enter something"
          rows={2}
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          required
        ></textarea>
        <button type="submit" className={styles.generateButton}>
          Generate
        </button>
      </form>
    </div>
  );
};

export default PromptForm;
