import { useQuery } from "h3";
import { SearchResult } from "@/models/youtube/searchResult";
import { urlGenerator } from "@/server/request";

//https://v3.nuxtjs.org/guide/features/server-routes
export default eventHandler(async (event) => {
  const videoId = useQuery(event).id;

  const url = urlGenerator("video", videoId as string);
  const response: getVideoResponse.RootObject = await $fetch(url);

  const { snippet } = response.items[0];

  //チャネル情報取得
  const channelParams = {
    part: "snippet",
    id: snippet.channelId,
  };
  const channelUrl = urlGenerator("channel", snippet.channelId);
  const channelResPonse: getChannelResponse.RootObject = await $fetch(
    channelUrl
  );

  const result: SearchResult = {
    videoId: videoId as string,
    title: snippet.title,
    description: snippet.description,
    videoThumbnail: snippet.thumbnails.medium,
    channelTitle: snippet.channelTitle,
    channelThumbnail: channelResPonse.items[0].snippet.thumbnails.default,
    viewCount: response.items[0].statistics.viewCount,
    player: response.items[0].player.embedHtml,
  };

  return result;
});
