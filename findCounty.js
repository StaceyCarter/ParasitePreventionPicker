export const extractAddressComponents = function(obj) {
  return obj.results[0].address_components;
};

export const findCounty = function(info) {
  const addressInfo = extractAddressComponents(info);
  let counties = addressInfo.filter(obj => {
    let labels = obj.types;
    return labels.includes("administrative_area_level_2");
  });
    return counties[0].long_name;
};
