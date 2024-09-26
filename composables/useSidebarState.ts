export const useSidebarState = () => {
  const open = ref(false);

  const toggle = () => {
    open.value = !open.value;
  };

  return { open, toggle };
};
