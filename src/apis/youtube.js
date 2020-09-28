import axios from 'axios'

const KEY = 'AIzaSyCAcMJzuypIMlQaN08wINFfK3RN1R1wTH0';

export default axios.create({
  baseUrl: "https://www.googleapis.com/youtube/v3",
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
})