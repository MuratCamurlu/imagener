import Tag from "@/components/tag";
import { SUGGESTIONS } from "./constants";
import styles from "./styles.module.scss";

const PromtSuggestions = () => {
  return (
    <div className={styles.promptSuggestions}>
      <h3 className={styles.title}>
        Nothing in mind? Try one of these prompts:
      </h3>
      <div className={styles.suggestions}>
        {SUGGESTIONS.map(({ title, id }) => (
          <Tag key={id} title={title} />
        ))}
      </div>
    </div>
  );
};

export default PromtSuggestions;
