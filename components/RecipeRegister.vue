<script setup lang="ts">
import PageWrapper from "@/components/PageWrapper.vue"
import CardYouTube from "@/components/CardYouTube.vue"
import { SearchResult } from "@/models/youtube/searchResult";


const state = reactive<{
  searchWord: string
}>({
  searchWord: ""
})

const emits = defineEmits(["close"])

const convertToLocalNum = (num: string) => {
  const int = parseInt(num, 10)
  if (int >= 10000) {
    return Math.floor(int / 10000) + "万"
  } else {
    return int
  }

}


const searchResults = ref();

const searchVideo = async () => {
  if (state.searchWord.startsWith("https://")) {
    //リンクで検索された場合
    const word = state.searchWord
    let videoId: string = ""
    if (word.includes("?v=")) {
      //"https://www.youtube.com/watch?v=GPwVkPiPyUM"のようなURLを想定
      const idx = word.indexOf("=")
      videoId = word.slice(idx + 1)
    } else if (word.includes("youtu.be")) {
      //"https://youtu.be/GPwVkPiPyUM"のようなURL（共有用URL）を想定
      const idx = word.indexOf("be/")
      videoId = word.slice(idx + 3)
    }

    const { data: video } = await useFetch(`/api/youtube?id=${videoId}`)
    searchResults.value = [video.value]


  } else {
    //単語で検索された場合
    const { data: videos } = await useFetch(`/api/youtube/search?word=${state.searchWord}`)
    searchResults.value = videos.value
  }
}

//iframe動画の幅を変更する。
// TODO:画面サイズによってiframeの幅を変えたい
const changeVideoWidth = (str: string) => {
  return str.replace("480", "360").replace("270", "220")
}

</script>


<template>
  <div class="w-screen h-screen z-10 absolute top-0 bg-stone-400">
    <PageWrapper>
      <template #title>レシピ登録</template>
      <template #contents>
        <input v-model="state.searchWord" type="text" placeholder="リンク/ 検索ワード"
          class="input input-bordered w-full max-w-xs" />

        <div class="btn" @click="searchVideo">取得</div>
        <CardYouTube v-for="item in searchResults">
          <template #thumbnail>
            <div class="w-full" v-html="changeVideoWidth(item.player)"></div>
            <!-- <img :src="item.videoThumbnail.url" class="p-2 w-full"> -->
          </template>
          <template #channelThumbnail><img :src="item.channelThumbnail.url" class="w-12 rounded-full"></template>
          <template #videoTitle>{{ item.title }}</template>
          <template #channelTitle>{{ item.channelTitle }}</template>
          <template #viewCount>{{ convertToLocalNum(item.viewCount) }}回視聴</template>
          <template #contents>
            <!-- <div class="w-full" v-html="item.player"></div> -->
          </template>
          <template #actions>
            <div class="btn">Myレシピに追加</div>
          </template>

        </CardYouTube>
      </template>
      <template #actions>
        <div class="btn btn-ghost absolute top-2 right-2 text-3xl" @click="$emit('close')">x</div>

      </template>
    </PageWrapper>
  </div>

</template>