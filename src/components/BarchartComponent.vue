<script setup lang="ts">
import { BarChart } from '@/components/ui/chart-bar'

const data = [
  { name: 'Jan', total: 100 },
  { name: 'Feb', total: 200 },
  { name: 'Mar', total: 300 },
  { name: 'Apr', total: 400 },
  { name: 'May', total: 500 },
  { name: 'Jun', total: 600 },
  { name: 'Jul', total: 700 },
  { name: 'Aug', total: 800 },
  { name: 'Sep', total: 900 },
  { name: 'Oct', total: 1000 },
  { name: 'Nov', total: 1100 },
  { name: 'Dec', total: 1000 },
]
</script>

<template>
  <div class="rounded-xl border shadow border-slate-800 w-1/2 mt-5 p-5">
    <div class="flex">
      <h3 class="text-2xl">Overview</h3>
    </div>
    <BarChart
      class="dark:fill-white"
      :data="data"
      index="name"
      :categories="['total']"
      :rounded-corners="4"
      :show-legend="true"
      :show-tooltip="true"
    />
  </div>
</template>
