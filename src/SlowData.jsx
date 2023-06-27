import React, { memo } from "react";

export const SlowData = memo(() => {
  console.log("Slow data");
  let items = [];
  for (let i = 0; i < 500; i++) {
    items.push(<SlowFunction key={i} index={i} />);
  }
  return <ul>{items}</ul>;
});

function SlowFunction({ index }) {
  let startTime = performance.now();
  while (performance.now() - startTime < 4) {}
  return <li className="item">Product ID #{index + 100}</li>;
}
