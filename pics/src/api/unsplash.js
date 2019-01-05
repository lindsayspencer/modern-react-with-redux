import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
          "Client-ID 8807b453b0e307c764ee01cdb13eb198415a0a37e55824f77b1be424bdacd174"
      }
});


