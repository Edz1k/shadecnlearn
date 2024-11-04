<script setup lang="ts">
import SelectComponent from './SelectComponent.vue'
import { Avatar, AvatarImage } from '../ui/avatar'
import { Menubar, MenubarMenu, MenubarTrigger } from '@/components/ui/menubar'
import { Input } from '@/components/ui/input'
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
        <MenubarTrigger> Overview </MenubarTrigger>
        <MenubarTrigger> Customers </MenubarTrigger>
        <MenubarTrigger> Products </MenubarTrigger>
        <MenubarTrigger> Settings </MenubarTrigger>
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
