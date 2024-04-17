import React from "react";
import styles from "./fieldset.styles";

type FieldsetProps = { legend: string; children: JSX.Element };

const Fieldset = React.memo(({ legend, children }: FieldsetProps) => {
  return (
    <fieldset style={styles.fieldset}>
      <legend style={styles.legend}>{legend.toUpperCase()}</legend>
      {children}
    </fieldset>
  );
});

export default Fieldset;
