import React, { useState } from "react";
import { textAreaStyle } from "./template-box.style";

export const TemplateBox = ({ setLoading, setResults, loading }) => {
  const [template, setTemplate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const requestOptions = {
      method: "POST",
      body: JSON.stringify({ template: template }),
    };

    const url = process.env.REACT_APP_LINTER_ENDPOINT;
    const response = await fetch(url, requestOptions);
    const data = await response.json();

    setResults(data.message);

    setLoading(false);
  };

  const handleChange = (e) => setTemplate(e.target.value);

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <span>
          <label htmlFor="template">Template</label>
          <textarea
            style={textAreaStyle}
            value={template}
            onChange={handleChange}
          />
        </span>
        <button className="float-right" disabled={loading}>
          {loading ? "Loading..." : "Submit"}
        </button>
      </fieldset>
    </form>
  );
};
