"use client";

import { useEffect, useState, useRef } from "react";

import clsx from "clsx";

import { Squrrials } from "./loadSvg";

const indexHandler = (index: number) => (index + 4) % 4;

interface FanProsp {
  className?: string;
}
export default function Fall(props: FanProsp) {
  const { className } = props;

  const [count, setCount] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setCount((prev) => prev + 1);
      if (count >= 3) setCount(() => 0);
    }, 300);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [count]);

  return (
    <div className={clsx("flex", "justify-center", className)}>
      <>
        {Squrrials.map((Element, index) => {
          return (
            <Element
              key={index}
              className={`absolute top-1/2 left-1/2 -translate-x-[40%] -translate-y-1/2 fan-${index} stroke-primary fill-none stroke-black stroke-[4px] []`}
              style={{
                opacity: indexHandler(index) == count % 2 ? 1 : 0,
              }}
            />
          );
        })}
      </>
    </div>
  );
}
