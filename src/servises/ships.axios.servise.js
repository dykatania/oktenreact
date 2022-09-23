import axios from "axios";

let axiosInstance = axios.create({
    baseURL: 'https://api.spacexdata.com/v3/launches/'
});

const getShipsAxios = {
    getAll: () => axiosInstance.get()
}

export {getShipsAxios};

