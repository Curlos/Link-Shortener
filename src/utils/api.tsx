const ACCESS_TOKEN = process.env.REACT_APP_BITLY_ACCESS_TOKEN
const API_URL = 'https://api-ssl.bitly.com/v4/shorten'

export const postToAPI = async (longUrl: string) => {
    const bodyData = {
      "domain": "bit.ly",
      "long_url": longUrl
    }

    const response = await fetch(API_URL, {
        method: 'POST',
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${ACCESS_TOKEN}`
        },
        body: JSON.stringify(bodyData)
    });

    const data = await response.json()
    console.log(data)
    return data
}