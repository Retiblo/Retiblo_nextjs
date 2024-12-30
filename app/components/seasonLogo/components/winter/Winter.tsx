"use client";

import { useEffect, useState } from "react";

import clsx from "clsx";

import { Snowmans, Snows } from ".";

const indexHandler = (index: number) => (index + 4) % 4;

interface FanProsp {
  className?: string;
}
export default function Winter(props: FanProsp) {
  const { className } = props;

  const [count, setCount] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setCount((prev) => prev + 1);
      if (count >= 3) setCount((prev) => 0);
    }, 300);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [count]);

  return (
    <div className={clsx("flex", "justify-center", className)}>
      <div className={"relative"}>
        {Snows.map((Element, index) => (
          <div
            key={"wind-animate-" + index}
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}
            style={{
              opacity: indexHandler(index) === count ? 1 : 0,
            }}
          >
            <Element className="stroke-primary" color="#505050" />
          </div>
        ))}
        {Snowmans.map((Element, index) => {
          return (
            <Element
              key={index}
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}
              style={{
                opacity: indexHandler(index) == count % 2 ? 1 : 0,
              }}
              color="#505050"
            />
          );
        })}
      </div>
    </div>
  );
}
