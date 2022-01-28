import dayjs from "dayjs";
export const substract = (from) => {
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
                ? `${diffSecond}s`
                : `${diffMinute}m`
              : `${diffHour}h`
            : `${diffDay}d`
          : `${diffWeek}w`
        : `${diffMonth}m`
      : `${diffYear}y`;
  return result;
};
