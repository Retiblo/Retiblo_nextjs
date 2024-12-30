import { SVGProps } from "react";

interface LogoProps extends SVGProps<SVGSVGElement> {
  color: string;
}

function Wind1(props: LogoProps) {
  const { color, ...others } = props;
  return (
    <svg
      {...others}
      xmlns="http://www.w3.org/2000/svg"
      width="83.612"
      height="37.323"
      viewBox="0 0 83.612 37.323"
    >
      <g
        style={{
          strokeLinecap: "round",
          strokeWidth: 4,
          fill: "none",
          stroke: "none",
        }}
      >
        <path
          d="M-2505.13,3787.668s2.366,22.085,25.241,18.142,11.043-13.409,22.085-18.142,28.4,8.677,28.4,8.677"
          transform="matrix(0.985, 0.174, -0.174, 0.985, 3130.544, -3291.747)"
          stroke={color}
        />
      </g>
    </svg>
  );
}

function Wind2(props: LogoProps) {
  const { color, ...others } = props;
  return (
    <svg
      {...others}
      xmlns="http://www.w3.org/2000/svg"
      width="82.75"
      height="18.513"
      viewBox="0 0 82.75 18.513"
    >
      <g
        style={{
          strokeLinecap: "round",
          strokeWidth: 4,
          fill: "none",
          stroke: "none",
        }}
      >
        <path
          d="M-4413.365,5063.981s14.468,19.136,37.338,12.135,17.269-15.869,40.139-9.334"
          transform="translate(4416.166 -5061.18)"
          stroke={color}
        />
      </g>
    </svg>
  );
}

function Wind3(props: LogoProps) {
  const { color, ...others } = props;
  return (
    <svg
      {...others}
      xmlns="http://www.w3.org/2000/svg"
      width="82.761"
      height="12.933"
      viewBox="0 0 82.761 12.933"
    >
      <g
        style={{
          strokeLinecap: "round",
          strokeWidth: 4,
          fill: "none",
          stroke: "none",
        }}
      >
        <path
          d="M-4413.365,5063.981s15.984,12.869,38.854,5.868,15.753-9.6,38.623-3.068"
          transform="translate(4416.177 -5061.031)"
          stroke={color}
        />
      </g>
    </svg>
  );
}

function Wind4(props: LogoProps) {
  const { color, ...others } = props;
  return (
    <svg
      {...others}
      xmlns="http://www.w3.org/2000/svg"
      width="83.564"
      height="12.08"
      viewBox="0 0 83.564 12.08"
    >
      <g
        style={{
          strokeLinecap: "round",
          strokeWidth: 4,
          fill: "none",
          stroke: "none",
        }}
      >
        <path
          d="M-4414.17,5069.85s11.2-9.152,39.659,0,27.083.183,38.623-3.068"
          transform="translate(4416.985 -5063.765)"
          stroke={color}
        />
      </g>
    </svg>
  );
}

function Wind5(props: LogoProps) {
  const { color, ...others } = props;
  return (
    <svg
      {...others}
      xmlns="http://www.w3.org/2000/svg"
      width="78.151"
      height="18.801"
      viewBox="0 0 78.151 18.801"
    >
      <g
        style={{
          strokeLinecap: "round",
          strokeWidth: 4,
          fill: "none",
          stroke: "none",
        }}
      >
        <path
          d="M-4408.757,5080.3s7.35-22.3,34.246-10.451,32.5,6.717,38.623-3.068"
          transform="translate(4411.282 -5064.025)"
          stroke={color}
        />
      </g>
    </svg>
  );
}

function Wind6(props: LogoProps) {
  const { color, ...others } = props;
  return (
    <svg
      {...others}
      xmlns="http://www.w3.org/2000/svg"
      width="65.638"
      height="23.633"
      viewBox="0 0 65.638 23.633"
    >
      <g
        style={{
          strokeLinecap: "round",
          strokeWidth: 4,
          fill: "none",
          stroke: "none",
        }}
      >
        <path
          d="M-4404.293,5084.165s2.886-26.166,29.782-14.315,24.765,5.43,30.892-4.354"
          transform="translate(4406.5 -5062.738)"
          stroke={color}
        />
      </g>
    </svg>
  );
}

export const Winds = [Wind1, Wind2, Wind3, Wind4, Wind5, Wind6];
