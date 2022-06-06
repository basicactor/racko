declare module searchResponse {
  export interface RootObject {
    kind: string;
    etag: string;
    nextPageToken: string;
    regionCode: string;
    pageInfo: PageInfo;
    items: Item[];
  }

  export interface PageInfo {
    totalResults: number;
    resultsPerPage: number;
  }

  export interface Item {
    kind: string;
    etag: string;
    id: Id;
    snippet: Snippet;
  }

  export interface Snippet {
    publishedAt: Date;
    channelId: string;
    title: string;
    description: string;
    thumbnails: Thumbnails;
    channelTitle: string;
    liveBroadcastContent: string;
    publishTime: Date;
  }

  export interface Id {
    kind: string;
    videoId: string;
  }

  export interface Thumbnail {
    url: string;
    width: number;
    height: number;
  }

  export interface Thumbnails {
    default: Thumbnail;
    medium: Thumbnail;
    high: Thumbnail;
  }
}

declare module getVideoResponse {
  export interface RootObject {
    etag: string;
    items: Array<Item>;
    kind: string;
    pageInfo: object;
  }

  interface Item {
    contentDetails: Array<ContentDetail>;
    etag: string;
    id: string;
    kind: string;
    snippet: Sunippet;
    statistics: Statistics;
    player: Player;
  }

  interface ContentDetail {
    caption: boolean;
    contentRating: object;
    definition: string;
    dimension: string;
    duration: string;
    licensedContent: boolean;
    projection: string;
  }

  interface Sunippet {
    categoryId: string;
    channelId: string;
    channelTitle: strring;
    defaultAudioLanguage: string;
    description: string;
    liveBroadcastContent: string;
    localized: object;
    publishedAt: Date;
    thumbnails: Thumbnails;
    title: string;
  }

  interface Statistics {
    commentCount: number;
    favoriteCount: number;
    likeCount: number;
    viewCount: number;
  }

  interface Thumbnails {
    default: Thumbnail;
    high: Thumbnail;
    medium: Thumbnail;
    standard: Thumbnail;
    title: string;
  }

  interface Thumbnail {
    url: string;
    height: number;
    width: number;
  }

  interface Player {
    embedHtml: string;
  }
}

declare module getChannelResponse {
  export interface PageInfo {
    totalResults: number;
    resultsPerPage: number;
  }

  export interface Thumbnail {
    url: string;
    width: number;
    height: number;
  }

  export interface Thumbnails {
    default: Thumbnail;
    medium: Thumbnail;
    high: Thumbnail;
  }

  export interface Localized {
    title: string;
    description: string;
  }

  export interface Snippet {
    title: string;
    description: string;
    customUrl: string;
    publishedAt: Date;
    thumbnails: Thumbnails;
    localized: Localized;
    country: string;
  }

  export interface Item {
    kind: string;
    etag: string;
    id: string;
    snippet: Snippet;
  }

  export interface RootObject {
    kind: string;
    etag: string;
    pageInfo: PageInfo;
    items: Item[];
  }
}
