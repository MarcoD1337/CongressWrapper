const config = require("./config.json")
const apiKey = config.apiKey
const baseUrl = "https://api.propublica.org/congress/v1"
import fetch from "node-fetch"

const getStateSenators = state => {
    return fetch(`${baseUrl}/members/senate/${state}/current.json`, {headers:{"X-API-Key":apiKey}})
        .then(res => res.json())
}

const getStateReps = state => {
    return fetch(`${baseUrl}/members/house/${state}/current.json`, {headers:{"X-API-Key":apiKey}})
        .then(res => res.json())
}

const getCongressMember = id => {
    return fetch(`${baseUrl}/members/${id}.json`, {headers:{"X-API-Key":apiKey}})
        .then(res => res.json())
}

const getCongressMembers = chamber => {
    return fetch(`${baseUrl}/116/${chamber}/members.json`, {headers:{"X-API-Key":apiKey}})
        .then(res => res.json())
}

export default { getStateSenators, getStateReps, getCongressMember, getCongressMembers }