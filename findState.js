export const extractAddressComponents = function(obj) {
    return obj.results[0].address_components;
  };
  
  export const findState = function(info) {
    const addressInfo = extractAddressComponents(info);
    let states = addressInfo.filter(obj => {
      let labels = obj.types;
      return labels.includes("administrative_area_level_1");
    });
    return states[0].long_name;
  };