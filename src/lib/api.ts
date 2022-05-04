import { Result } from "./../interface/result";
const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
const API_URL = "https://youtube.googleapis.com/youtube/v3/search";

export const fetchAPI = async (
    query: string,
    part = "snippet",
    type = "video",
    limit = 4,
    nextPageToken?: string
): Promise<Result | null> => {
    const params_url =
        `${API_URL}?part=${part}&q=${query}&key=${API_KEY}&maxResults=${limit}&type=${type}` +
        (nextPageToken ? `&pageToken=${nextPageToken}` : "");

    try {
        const response = await fetch(params_url);
        const data = await response.json();
        return data;
    } catch (err) {
        console.error(err);
    }

    return null;
};
