import Examples from "./examples";
import PromtSuggestions from "./prompt-suggestions";
import PromptForm from "./promt-form";
import ResultImage from "./result-image";
import styles from "./styles.module.scss";

const HomePageContainer = () => {
  return (
    <div className={styles.HomePageContainer}>
      <h1 className={styles.title}>
        You Just Image <br /> we handle the rest{" "}
      </h1>
      <p className={styles.description}>
        Tell us a prompt and we'll generate a story for you
      </p>
      <PromptForm />
      <ResultImage />
      <PromtSuggestions />
      <Examples />
    </div>
  );
};

export default HomePageContainer;
