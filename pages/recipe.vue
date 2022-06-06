<script setup lang="ts">
import Card from "@/components/Card.vue"
import PageWrapper from "@/components/PageWrapper.vue"
import RecipeRegister from "@/components/RecipeRegister.vue"

const isOpenRegisModal = ref(false)

const { data: recipes } = await useFetch("/api/recipes")
console.log("recipes")

interface Recipe {
  id: string,
  title: string,
  url: string,
  gredients: Array<string>,
  body: string
  type: "main" | "sub"
}



</script>

<template>
  <PageWrapper>
    <template #title>レシピ</template>
    <template #contents>
      <template v-for=" recipe in recipes">
        <Card side class="p-4 mb-4">
          <template #title>
            {{ recipe.title }}
          </template>
          <template #body>
            {{ recipe.id }}
            {{ recipe.url }}
            {{ recipe.gredients }}
            {{ recipe.body }}
            {{ recipe.type }}
          </template>
        </Card>
      </template>
    </template>
    <template #actions>
      <button class="btn btn-circle absolute top-2 right-2" @click="() => isOpenRegisModal = true">＋</button>
    </template>
  </PageWrapper>

  <RecipeRegister v-show="isOpenRegisModal" @close="() => isOpenRegisModal = false" />
</template>