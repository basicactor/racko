const config = useRuntimeConfig();
const apiKey = config.GAPI_KEY;

export const urlGenerator = (
  type: "video" | "channel" | "search",
  id?: string,
  additionalParams?: object
) => {
  let url: URL;
  let params: object;

  if (type === "video") {
    url = new URL("https://www.googleapis.com/youtube/v3/videos");
    params = {
      part: "snippet,contentDetails,statistics,player",
      id: id,
    };
  } else if (type === "channel") {
    url = new URL("https://www.googleapis.com/youtube/v3/channels");
    params = {
      part: "snippet",
      id: id,
    };
  } else {
    //search
    url = new URL("https://www.googleapis.com/youtube/v3/search");
    params = {
      part: "id, snippet",
      ...additionalParams,
    };
  }

  //keyは必ず指定するので、ここでまとめて定義する
  params = { ...params, key: apiKey };

  url = appendParams(url, params);
  return url.toString();
};

//paramをurlに追加する
const appendParams = (url: URL, params: object) => {
  Object.entries(params).forEach(([key, value]) => {
    url.searchParams.append(key, value as string);
  });

  return url;
};
