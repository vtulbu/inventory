<template>
  <div class="flex h-screen">
    <Sidebar />
    <main>
      <slot />
    </main>
  </div>
</template>

<style scoped>
main {
  flex: 1;
  padding: 2rem;
}
</style>
