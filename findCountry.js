export const extractAddressComponents = function(obj) {
  return obj.results[0].address_components;
};

export const findCountry = function(info) {
  const addressInfo = extractAddressComponents(info);
  let countries = addressInfo.filter(obj => {
    let labels = obj.types;
    return labels.includes("country");
  });
  return countries[0].long_name;
};
