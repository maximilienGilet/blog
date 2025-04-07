import { LOCALE } from "@config";
import { slugifyStr } from "@utils/slugify";

interface DatetimesProps {
  pubDatetime: string | Date;
  modDatetime: string | Date | undefined | null;
}

interface Props extends DatetimesProps {
  size?: "sm" | "lg";
  className?: string;
}

export default function Datetime({
  pubDatetime,
  modDatetime,
  size = "sm",
  className,
}: Props) {
  return (
    <div className={`flex items-center space-x-2 opacity-80 ${className} mono`}>
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        id="Interface-Essential-Calendar-Appointment--Streamline-Pixel"
        className={
          "inline-block h-6 w-6 min-w-[1.375rem] scale-75 fill-skin-base"
        }
        aria-hidden="true"
      >
        <g>
          <path
            d="m2.285 10.67 27.43 0 0 19.81 1.52 0 0 -24.38 -1.52 0 0 3.04 -27.43 0 0 -3.04 -1.52 0 0 24.38 1.52 0 0 -19.81z"
            fill="currentColor"
            stroke-width="1"
          ></path>
          <path
            d="M28.195 4.57h1.52V6.1h-1.52Z"
            fill="currentColor"
            stroke-width="1"
          ></path>
          <path
            d="M2.285 30.48h27.43V32H2.285Z"
            fill="currentColor"
            stroke-width="1"
          ></path>
          <path
            d="m25.145 18.29 -3.05 0 0 1.52 -1.52 0 0 -1.52 -3.05 0 0 1.52 -1.52 0 0 3.05 1.52 0 0 1.52 1.52 0 0 1.52 1.53 0 0 1.53 1.52 0 0 -1.53 1.52 0 0 -1.52 1.53 0 0 -1.52 1.52 0 0 -3.05 -1.52 0 0 -1.52z"
            fill="currentColor"
            stroke-width="1"
          ></path>
          <path
            d="M23.615 13.71h1.53v1.53h-1.53Z"
            fill="currentColor"
            stroke-width="1"
          ></path>
          <path
            d="M17.525 13.71h1.52v1.53h-1.52Z"
            fill="currentColor"
            stroke-width="1"
          ></path>
          <path
            d="M11.425 25.9h1.53v1.53h-1.53Z"
            fill="currentColor"
            stroke-width="1"
          ></path>
          <path
            d="M11.425 19.81h1.53v1.52h-1.53Z"
            fill="currentColor"
            stroke-width="1"
          ></path>
          <path
            d="M11.425 13.71h1.53v1.53h-1.53Z"
            fill="currentColor"
            stroke-width="1"
          ></path>
          <path
            d="M5.335 25.9h1.52v1.53h-1.52Z"
            fill="currentColor"
            stroke-width="1"
          ></path>
          <path
            d="M5.335 19.81h1.52v1.52h-1.52Z"
            fill="currentColor"
            stroke-width="1"
          ></path>
          <path
            d="M5.335 13.71h1.52v1.53h-1.52Z"
            fill="currentColor"
            stroke-width="1"
          ></path>
          <path
            d="m8.385 4.57 0 1.53 1.52 0 0 -1.53 12.19 0 0 1.53 1.52 0 0 -1.53 4.58 0 0 -1.52 -4.58 0 0 -3.05 -1.52 0 0 3.05 -12.19 0 0 -3.05 -1.52 0 0 3.05 -4.57 0 0 1.52 4.57 0z"
            fill="currentColor"
            stroke-width="1"
          ></path>
          <path
            d="M2.285 4.57h1.53V6.1h-1.53Z"
            fill="currentColor"
            stroke-width="1"
          ></path>
        </g>
      </svg> */}
      {modDatetime && modDatetime > pubDatetime && (
        <span className={`italic ${size === "sm" ? "text-sm" : "text-base"}`}>
          Màj:
        </span>
      )}
      <span
        className={`italic ${size === "sm" ? "text-sm" : "text-base"}`}
        style={{ viewTransitionName: slugifyStr(pubDatetime.toString()) }}
      >
        <FormattedDatetime
          pubDatetime={pubDatetime}
          modDatetime={modDatetime}
        />
      </span>
    </div>
  );
}

const FormattedDatetime = ({ pubDatetime, modDatetime }: DatetimesProps) => {
  const myDatetime = new Date(
    modDatetime && modDatetime > pubDatetime ? modDatetime : pubDatetime
  );

  const date = myDatetime.toLocaleDateString(LOCALE.langTag, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const time = myDatetime.toLocaleTimeString(LOCALE.langTag, {
    hour: "2-digit",
    minute: "2-digit",
  });

  return <time dateTime={myDatetime.toISOString()}>{date}</time>;
};
