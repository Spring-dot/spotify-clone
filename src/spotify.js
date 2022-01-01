// it containes the login - authentication using Spotify API
// reading material - documentation/web-playback-sdk/quick-start/#

export const authEndpoint = 
"https://accounts.spotify.com/authorize";
//this is for redirecting to authorising page

const clientId = "2118253290f24cc296bcfce601eda37c";

const redirectUri = "http://localhost:3000/";
//this again redirects to home page


//clientid as per the spotify-for-developer login

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played", 
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

//to read/write accessToken
export const getTokenFromUrl = () => {
    return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item) => {
    //this reduce is an useful function
    let parts = item.split('=');
    initial[parts[0]] =
    decodeURIComponent(parts[1]);

    return initial;
    }, {});
    //this {} empty object is to tell how initial starts
}

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
)}&response_type=token&show_dialog=true`;
//while writing this query - take care of spacing
//https://accounts.spotify.com/authorize?client_id=2118253290f24cc296bcfce601eda37c&redirect_uri=http://localhost:3000/&scope=user-read-currently-playing%20user-read-recently-played%20user-read-playback-state%20user-top-read%20user-modify-playback-state&response_type=token&show_dialog=true



