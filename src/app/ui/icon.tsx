import { SVGProps } from "react";
import { css } from "../../../styled-system/css";

export type IconName =
  | "activity"
  | "airplay"
  | "alert-circle"
  | "alert-octagon"
  | "alert-triangle";
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
    case "alert-circle":
      switch (size) {
        case "16":
          return (
            <svg
              className={css({
                width: "icon.small",
                height: "icon.small",
                color,
              })}
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              {...props}
            >
              <path
                d="M8.00004 5.33325V7.99992M8.00004 10.6666H8.00671M14.6667 7.99992C14.6667 11.6818 11.6819 14.6666 8.00004 14.6666C4.31814 14.6666 1.33337 11.6818 1.33337 7.99992C1.33337 4.31802 4.31814 1.33325 8.00004 1.33325C11.6819 1.33325 14.6667 4.31802 14.6667 7.99992Z"
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
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              {...props}
            >
              <path
                d="M9.99996 6.66675V10.0001M9.99996 13.3334H10.0083M18.3333 10.0001C18.3333 14.6025 14.6023 18.3334 9.99996 18.3334C5.39759 18.3334 1.66663 14.6025 1.66663 10.0001C1.66663 5.39771 5.39759 1.66675 9.99996 1.66675C14.6023 1.66675 18.3333 5.39771 18.3333 10.0001Z"
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
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              {...props}
            >
              <path
                d="M16 10.6667V16.0001M16 21.3334H16.0133M29.3333 16.0001C29.3333 23.3639 23.3638 29.3334 16 29.3334C8.63616 29.3334 2.66663 23.3639 2.66663 16.0001C2.66663 8.63628 8.63616 2.66675 16 2.66675C23.3638 2.66675 29.3333 8.63628 29.3333 16.0001Z"
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
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              {...props}
            >
              <path
                d="M20 13.3333V19.9999M20 26.6666H20.0167M36.6667 19.9999C36.6667 29.2047 29.2048 36.6666 20 36.6666C10.7953 36.6666 3.33337 29.2047 3.33337 19.9999C3.33337 10.7952 10.7953 3.33325 20 3.33325C29.2048 3.33325 36.6667 10.7952 36.6667 19.9999Z"
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
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              {...props}
            >
              <path
                d="M24 16V24M24 32H24.02M44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4C35.0457 4 44 12.9543 44 24Z"
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
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              {...props}
            >
              <g clipPath="url(#clip0_4039_11554)">
                <path
                  d="M12 8V12M12 16H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_4039_11554">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          );
      }
    case "alert-octagon":
      switch (size) {
        case "16":
          return (
            <svg
              className={css({
                width: "icon.small",
                height: "icon.small",
                color,
              })}
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              {...props}
            >
              <path
                d="M8.00004 5.33325V7.99992M8.00004 10.6666H8.00671M5.24004 1.33325H10.76L14.6667 5.23992V10.7599L10.76 14.6666H5.24004L1.33337 10.7599V5.23992L5.24004 1.33325Z"
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
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              {...props}
            >
              <path
                d="M10.0001 6.66675V10.0001M10.0001 13.3334H10.0084M6.55008 1.66675H13.4501L18.3334 6.55008V13.4501L13.4501 18.3334H6.55008L1.66675 13.4501V6.55008L6.55008 1.66675Z"
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
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              {...props}
            >
              <path
                d="M16.0001 10.6667V16.0001M16.0001 21.3334H16.0134M10.4801 2.66675H21.5201L29.3334 10.4801V21.5201L21.5201 29.3334H10.4801L2.66675 21.5201V10.4801L10.4801 2.66675Z"
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
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              {...props}
            >
              <path
                d="M19.9999 13.3333V19.9999M19.9999 26.6666H20.0166M13.0999 3.33325H26.8999L36.6666 13.0999V26.8999L26.8999 36.6666H13.0999L3.33325 26.8999V13.0999L13.0999 3.33325Z"
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
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              {...props}
            >
              <path
                d="M24 16V24M24 32H24.02M15.72 4H32.28L44 15.72V32.28L32.28 44H15.72L4 32.28V15.72L15.72 4Z"
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
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              {...props}
            >
              <g clipPath="url(#clip0_4039_12694)">
                <path
                  d="M12 8V12M12 16H12.01M7.86 2H16.14L22 7.86V16.14L16.14 22H7.86L2 16.14V7.86L7.86 2Z"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_4039_12694">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          );
      }
    case "alert-triangle":
      switch (size) {
        case "16":
          return (
            <svg
              className={css({
                width: "icon.small",
                height: "icon.small",
                color,
              })}
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              {...props}
            >
              <path
                d="M8.00001 5.99989V8.66656M8.00001 11.3332H8.00668M6.86001 2.57323L1.21335 11.9999C1.09693 12.2015 1.03533 12.4301 1.03467 12.6629C1.03402 12.8957 1.09434 13.1246 1.20963 13.3269C1.32492 13.5292 1.49116 13.6977 1.69182 13.8158C1.89247 13.9339 2.12055 13.9973 2.35335 13.9999H13.6467C13.8795 13.9973 14.1076 13.9339 14.3082 13.8158C14.5089 13.6977 14.6751 13.5292 14.7904 13.3269C14.9057 13.1246 14.966 12.8957 14.9654 12.6629C14.9647 12.4301 14.9031 12.2015 14.7867 11.9999L9.14001 2.57323C9.02117 2.3773 8.85383 2.21531 8.65414 2.10288C8.45446 1.99046 8.22917 1.9314 8.00001 1.9314C7.77086 1.9314 7.54557 1.99046 7.34588 2.10288C7.1462 2.21531 6.97886 2.3773 6.86001 2.57323Z"
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
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              {...props}
            >
              <path
                d="M9.9999 7.49993V10.8333M9.9999 14.1666H10.0082M8.5749 3.21659L1.51656 14.9999C1.37104 15.2519 1.29403 15.5377 1.29322 15.8287C1.2924 16.1197 1.3678 16.4059 1.51192 16.6587C1.65603 16.9115 1.86383 17.1222 2.11465 17.2698C2.36547 17.4174 2.65056 17.4967 2.94156 17.4999H17.0582C17.3492 17.4967 17.6343 17.4174 17.8851 17.2698C18.136 17.1222 18.3438 16.9115 18.4879 16.6587C18.632 16.4059 18.7074 16.1197 18.7066 15.8287C18.7058 15.5377 18.6288 15.2519 18.4832 14.9999L11.4249 3.21659C11.2763 2.97168 11.0672 2.76919 10.8176 2.62866C10.568 2.48813 10.2863 2.41431 9.9999 2.41431C9.71345 2.41431 9.43184 2.48813 9.18223 2.62866C8.93263 2.76919 8.72345 2.97168 8.5749 3.21659Z"
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
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              {...props}
            >
              <path
                d="M16 12V17.3334M16 22.6667H16.0134M13.72 5.1467L2.42669 24C2.19385 24.4033 2.07065 24.8604 2.06935 25.3261C2.06804 25.7917 2.18868 26.2495 2.41926 26.6541C2.64984 27.0586 2.98233 27.3957 3.38364 27.6318C3.78495 27.868 4.24109 27.9949 4.70669 28H27.2934C27.759 27.9949 28.2151 27.868 28.6164 27.6318C29.0177 27.3957 29.3502 27.0586 29.5808 26.6541C29.8114 26.2495 29.932 25.7917 29.9307 25.3261C29.9294 24.8604 29.8062 24.4033 29.5734 24L18.28 5.1467C18.0423 4.75484 17.7077 4.43085 17.3083 4.20601C16.9089 3.98116 16.4583 3.86304 16 3.86304C15.5417 3.86304 15.0911 3.98116 14.6918 4.20601C14.2924 4.43085 13.9577 4.75484 13.72 5.1467Z"
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
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              {...props}
            >
              <path
                d="M20 15.0001V21.6668M20 28.3334H20.0167M17.15 6.43343L3.03337 30.0001C2.74231 30.5041 2.58831 31.0756 2.58668 31.6576C2.58505 32.2397 2.73585 32.812 3.02408 33.3176C3.31231 33.8233 3.72791 34.2447 4.22955 34.5398C4.73118 34.835 5.30137 34.9937 5.88337 35.0001H34.1167C34.6987 34.9937 35.2689 34.835 35.7705 34.5398C36.2722 34.2447 36.6878 33.8233 36.976 33.3176C37.2642 32.812 37.415 32.2397 37.4134 31.6576C37.4118 31.0756 37.2578 30.5041 36.9667 30.0001L22.85 6.43343C22.5529 5.94361 22.1346 5.53863 21.6354 5.25757C21.1362 4.97651 20.5729 4.82886 20 4.82886C19.4271 4.82886 18.8639 4.97651 18.3647 5.25757C17.8655 5.53863 17.4472 5.94361 17.15 6.43343Z"
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
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              {...props}
            >
              <path
                d="M24 17.9999V25.9999M24 33.9999H24.02M20.58 7.71992L3.64004 35.9999C3.29078 36.6048 3.10598 37.2905 3.10402 37.989C3.10206 38.6874 3.28302 39.3742 3.62889 39.981C3.97477 40.5878 4.47349 41.0934 5.07546 41.4476C5.67742 41.8018 6.36164 41.9922 7.06004 41.9999H40.94C41.6384 41.9922 42.3227 41.8018 42.9246 41.4476C43.5266 41.0934 44.0253 40.5878 44.3712 39.981C44.7171 39.3742 44.898 38.6874 44.8961 37.989C44.8941 37.2905 44.7093 36.6048 44.36 35.9999L27.42 7.71992C27.0635 7.13213 26.5615 6.64616 25.9624 6.30889C25.3634 5.97162 24.6875 5.79443 24 5.79443C23.3126 5.79443 22.6367 5.97162 22.0377 6.30889C21.4386 6.64616 20.9366 7.13213 20.58 7.71992Z"
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
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              {...props}
            >
              <path
                d="M12 8.99996V13M12 17H12.01M10.29 3.85996L1.82002 18C1.64539 18.3024 1.55299 18.6453 1.55201 18.9945C1.55103 19.3437 1.64151 19.6871 1.81445 19.9905C1.98738 20.2939 2.23675 20.5467 2.53773 20.7238C2.83871 20.9009 3.18082 20.9961 3.53002 21H20.47C20.8192 20.9961 21.1613 20.9009 21.4623 20.7238C21.7633 20.5467 22.0127 20.2939 22.1856 19.9905C22.3585 19.6871 22.449 19.3437 22.448 18.9945C22.4471 18.6453 22.3547 18.3024 22.18 18L13.71 3.85996C13.5318 3.56607 13.2807 3.32308 12.9812 3.15444C12.6817 2.98581 12.3438 2.89722 12 2.89722C11.6563 2.89722 11.3184 2.98581 11.0188 3.15444C10.7193 3.32308 10.4683 3.56607 10.29 3.85996Z"
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
  alertCircle: (props: Omit<IconProps, "name">) => (
    <Icon name="alert-circle" {...props} />
  ),
  alertOctagon: (props: Omit<IconProps, "name">) => (
    <Icon name="alert-octagon" {...props} />
  ),
  alertTriangle: (props: Omit<IconProps, "name">) => (
    <Icon name="alert-triangle" {...props} />
  ),
} as const;
