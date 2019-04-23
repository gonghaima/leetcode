export default s => {
  s = s.replace(/\W+/g, "").toLowerCase();
  return (
    s ===
    s
      .split("")
      .reverse()
      .join("")
  );
};
