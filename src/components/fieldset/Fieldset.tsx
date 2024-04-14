import React from "react";
import styles from "./fieldset.styles";

type FieldsetProps = { legend: string; children: React.ReactNode };
export default function Fieldset({ legend, children }: FieldsetProps) {
  return (
    <fieldset style={styles.fieldset}>
      <legend style={styles.legend}>{legend.toUpperCase()}</legend>
      {children}
    </fieldset>
  );
}
