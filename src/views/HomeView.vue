<script setup lang="ts">
import Button from '@/components/ui/button/Button.vue'
import { Calendar } from '@/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
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
  <div class="container">
    <div class="p-5 flex border-b border-l border-r border-slate-200">
      <div class="flex items-center w-full justify-between">
        <h2 class="text-3xl font-bold tracking-tight">Dashboard</h2>
        <div class="flex">
            <Popover>
                <PopoverTrigger>
                    <Button variant="outline" class="mr-2">
                    <CalendarIcon class="mr-2 h-4 w-4" />
                    <span>{{ value ? df.format(value.toDate(getLocalTimeZone())) : "Pick a date" }}</span>
                </Button>
                </PopoverTrigger>
                <PopoverContent>
                    <Calendar  v-model="value" initial-focus/>
                </PopoverContent>
            </Popover>

          <Button>Download</Button>
        </div>
      </div>
    </div>
  </div>
</template>

