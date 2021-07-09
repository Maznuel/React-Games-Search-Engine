import axios from 'axios'
import { gameDetailsURL, gameScreenURL } from '../api'



const loadDetail = (id) => async (dispatch) => {
    dispatch({
        type: 'LOADING_DETAIL',
    })

    const details = await axios.get(gameDetailsURL(id))
    const screenData = await axios.get(gameScreenURL(id))
    dispatch({
        type: 'GAME_DETAIL',
        payload: {
            game: details.data,
            screen: screenData.data

        }
    })
}

export default loadDetail