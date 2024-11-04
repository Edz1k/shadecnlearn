<script setup lang="ts">
import SelectComponent from './SelectComponent.vue';
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
} from '@/components/ui/menubar'
</script>
<template>
   <Menubar class="Menubar">
    <MenubarMenu>
      <MenubarTrigger>
        <SelectComponent />
      </MenubarTrigger>
      <MenubarTrigger>
        Overview
      </MenubarTrigger>
      <MenubarTrigger>
        Customers
      </MenubarTrigger>
      <MenubarTrigger>
        Products
      </MenubarTrigger>
      <MenubarTrigger>
        Settings
      </MenubarTrigger>
    </MenubarMenu>
  </Menubar>
</template>
<style scoped>
.data-\[state\=open\]\:bg-slate-100[data-state="open"]{
  background: none;
}
</style>
