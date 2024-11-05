<script setup lang="ts">
import SelectComponent from './SelectComponent.vue'
import { Avatar, AvatarImage } from '../ui/avatar'
import { Menubar, MenubarMenu, MenubarTrigger } from '@/components/ui/menubar'
import { Input } from '@/components/ui/input'
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const items = ref<MenuItem[]>([
  {
    label: 'Overview',
    to: '/',
  },
  {
    label: 'Customers',
    to: '/customers',
  },
  {
    label: 'Products',
    to: '/products',
  },
  {
    label: 'Settings',
    to: '/settings',
  },
])

interface MenuItem {
  label: string
  to: string
}
</script>
<template>
  <div class="dark:bg-slate-950">
    <div class="container">
      <Menubar class="Menubar dark:text-white">
        <MenubarMenu>
          <div class="select">
            <MenubarTrigger class="w-full px-0">
              <SelectComponent class="w-full" />
            </MenubarTrigger>
          </div>
          <div class="flex options">
            <MenubarTrigger v-for="item in items" :key="item.label">
              <RouterLink :to="item.to" active-class="font-bold">{{
                item.label
              }}</RouterLink>
            </MenubarTrigger>
          </div>
          <div class="right-side flex">
            <Input
              type="email"
              placeholder="Email"
              class="focus-visible:ring-1 rounded"
            />
            <Avatar>
              <AvatarImage src="https://www.shadcn-vue.com/avatars/01.png" />
            </Avatar>
          </div>
        </MenubarMenu>
      </Menubar>
    </div>
  </div>
</template>
<style scoped>
.data-\[state\=open\]\:bg-slate-100[data-state='open'] {
  background: none;
}
.Menubar {
  display: flex;
  justify-content: space-between;
  padding: 30px 10px 30px 10px;
  border-top-left-radius: 10px !important;
  border-top-right-radius: 10px !important;
}
.rounded-md {
  border-radius: 0;
}
.select {
  width: 20%;
}
.right-side > input {
  margin-right: 10px;
}
.right-side {
  width: 35%;
}
.options {
  flex-basis: 42%;
}
</style>
