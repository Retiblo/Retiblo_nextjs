"use client";

import { useEffect, useState, useRef } from "react";

import clsx from "clsx";

import { Fans, Winds } from ".";

interface FanProsp {
  className?: string;
}
export default function Fan(props: FanProsp) {
  const { className } = props;

  const [count, setCount] = useState(0);
  const [fanSize, setFanSize] = useState({ width: 0, height: 0 });
  useEffect(() => {
    setTimeout(() => {
      setCount(count + 1);
      if (count > 4) setCount(0);
    }, 300);
  }, [count]);

  const fans = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const width = fans.current?.children[0].scrollWidth ?? 0;
    const height = fans.current?.children[0].scrollHeight ?? 0;
    setFanSize({ width, height });
  }, []);
  function indexHandler(index: number) {
    return (index + 6) % 6;
  }
  return (
    <div className={clsx("flex", "justify-center", className)}>
      <div className="h-[100px] w-[100px] grid grid-rows-3">
        {[0, 1, 2].map((val) => (
          <div key={`wind-${val}`} className="relative">
            {Winds.map((Element, index) => (
              <div
                key={"wind-animate-" + index}
                className={` absolute wind-${indexHandler(index - val)}`}
                style={{
                  opacity: indexHandler(index - val) == count ? 1 : 0,
                }}
              >
                <Element className="stroke-primary" color="#505050" />
              </div>
            ))}
          </div>
        ))}
      </div>
      <div
        className={"relative"}
        ref={fans}
        style={{ height: fanSize.height, width: fanSize.width }}
      >
        {Fans.map((Element, index) => {
          return (
            <Element
              key={index}
              className={`absolute fan-${index} stroke-primary`}
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
