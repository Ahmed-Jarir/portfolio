<script lang="ts">
  import { page } from '$app/state';
  import favicon from '$lib/assets/favicon.svg';
  import Topbar from './Topbar.svelte';

  let { children } = $props();
  import "../app.css";
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
  <style>
    html {
      scroll-behavior: smooth;
    }
  </style>
</svelte:head>

<div class="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
  <Topbar/>
  {@render children()}
  <main class="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-cyan-50 text-slate-950 dark:from-slate-900 dark:via-slate-950 dark:to-[#080d19] dark:text-white">
    <div class="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:4rem_4rem] dark:bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)]"></div>
    <div class="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-slate-50 to-transparent dark:from-slate-900"></div>
  </main>
</div>
