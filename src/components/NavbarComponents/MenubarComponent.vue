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
    to: '/'
  },
  {
    label: 'Customers',
    to: '/customers'
  },
  {
    label: 'Products',
    to: '/products'
  },
  {
    label: 'Settings',
    to: '/settings'
  }
])

interface MenuItem {
  label: string
  to: string
}
</script>
<template>
  <Menubar class="Menubar">
    <MenubarMenu>
      <div class="select">
        <MenubarTrigger class="w-full">
          <SelectComponent class="w-full"/>
        </MenubarTrigger>
      </div>
      <div class="flex options">
        <MenubarTrigger
          v-for="item in items"
          :key="item.label"
        >
          <RouterLink :to="item.to" active-class="font-bold">{{ item.label }}</RouterLink>
        </MenubarTrigger>
      </div>
      <div class="right-side flex">
        <Input type="email" placeholder="Email" />
        <Avatar>
          <AvatarImage src="https://www.shadcn-vue.com/avatars/01.png" />
        </Avatar>
      </div>
    </MenubarMenu>
  </Menubar>
</template>
<style scoped>
.data-\[state\=open\]\:bg-slate-100[data-state='open'] {
  background: none;
}
.Menubar {
  display: flex;
  justify-content: space-between;
  padding: 30px;
}

.select {
  width: 20%;
}
.right-side > input{
  margin-right: 10px;
}
.right-side {
  width: 35%;
}
.options {
  flex-basis: 42%;

}
</style>
