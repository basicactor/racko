import type {IncomingMessage, ServerResponse} from "http"


export interface Recipe {
  id: string,
  title: string,
  url: string,
  gredients: Array<string>,
  body: string
  type: "main" | "sub"
}

const recipes: Array<Recipe> = [
  {
    id: "1",
    title: "野菜炒め",
    url: "https://google.com",
    gredients: ["キャベツ", "人参", "玉ねぎ"],
    body: "世界一簡単な野菜いためです。",
    type: "main"
  },
  {
    id: "2",
    title: "とんかつ",
    url: "https://facebook.com",
    gredients: ["牛肉", "醤油", "卵"],
    body: "とんかつは最高です。",
    type: "main"
  }
] 


//https://v3.nuxtjs.org/guide/features/server-routes
export default defineEventHandler((event) => {
  const query = useQuery(event)
  return recipes
})