const base_url = 'https://api.rawg.io/api/'
const key = '&key=e350e3b428954eea8590e6eab511d728'
const key2 = '?key=e350e3b428954eea8590e6eab511d728'

const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1
    if (month < 10) {
        return `0${month}`
    } else {
        return month
    }
}

const getCurrentDay = () => {
    const day = new Date().getDate()
    if (day < 10) {
        return `0${day}`
    } else {
        return day
    }
}

const currentYear = new Date().getFullYear()
const currentMonth = getCurrentMonth()
const currentDay = getCurrentDay()
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`

const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`
const upcoming_games = `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=10`
const new_games = `games?dates=${lastYear},${currentDate}&ordering=-added&page_size=10`

export const popularGamesURL = () => `${base_url}${popular_games}${key}`
export const upcomingGamesURL = () => `${base_url}${upcoming_games}${key}`
export const newGamesURL = () => `${base_url}${new_games}${key}`
//Game details
export const gameDetailsURL = (game_id) => `${base_url}games/${game_id}${key2}`
//Game screenshots
export const gameScreenURL = (game_id) => `${base_url}games/${game_id}/screenshots${key2}`
//Searched game
export const searchGameUrl = (game_name) => `${base_url}games?search=${game_name}&page_size=9${key}`
