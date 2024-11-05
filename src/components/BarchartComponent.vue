<script setup lang="ts">
import { BarChart } from '@/components/ui/chart-bar'
const data = [
  { name: 'January', total: 100 },
  { name: 'February', total: 200 },
  { name: 'March', total: 300 },
  { name: 'April', total: 400 },
  { name: 'May', total: 500 },
  { name: 'June', total: 600 },
  { name: 'July', total: 700 },
  { name: 'August', total: 800 },
  { name: 'September', total: 900 },
  { name: 'October', total: 1000 },
  { name: 'November', total: 1100 },
  { name: 'December', total: 1200 },
]

</script>
<template>
  <div class="rounded-xl border border-slate-800 w-1/2 mt-5">
    <BarChart class="dark:fill-white" :data="data" index="name" :categories="['total',]" :rounded-corners="4" :show-legend="true" :show-tooltip="true" :y-formatter="(tick, i) => {
      return typeof tick === 'number'
        ? `$ ${new Intl.NumberFormat('us').format(tick).toString()}`
        : ''
    }"/>
  </div>
</template>
