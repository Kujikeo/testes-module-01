const keyValueToString = ([key, value]) => {
  if (typeof value === "object" && !Array.isArray(value)) {
    throw new Error("Please check the params");
  }
  return `${key}=${value}`;
};

module.exports.queryString = obj =>
  Object.entries(obj).map(keyValueToString).join("&");

module.exports.parse = qs =>
  Object.fromEntries(qs.split("&").map(item => item.split("=")));
