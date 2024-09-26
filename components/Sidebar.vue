<template>
  <div :class="['sidebar', { 'sidebar--collapsed': !open }]">
    <div class="flex justify-between mb-16">
      <div class="flex gap-3">
        <button @click="router.back()">
          <LucideChevronLeft :size="20" />
        </button>
        <button @click="router.forward()">
          <LucideChevronRight :size="20" />
        </button>
      </div>
      <button @click="toggle">
        <LucidePanelLeft :size="20" />
      </button>
    </div>
    <button class="mb-16" @click="router.push('/')">
      <LucideHouse />
    </button>

    <div class="flex justify-between">
      <button @click="router.push('/settings')">
        <LucideSettings />
      </button>
      <button>
        <LucideBellRing />
      </button>
    </div>
  </div>
</template>

<script setup>
const router = useRouter();
const { open, toggle } = useSidebarState();
</script>

<style scoped>
/* <ul>
      <li v-for="(item, index) in menuItems" :key="index">
        <a href="#">
          <span v-if="!isCollapsed">{{ item }}</span>
          <i v-else class="icon">☰</i>
          <!-- Placeholder icon, replace as needed -->
        </a>
      </li>
    </ul> */

.sidebar {
  width: 350px;
  border-right: 1px solid #ccc;
  transition: all 0.3s ease;
  padding: 3rem 2rem;
}

.sidebar--collapsed {
  width: 120px;
  padding: 3rem 1rem;
}

/* .sidebar-header {

} */
</style>
