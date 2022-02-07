import dayjs from "dayjs";
import { TYPE_USER } from "./constants";
export const substract = (from, type) => {
  const date = dayjs();
  const diffYear = date.diff(from * 1000, "y");
  const diffMonth = date.diff(from * 1000, "M");
  const diffWeek = date.diff(from * 1000, "w");
  const diffDay = date.diff(from * 1000, "d");
  const diffHour = date.diff(from * 1000, "h");
  const diffMinute = date.diff(from * 1000, "m");
  const diffSecond = date.diff(from * 1000, "s");
  const result =
    diffYear === 0
      ? diffMonth === 0
        ? diffWeek === 0
          ? diffDay === 0
            ? diffHour === 0
              ? diffMinute === 0
                ? `${diffSecond}${type === TYPE_USER ? " seconds ago" : "s"}`
                : `${diffMinute}${type === TYPE_USER ? " minutes ago" : "m"}`
              : `${diffHour}${type === TYPE_USER ? " hours ago" : "h"}`
            : `${diffDay}${type === TYPE_USER ? " days ago" : "d"}`
          : `${diffWeek}${type === TYPE_USER ? " weeks ago" : "w"}`
        : `${diffMonth}${type === TYPE_USER ? " months ago" : "M"}`
      : `${diffYear}${type === TYPE_USER ? " years ago" : "Y"}`;
  return result;
};
