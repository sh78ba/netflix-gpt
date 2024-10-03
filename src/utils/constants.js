export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer "+process.env.REACT_APP_TMDB_KEY,
  },
};

export const IMAGE_CDN_URL = "https://image.tmdb.org/t/p/original";

export const SUPPORTED_LANGUAGES = [
  { identifier: "english", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" },
];

export const OPENAI_KEY=process.env.REACT_APP_OPENAI_KEY

export const Firebase_apiKey=process.env.REACT_APP_apiKey

export const Firebase_authDomain=process.env.REACT_APP_authDomain

export const Firebase_projectId=process.env.REACT_APP_projectId

export const Firebase_storageBucket=process.env.REACT_APP_storageBucket
export const Firebase_messagingSenderId= process.env.REACT_APP_messagingSenderId
export const  Firebase_appId=process.env.REACT_APP_appId
export const  Firebase_measurementId=process.env.REACT_APP_measurementId 