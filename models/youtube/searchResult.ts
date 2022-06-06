export interface SearchResult {
  videoId: string;
  title: string;
  description: string;
  videoThumbnail: Thumbnail;
  channelThumbnail: Thumbnail;
  channelTitle: string;
  viewCount: number;
  player: string;
}

interface Thumbnail {
  url: string;
  width: number;
  height: number;
}

// class SearchResult{
//   videoId: string;
//   videoUrl: string;
//   title: string;
//   description: string;
//   videoThumbnail: Thumbnail;
//   channelThumbnail: Thumbnail;
//   channelTitle: string;
//   viewCount: number;

// }
