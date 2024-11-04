<script setup lang="ts">
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { ref } from 'vue'

const menuItems = [
  { value: 'Alice', label: 'Alice' },
  { value: 'John', label: 'John' },
  { value: 'Kristi', label: 'Kristi' }
]

const selected = ref<string>(menuItems[0].value)
</script>

<template>
  <div>
    <Select v-model="selected">
      <SelectTrigger class="TriggerSelect">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem
            v-for="item in menuItems"
            :key="item.value"
            :value="item.value"
          >
            {{ item.label }}
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  </div>
</template>
<style scoped>
.TriggerSelect:focus {
  --tw-ring-opacity: 0;
  --tw-ring-color: none;
}
</style>
