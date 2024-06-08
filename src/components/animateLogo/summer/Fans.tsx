"use client";
import React, { useEffect, useState, useRef, ComponentType } from "react";
import { Winds, Fans } from "./loadSvg";
import cs from "@/src/utils/class";

function Fan({
  className = "",
  power = true,
  animate = true,
}: {
  className?: string;
  power?: boolean;
  animate: boolean;
}) {
  const [count, setCount] = useState(0);
  const [fanSize, setFanSize] = useState({ width: 0, height: 0 });
  useEffect(() => {
    if (!animate) return;
    setTimeout(() => {
      setCount(count + 1);
      if (count > 4) setCount(0);
    }, 300);
  }, [count, animate]);

  const fans = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const width = fans.current?.children[0]?.scrollWidth || 0;
    const height = fans.current?.children[0]?.scrollHeight || 0;
    setFanSize({ width, height });
  }, []);
  function indexHandler(index: number) {
    return (index + 6) % 6;
  }
  return (
    <div className={cs.join("flex", "justify-center", className)}>
      <div className="h-[100px] w-[100px] grid grid-rows-3">
        {power &&
          [0, 1, 2].map((val) => (
            <div key={`wind-${val}`} className="relative">
              {Winds.map((Element: ComponentType<any>, index: number) => (
                <div
                  key={"wind-animate-" + index}
                  className={` absolute wind-${indexHandler(index - val)}`}
                  style={{
                    opacity: indexHandler(index - val) == count ? 1 : 0,
                  }}
                >
                  <Element className="stroke-primary stroke-[3px]" />
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
        {Fans.map((Element: ComponentType<any>, index: number) => {
          return (
            <Element
              key={index}
              className={`absolute fan-${index} stroke-primary stroke-[3px]`}
              style={{
                opacity: indexHandler(index) == count % 2 ? 1 : 0,
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Fan;
