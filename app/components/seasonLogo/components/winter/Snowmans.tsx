import { SVGProps } from "react";

interface LogoProps extends SVGProps<SVGSVGElement> {
  color: string;
}

function SnowMan1(props: LogoProps) {
  const { color, ...others } = props;
  return (
    <svg
      {...others}
      xmlns="http://www.w3.org/2000/svg"
      width="206.609"
      height="215.22"
      viewBox="0 0 206.609 215.22"
    >
      <g
        transform="translate(-132.031 -541.556)"
        style={{
          strokeLinecap: "round",
          strokeWidth: 4,
          fill: "none",
          stroke: "none",
        }}
      >
        <path
          d="M-5848.594,13252.452s-33.057.262-40.173-39.483,11.729-67.358,48.573-72.981,59.707-13.226,72.862,11.759,8.84,67.22-6.491,79.192-36.642,21.514-36.642,21.514-27.648.777-38.128,10.884"
          transform="translate(6040 -12508)"
          stroke={color}
        />
        <path
          d="M-5824.883,13063.564c7.421.292,26.663-10.42,49.413,13.607s-12.353,50.059-12.353,50.059-4.38,7.158-37.061,10.933-47.179-11.391-53.992-23.535-1.688-43.483,44.738-63.231"
          transform="translate(6040 -12508)"
          stroke={color}
        />
        <path
          d="M-5856.457,13089.527v4.427"
          transform="translate(6040 -12508)"
          stroke={color}
        />
        <path
          d="M-5820.3,13086.463v5.4"
          transform="translate(6040 -12508)"
          stroke={color}
        />
        <path
          d="M-5841.377,13097.11l-23.184,2.409s-6.677.912,0,3.648,23.184,3.29,23.184,3.29"
          transform="translate(6040 -12508)"
          stroke="#fb0"
        />
        <path
          d="M-5770.768,13171.227"
          transform="translate(6040 -12508)"
          stroke={color}
        />
        <path
          d="M-5777.274,13173.738l48.123-18.193,7.8-19.258"
          transform="translate(6040 -12508)"
          stroke={color}
        />
        <path
          d="M-5737.548,13159.046l36.051,2.489"
          transform="translate(6040 -12508)"
          stroke={color}
        />
        <path
          d="M-5878.388,13161.535l-12.516-11.556-2.8-17.051"
          transform="translate(6040 -12508)"
          stroke={color}
        />
        <path
          d="M-5886.048,13153.489h-20.92"
          transform="translate(6039 -12508)"
          stroke={color}
        />
      </g>
    </svg>
  );
}

function SnowMan2(props: LogoProps) {
  const { color, ...others } = props;
  return (
    <svg
      {...others}
      xmlns="http://www.w3.org/2000/svg"
      width="210.91"
      height="216.25"
      viewBox="0 0 210.91 216.25"
    >
      <g
        transform="translate(-129.838 -541.914)"
        style={{
          strokeLinecap: "round",
          strokeWidth: 4,
          fill: "none",
          stroke: "none",
        }}
      >
        <path
          d="M-5848.594,13252.452s-30.827-.431-37.942-40.176,10.059-69.188,46.9-74.812,64.631-12.711,77.786,12.273,5.259,65.359-10.072,77.332-35.639,21.346-35.639,21.346-30.556,4.813-41.036,14.92"
          transform="translate(6040 -12508)"
          stroke={color}
        />
        <path
          d="M-5824.883,13063.564c7.421.292,28.794-11.393,51.544,12.635s-12.423,51.291-12.423,51.291-5.536,4.648-38.217,8.423-48.579-7.386-55.392-19.53-4.225-44.1,42.2-63.845"
          transform="translate(6040 -12508)"
          stroke={color}
        />
        <path
          d="M-5856.457,13089.527v4.427"
          transform="translate(6041 -12508.363)"
          stroke={color}
        />
        <path
          d="M-5820.3,13086.463v5.4"
          transform="translate(6041 -12508)"
          stroke={color}
        />
        <path
          d="M-5841.377,13097.11l-23.184,2.807s-6.677,1.795,0,4.531,23.184,2.01,23.184,2.01"
          transform="translate(6040 -12508)"
          stroke="#fb0"
        />
        <path
          d="M-5770.768,13171.227"
          transform="translate(6040 -12508)"
          stroke={color}
        />
        <path
          d="M-5777.274,13173.738l45.9-19.638,10.019-17.813"
          transform="translate(6040 -12508)"
          stroke={color}
        />
        <path
          d="M-5701.41,13161.146l-35.787-4.745"
          transform="translate(6039.913 -12507.611)"
          stroke={color}
        />
        <path
          d="M-5878.388,13161.535l-12.516-11.556-2.8-17.051"
          transform="translate(6040 -12508)"
          stroke={color}
        />
        <path
          d="M-5888.382,13151.587l-18.586,1.9"
          transform="translate(6039 -12508)"
          stroke={color}
        />
      </g>
    </svg>
  );
}

export const Snowmans = [SnowMan1, SnowMan2];
