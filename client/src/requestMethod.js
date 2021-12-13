import axios from 'axios'

const BASE_URL = "http://localhost:5000/api/v1/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYTEyMGM2OWMzZWRhNzFmNDQzN2Q0NCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzOTQxNjQ2MiwiZXhwIjoxNjM5NTAyODYyfQ.XGKvXBhw1kYMAbteRPj7xuIVHuI_1YXEYRFd_AEHyWA";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {token: `Bearer ${TOKEN}`},
})