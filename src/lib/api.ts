import { Result } from "./../interface/result";
// const MOCK_API_URL = "https://5d98da14-1124-4272-b486-9f21c5bf1766.mock.pstmn.io/search";

const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
const API_URL = "https://youtube.googleapis.com/youtube/v3/search";

export const fetchAPI = async (
    query: string,
    nextPageToken?: string,
    part = "snippet",
    type = "video",
    limit = 50 // I have to increate this value from 4 to 50 to avoid Youtube Data API 100 quota limit
): Promise<Result | null> => {
    const params_url =
        `${API_URL}?part=${part}&q=${query}&key=${API_KEY}&maxResults=${limit}&type=${type}` +
        (nextPageToken ? `&pageToken=${nextPageToken}` : "");

    try {
        const response = await fetch(params_url);
        if (response.status === 200) {
            const data = await response.json();
            return data;
        }
    } catch (err) {
        if (err instanceof Error) throw err;
    }
    return null;
};
