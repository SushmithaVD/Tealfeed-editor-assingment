

import React, { useState } from "react";
import { Highlight, Prism, themes } from "prism-react-renderer";

import "./CodeEditor.css";

const CodeEditor = () => {
  const [code, setCode] = useState("");

  const handleChange = event => {
    setCode(event.target.value);
  };

  return (
    <div className="code-editor">
      <Highlight
        Prism={Prism}
        code={code}
        language="javascript"
        theme={themes.vsDark}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={style}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
      <textarea
        className="code-input"
        value={code}
        onChange={handleChange}
        spellCheck="false"
      />
    </div>
  );
};

export default CodeEditor;
