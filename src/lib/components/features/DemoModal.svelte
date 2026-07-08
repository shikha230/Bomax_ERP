<script lang="ts">
  import HomeFormModal from '$lib/components/sections/HomeFormModal.svelte';

  // Props in Svelte 5
  let { isOpen = false, onClose = () => {} } = $props();
</script>

<HomeFormModal {isOpen} {onClose} mode="demo" />
