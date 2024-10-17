import dayjs from "dayjs";

export function formatDate(isoString: Date) {
  return dayjs(isoString).format("DD/MM/YYYY h:mm:ss A");
}
