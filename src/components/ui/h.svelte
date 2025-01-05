<script lang="ts">
  let { element = "h2", text, ...props } = $props();
</script>

<svelte:element this={element} class={props.class}>
  {text}
</svelte:element>