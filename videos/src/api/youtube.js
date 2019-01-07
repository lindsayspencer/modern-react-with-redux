// don't forget to install axios with npm install --save axios
import axios from 'axios';

const KEY = "AIzaSyDN9l60Gp1LKZpegUzhg0Ew2_eyCNwZUp0";



export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});

// our query will get passed in when we call it
// able to use youtube.get