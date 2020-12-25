import axios from 'axios';

const baseEndpoint = 'http://api.covid19api.com';

export const fetchCountry = async () => {
    const {data} = await axios.get(`${baseEndpoint}/countries`)
    return data;
}

export const fetchDailyData = async (country) => {
    const {data} =  await axios.get(`${baseEndpoint}/dayone/country/${country}`)
    return data;
}
