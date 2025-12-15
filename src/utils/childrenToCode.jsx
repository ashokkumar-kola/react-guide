import React from "react";

function childrenToCode(children: React.ReactNode): string {
  return React.Children.toArray(children)
    .map((child) => {
      if (React.isValidElement(child)) {
        const source = child.props?.["data-source"] || child.type;
        // This is the trick: we use React  to get raw JSX string
        return ReactDOMServer.renderToStaticMarkup(child)
          .replace(/ data-reactroot=""/g, "")
          .replace(/<!-- -->/g, "");
      }
      return String(child);
    })
    .join("\n      ");
}