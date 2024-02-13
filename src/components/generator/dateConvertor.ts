export const convertDate = (date: Date) => {
  const presentDate = date.getDate();
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();
  return `${month} ${presentDate}, ${year}`;
};
