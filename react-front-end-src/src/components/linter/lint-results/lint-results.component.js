import React from "react";
import { textBoxStyle } from "./lint-results.style";

export const LintResults = ({ results }) => (
  <span>
    <label htmlFor="results">Results</label>
    <textarea
      style={textBoxStyle}
      readOnly
      value={results !== "" ? results : "No errors found."}
      disabled
      name="results"
    />
  </span>
);
