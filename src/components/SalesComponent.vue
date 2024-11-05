<script setup lang="ts">
import { Avatar, AvatarImage } from '@/components/ui/avatar'
const people = [
  {
    name: 'Olivia Martin',
    mail: 'olivia.martin@email.com',
    image: 'https://www.shadcn-vue.com/avatars/01.png',
    profit: 1000,
  },
  {
    name: 'Jackson Lee',
    mail: 'jackson.lee@email.com',
    image: 'https://www.shadcn-vue.com/avatars/02.png',
    profit: 2000,
  },
  {
    name: 'Jackson Lee',
    mail: 'jackson.lee@email.com',
    image: 'https://www.shadcn-vue.com/avatars/02.png',
    profit: 3000,
  },
  {
    name: 'Jackson Lee',
    mail: 'jackson.lee@email.com',
    image: 'https://www.shadcn-vue.com/avatars/02.png',
    profit: 5000,
  },
]
</script>
<template>
  <div>
    <div class="card border border-slate-800 rounded-xl p-6 w-full min-h-full">
      <div class="card-content">
        <div>
          <h3 class="text-xl font-bold">Recent Sales</h3>
          <span class="text-sm">You made 265 sales this month.</span>
        </div>
        <div>
          <div v-for="item in people" :key="item.name" class="flex mt-8">
            <Avatar>
              <AvatarImage :src="item.image" alt="@radix-vue" />
            </Avatar>
            <div class="ml-2">
              <h3>{{ item.name }}</h3>
              <p>{{ item.mail }}</p>
            </div>
            <div class="ml-auto">
              <h3 class="text-xl font-bold">${{ item.profit }}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
