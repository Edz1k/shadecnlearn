<script setup lang="ts">
import Button from '@/components/ui/button/Button.vue'
import { Calendar } from '@/components/ui/calendar'
import BarchartComponent from '@/components/BarchartComponent.vue'
import SalesComponent from '@/components/SalesComponent.vue'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import {
  DateFormatter,
  type DateValue,
  getLocalTimeZone,
} from '@internationalized/date'
import { Calendar as CalendarIcon } from 'lucide-vue-next'
import { ref } from 'vue'

const df = new DateFormatter('ru')
const value = ref<DateValue>()
</script>

<template>
  <div class="dark:bg-slate-950">
    <div class="container">
      <div
        class="p-5 flex flex-wrap border-b border-l border-r border-slate-800 dark:bg-slate-950 dark:text-white"
      >
        <div class="flex items-center w-full justify-between">
          <h2 class="text-3xl font-bold tracking-tight">Dashboard</h2>
          <div class="flex">
            <Popover>
              <PopoverTrigger>
                <Button variant="outline" class="mr-2">
                  <CalendarIcon class="mr-2 h-4 w-4" />
                  <span>{{
                    value
                      ? df.format(value.toDate(getLocalTimeZone()))
                      : 'Pick a date'
                  }}</span>
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <Calendar v-model="value" initial-focus />
              </PopoverContent>
            </Popover>

            <Button>Download</Button>
          </div>
        </div>
        <div class="mt-5 flex w-full justify-between">
          <div class="dashboard-content">
            <div class="card border rounded-xl border-slate-800">
              <div class="card-content">
                <h3 class="text-xl font-bold flex justify-between">
                  Total Sales <span>$</span>
                </h3>
                <p class="text-lg font-light">$ 1,200</p>
                <p class="text-sm">20.1% from last month</p>
              </div>
            </div>
          </div>
          <div class="dashboard-content">
            <div class="card border rounded-xl border-slate-800">
              <div class="card-content">
                <h3 class="text-xl font-bold flex justify-between">
                  Total Sales <span>$</span>
                </h3>
                <p class="text-lg font-light">$ 1,200</p>
                <p class="text-sm">20.1% from last month</p>
              </div>
            </div>
          </div>
          <div class="dashboard-content">
            <div class="card border rounded-xl border-slate-800">
              <div class="card-content">
                <h3 class="text-xl font-bold flex justify-between">
                  Total Sales <span>$</span>
                </h3>
                <p class="text-lg font-light">$ 1,200</p>
                <p class="text-sm">20.1% from last month</p>
              </div>
            </div>
          </div>
          <div class="dashboard-content">
            <div class="card border rounded-xl border-slate-800">
              <div class="card-content">
                <h3 class="text-xl font-bold flex justify-between">
                  Total Sales <span>$</span>
                </h3>
                <p class="text-lg font-light">$ 1,200</p>
                <p class="text-sm">20.1% from last month</p>
              </div>
            </div>
          </div>
        </div>
        <div class="flex w-full justify-between">
          <BarchartComponent />
          <SalesComponent class="sales mt-5" />
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.card {
  padding: 20px;
}
.dashboard-content {
  width: 23%;
}
.sales {
  flex-basis: 48.5%;
}
</style>
