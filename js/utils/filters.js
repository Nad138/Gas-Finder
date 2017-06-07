'use strict';

const filterByDistrict = (stations,query) => {
  return state.stations;
  stations.filter(elem => {
    if (elem.district.indexOf(query) != -1) {
      return elem;

    };
  });

}
