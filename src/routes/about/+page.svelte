<script>
  import { reveal } from '$lib/reveal';
</script>

<div class="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
  <div use:reveal>
    <div class="inline-block pb-5">
      <h1 class="relative text-5xl font-black leading-none text-slate-950 dark:text-white sm:text-7xl">
        About
      </h1>
      <div class="mt-5 h-1 w-24 bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 dark:from-violet-600 dark:via-purple-500 dark:to-pink-500"></div>
    </div>
  </div>

  <div use:reveal={{ delay: 120 }} class="relative border border-slate-200/80 bg-white/75 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.12)] backdrop-blur dark:border-white/10 dark:bg-white/[0.05]">
    <div class="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 dark:from-violet-600 dark:via-purple-500 dark:to-pink-500"></div>

    <p class="text-xl leading-8 text-slate-700 dark:text-slate-200">
      I build software, systems, and infrastructure with a focus on reliability,
      reproducibility, and clean code. My work ranges from full-stack and mobile
      development to Linux systems, infrastructure, and networking.
    </p>

    <div class="mt-8 grid gap-3 sm:grid-cols-2">
      {#each ["Full-Stack Development", "Mobile Development", 'Linux', 'Infrastructure'] as item}
        <span class="border border-cyan-200/80 bg-cyan-50 px-4 py-3 text-sm font-bold text-cyan-950 shadow-lg shadow-cyan-500/10 dark:border-white/10 dark:bg-white/[0.08] dark:text-violet-100 dark:shadow-violet-500/10">
          {item}
        </span>
      {/each}
    </div>
  </div>
</div>
