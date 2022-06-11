import axios from "axios";

export const axiosSteam = axios.create({
    baseURL: "https://store.steampowered.com/api"
})
