import { fetchRegions } from './services/api'

// export function chooseRegions(regions) {
//   return {
//     type: 'chooseRegions',
//     payload: {
//       regions,
//     }
//   }
// }

export function setRegions(regions) {
  return {
    type: 'setRegions',
    payload: {
      regions,
    }
  }
}

export function loadRegions() {
  return async (dispatch) => {
    const regions = await fetchRegions();
    dispatch(setRegions(regions));
  }  
}

