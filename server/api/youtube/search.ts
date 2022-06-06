import type { IncomingMessage, ServerResponse } from "http";
import { useQuery } from "h3";
import { SearchResult } from "@/models/youtube/searchResult";
import { urlGenerator } from "@/server/request";

////https://v3.nuxtjs.org/guide/features/server-routes
//// reqにIncomingMessage型をはめると、useQueryが使えなくなるので、eventHandlerで対応してる。
// export default async (req:IncomingMessage, res: ServerResponse) => {
//   const query = useQuery(req);
//   const url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&type=video&part=id,snippet&q=${query.q}&order=viewCount`;

//   const result: searchResponse.RootObject = await $fetch(url);
//   return result;
// };

// ↑の関数で書きたいが、reqにIncomingMessage型をはめると、useQueryが使えなくなるので、eventHandlerで対応してる。
export default eventHandler(async (event) => {
  const searchWord = useQuery(event).word;
  const searchParams = {
    order: "viewCount",
    q: searchWord,
  };
  const searchUrl = urlGenerator("search", undefined, searchParams);

  const result: searchResponse.RootObject = await $fetch(searchUrl);
  const finalResults: Array<SearchResult> = await Promise.all(
    result.items.map(async (item) => {
      const videoId = item.id.videoId;

      const videoUrl = urlGenerator("video", videoId);
      const channelUrl = urlGenerator("channel", item.snippet.channelId);

      const videoResPonse: getVideoResponse.RootObject = await $fetch(videoUrl);
      const channelResPonse: getChannelResponse.RootObject = await $fetch(
        channelUrl
      );

      const combinedResult: SearchResult = {
        videoId,
        title: item.snippet.title,
        description: item.snippet.description,
        videoThumbnail: item.snippet.thumbnails.medium,
        channelTitle: item.snippet.channelTitle,
        channelThumbnail: channelResPonse.items[0].snippet.thumbnails.default,
        viewCount: videoResPonse.items[0].statistics.viewCount,
        player: videoResPonse.items[0].player.embedHtml,
      };
      console.log(combinedResult);
      return combinedResult;
    })
  );
  // console.log(finalResults);
  return finalResults;
});
