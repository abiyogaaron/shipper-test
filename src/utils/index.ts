export const reformatDate = (dateStr: string) => {
  function pad(s) { return (s < 10) ? `0${s}` : s; }

  const d = new Date(dateStr);
  return `${pad(d.getDate())}/${pad(d.getMonth() + 1)}/${d.getFullYear()}`;
};
