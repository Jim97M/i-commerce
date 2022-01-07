import axios from 'axios'

const BASE_URL = "http://localhost:5000/api/v1/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYTEyMGM2OWMzZWRhNzFmNDQzN2Q0NCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MTU1MDQ0OCwiZXhwIjoxNjQxNjM2ODQ4fQ.nk7ICsDpJE8pRtKvzKfAp20Zt0FOFDF062BLEN0UO2k";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
    headers: {token: `Bearer ${TOKEN}`},
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {token: `Bearer ${TOKEN}`},
})
