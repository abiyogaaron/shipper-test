export const reformatDate = (dateStr: string) => {
  if (!dateStr) {
    return dateStr;
  }
  function pad(s) { return (s < 10) ? `0${s}` : s; }

  const d = new Date(dateStr);
  return `${pad(d.getDate())}/${pad(d.getMonth() + 1)}/${d.getFullYear()}`;
};

// reusable filterdata if being used in another component with the same purpose
export const filterData = <T>(
  value: string, // the search value
  data: T, // the generic data that want to be filtered with
  originData: T, // the original data (to replace the generic data) if search value empty
  props: string[], // nested key fill in array
) => {
  if (!Array.isArray(data) || !Array.isArray(originData)) {
    return [];
  }

  let filterData;
  const regexPattern = `${value}`;

  if (value) {
    filterData = data.filter((item) => {
      const nestedVal = props.reduce((a, prop) => a[prop], item);
      return nestedVal.match(new RegExp(regexPattern, 'i'));
    });
    return filterData;
  }
  return originData;
};
