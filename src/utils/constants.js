
const GOOGLE_API_KEY = 'AIzaSyA_f-vk8dRhPZFHDh3YKknH4be1txDIziI';

export const YOUTUBE_VEDIO_API = 
    'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key='+ 
    GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API = 'http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=';

// curl \
// //   'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=[YOUR_API_KEY]' \
// //   --header 'Authorization: Bearer [YOUR_ACCESS_TOKEN]' \
// //   --header 'Accept: application/json' \
// //   --compressed