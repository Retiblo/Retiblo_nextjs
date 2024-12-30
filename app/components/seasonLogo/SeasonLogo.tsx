import dayjs from "dayjs";

import { Summer } from "./components";
import { Fall } from "./components/fall";
import { Spring } from "./components/spring";
import { Winter } from "./components/winter";
const today = () => dayjs();

export default function SeasonLogo() {
  return (
    <>
      {/* <Winter /> */}
      <Summer />
      {/* <Fall /> */}
      {/* {today().month() < 2 || (today().month() === 11 && <Winter />)} */}
      {/* {today().month() < 5 && <Spring />} */}
      {/* {today().month() < 8 && <Summer />} */}
      {/* {today().month() < 11 && <Fall />} */}
    </>
  );
}
