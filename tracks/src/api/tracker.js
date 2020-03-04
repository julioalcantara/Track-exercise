import axios from 'axios';

export default axios.create({
    //start ngrok and update the URL every 8 hours
    baseURL: 'http://57a4d216.ngrok.io'
});