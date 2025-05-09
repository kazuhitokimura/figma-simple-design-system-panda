import { SVGProps } from "react";
import { css } from "../../../styled-system/css";

export type IconName = "activity" | "airplay";
export type IconProps = {
  name: IconName;
  size?: "16" | "20" | "24" | "32" | "40" | "48";
  color?: string;
} & SVGProps<SVGSVGElement>;

export const Icon = ({
  name,
  size = "24",
  color = "var(--colors-fg-default)", // panda.config.tsにsemantic tokenがあればそちらを優先
  ...props
}: IconProps) => {
  switch (name) {
    case "activity":
      switch (size) {
        case "16":
          return (
            <svg
              className={css({
                width: "icon.small",
                height: "icon.small",
                color,
              })}
              viewBox="0 0 15 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              {...props}
            >
              <path
                d="M14.1964 6.83041H11.5179L9.50893 12.8572L5.49106 0.803621L3.48213 6.83041H0.80356"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          );
        case "20":
          return (
            <svg
              className={css({
                width: "icon.small",
                height: "icon.small",
                color,
              })}
              viewBox="0 0 19 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              {...props}
            >
              <path
                d="M17.6667 8.5H14.3333L11.8333 16L6.83333 1L4.33333 8.5H1"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          );
        case "32":
          return (
            <svg
              className={css({
                width: "icon.large",
                height: "icon.large",
                color,
              })}
              viewBox="0 0 30 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              {...props}
            >
              <path
                d="M28.1667 13.5H22.8333L18.8333 25.5L10.8333 1.5L6.83333 13.5H1.5"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          );
        case "40":
          return (
            <svg
              className={css({
                width: "icon.large",
                height: "icon.large",
                color,
              })}
              viewBox="0 0 37 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              {...props}
            >
              <path
                d="M35.2421 16.8258H28.5453L23.5226 31.8937L13.4774 1.75792L8.45476 16.8258H1.75792"
                stroke="currentColor"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          );
        case "48":
          return (
            <svg
              className={css({
                width: "icon.large",
                height: "icon.large",
                color,
              })}
              viewBox="0 0 44 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              {...props}
            >
              <path
                d="M42 20H34L28 38L16 2L10 20H2"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          );
        case "24":
        default:
          return (
            <svg
              className={css({
                width: "icon.medium",
                height: "icon.medium",
                color,
              })}
              viewBox="0 0 23 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              {...props}
            >
              <path
                d="M21.7222 10.4778H17.6333L14.5667 19.6778L8.43333 1.27778L5.36667 10.4778H1.27778"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          );
      }
    case "airplay":
      switch (size) {
        case "16":
          return (
            <svg
              className={css({
                width: "icon.small",
                height: "icon.small",
                color,
              })}
              viewBox="0 0 15 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              {...props}
            >
              <path
                d="M2.81248 10.1786H2.14284C1.78764 10.1786 1.44699 10.0375 1.19583 9.78634C0.944661 9.53518 0.803558 9.19453 0.803558 8.83933V2.1429C0.803558 1.7877 0.944661 1.44705 1.19583 1.19589C1.44699 0.944722 1.78764 0.80362 2.14284 0.80362H12.8571C13.2123 0.80362 13.553 0.944722 13.8041 1.19589C14.0553 1.44705 14.1964 1.7877 14.1964 2.1429V8.83933C14.1964 9.19453 14.0553 9.53518 13.8041 9.78634C13.553 10.0375 13.2123 10.1786 12.8571 10.1786H12.1875M7.49998 8.83933L10.8482 12.8572H4.15177L7.49998 8.83933Z"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          );
        case "20":
          return (
            <svg
              className={css({
                width: "icon.small",
                height: "icon.small",
                color,
              })}
              viewBox="0 0 19 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              {...props}
            >
              <path
                d="M3.5 12.6667H2.66667C2.22464 12.6667 1.80072 12.4911 1.48816 12.1785C1.17559 11.866 1 11.442 1 11V2.66667C1 2.22464 1.17559 1.80072 1.48816 1.48816C1.80072 1.17559 2.22464 1 2.66667 1H16C16.442 1 16.866 1.17559 17.1785 1.48816C17.4911 1.80072 17.6667 2.22464 17.6667 2.66667V11C17.6667 11.442 17.4911 11.866 17.1785 12.1785C16.866 12.4911 16.442 12.6667 16 12.6667H15.1667M9.33333 11L13.5 16H5.16667L9.33333 11Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          );
        case "32":
          return (
            <svg
              className={css({
                width: "icon.large",
                height: "icon.large",
                color,
              })}
              viewBox="0 0 30 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              {...props}
            >
              <path
                d="M5.5 20.1667H4.16667C3.45942 20.1667 2.78115 19.8857 2.28105 19.3856C1.78095 18.8855 1.5 18.2072 1.5 17.5V4.16667C1.5 3.45942 1.78095 2.78115 2.28105 2.28105C2.78115 1.78095 3.45942 1.5 4.16667 1.5H25.5C26.2072 1.5 26.8855 1.78095 27.3856 2.28105C27.8857 2.78115 28.1667 3.45942 28.1667 4.16667V17.5C28.1667 18.2072 27.8857 18.8855 27.3856 19.3856C26.8855 19.8857 26.2072 20.1667 25.5 20.1667H24.1667M14.8333 17.5L21.5 25.5H8.16667L14.8333 17.5Z"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          );
        case "40":
          return (
            <svg
              className={css({
                width: "icon.large",
                height: "icon.large",
                color,
              })}
              viewBox="0 0 37 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              {...props}
            >
              <path
                d="M6.78054 25.1968H5.10633C4.21827 25.1968 3.36659 24.844 2.73864 24.2161C2.11069 23.5881 1.75792 22.7364 1.75792 21.8484V5.10633C1.75792 4.21827 2.11069 3.36659 2.73864 2.73864C3.36659 2.11069 4.21827 1.75792 5.10633 1.75792H31.8936C32.7817 1.75792 33.6334 2.11069 34.2613 2.73864C34.8893 3.36659 35.242 4.21827 35.242 5.10633V21.8484C35.242 22.7364 34.8893 23.5881 34.2613 24.2161C33.6334 24.844 32.7817 25.1968 31.8936 25.1968H30.2194M18.5 21.8484L26.871 31.8936H10.1289L18.5 21.8484Z"
                stroke="currentColor"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          );
        case "48":
          return (
            <svg
              className={css({
                width: "icon.large",
                height: "icon.large",
                color,
              })}
              viewBox="0 0 44 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              {...props}
            >
              <path
                d="M8 30H6C4.93913 30 3.92172 29.5786 3.17157 28.8284C2.42143 28.0783 2 27.0609 2 26V6C2 4.93913 2.42143 3.92172 3.17157 3.17157C3.92172 2.42143 4.93913 2 6 2H38C39.0609 2 40.0783 2.42143 40.8284 3.17157C41.5786 3.92172 42 4.93913 42 6V26C42 27.0609 41.5786 28.0783 40.8284 28.8284C40.0783 29.5786 39.0609 30 38 30H36M22 26L32 38H12L22 26Z"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          );
        case "24":
        default:
          return (
            <svg
              className={css({
                width: "icon.medium",
                height: "icon.medium",
                color,
              })}
              viewBox="0 0 23 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              {...props}
            >
              <path
                d="M4.34444 15.5889H3.32222C2.78 15.5889 2.25999 15.3735 1.87658 14.9901C1.49317 14.6067 1.27778 14.0867 1.27778 13.5444V3.32222C1.27778 2.78 1.49317 2.25999 1.87658 1.87658C2.25999 1.49317 2.78 1.27778 3.32222 1.27778H19.6778C20.22 1.27778 20.74 1.49317 21.1234 1.87658C21.5068 2.25999 21.7222 2.78 21.7222 3.32222V13.5444C21.7222 14.0867 21.5068 14.6067 21.1234 14.9901C20.74 15.3735 20.22 15.5889 19.6778 15.5889H18.6556M11.5 13.5444L16.6111 19.6778H6.38889L11.5 13.5444Z"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          );
      }
    default:
      return null;
  }
};

export const Icons = {
  activity: (props: Omit<IconProps, "name">) => (
    <Icon name="activity" {...props} />
  ),
  airplay: (props: Omit<IconProps, "name">) => (
    <Icon name="airplay" {...props} />
  ),
} as const;
