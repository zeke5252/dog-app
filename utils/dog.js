import axios from 'axios'
import { BASE_URL } from '../constants/url.js'

export async function getDogData(id) {
  let result = {}
  result = await axios.get(
    `${BASE_URL}?UnitId=QcbUEzN6E6DL&$filter=
        animal_id+like+${id}
      `
  )
  return result.data[0]
}
