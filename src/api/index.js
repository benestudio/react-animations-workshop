const API_KEY = 'AIzaSyDfeEOPnlPNkGRdB8wkv8LD93htYmZKY5M';

export const searchVideos = async (queryString) => {
  const url = new URL('https://www.googleapis.com/youtube/v3/search');
  url.search = new URLSearchParams({
    part: 'snippet',
    q: queryString,
    maxResults: 24,
    key: API_KEY,
    type: 'video',
  });
  const resp = await fetch(url);
  const data = await resp.json();
  const videos = data.items.map(({ id, snippet }) => ({
    id: id.videoId,
    thumbnail: snippet.thumbnails.high.url,
    description: snippet.description,
    title: snippet.title,
  }));
  return videos;
}