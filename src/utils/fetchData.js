export const exerciseOptions = {
  method: "GET",
  // mode: "no-cors",
  headers: {
    // "Access-Control-Allow-Origin": "*",
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const youtubeOptions = {
  method: "GET",
  // mode: "cors",
  headers: {
    // 'X-RapidAPI-Key': '4fa0695531msh9cc2408b03d2dcap1c34eajsneaa8b7756166',
    // "Access-Control-Allow-Origin": "*",
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const responses = await fetch(url, options);
  const data = await responses.json();

  return data;
};
