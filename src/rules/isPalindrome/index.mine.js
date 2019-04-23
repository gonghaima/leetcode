export default s => {
  const us = s.replace(/\s/g, "");
  if (us === "") return true;
  if (us.length === 1) return true;
  const da = us.match(/[a-zA-Z0-9]/g);
  if (!da) return true;
  if (da.length === 1 || da.length === 0) return true;
  const v1 = da.join("").toLowerCase();
  const v2 = da
    .reverse()
    .join("")
    .toLowerCase();
  return v1 === v2;
};
