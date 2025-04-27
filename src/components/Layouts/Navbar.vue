<script setup>
import Logo from './Logo.vue'
import NavigationLink from './NavigationLink.vue'
import UserInfo from './UserInfo.vue'
</script>

<template>
  <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-800">
    <div class="container flex flex-wrap items-center justify-between mx-auto my-2">
      <Logo />
      <UserInfo />
      <NavigationLink />
    </div>
  </nav>
</template>

<style></style>
