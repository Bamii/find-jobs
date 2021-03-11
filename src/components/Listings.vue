<template>
  <div class="space-y-5">
    <div v-for="(item, index) in itemList" :key="item" class="">
      <ListingCard
        :selectJob="() => selectJob(index)"
        :inverse="index === selected_job"
        :item="item"
      />
    </div>
  </div>
</template>

<script>
  import ListingCard from './ListingCard.vue'

  export default {
    components: { ListingCard },
    name: "Listings",
    props: ['item-list', 'selected_job', "selectJob"]
  }
</script>
