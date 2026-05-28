<script>
  import { reveal } from '$lib/reveal';

  const links = [
    ['Email', 'mailto:ahmedjareer@hotmail.com', 'ahmedjareer@hotmail.com'],
    ['GitHub', 'https://github.com/ahmed-jarir', '@ahmed-jarir'],
    ['LinkedIn', 'https://www.linkedin.com/in/ahmed-jareer', 'ahmed-jareer']
  ];
</script>

<div use:reveal class="relative mx-auto max-w-6xl overflow-hidden border border-cyan-200/80 bg-white p-6 text-slate-950 shadow-[0_30px_90px_rgba(34,211,238,0.18)] dark:border-white/10 dark:bg-slate-950 dark:text-white dark:shadow-[0_30px_90px_rgba(15,23,42,0.28)]">
  <div class="absolute inset-0 bg-gradient-to-br from-blue-100 via-cyan-100/80 to-teal-100 dark:from-violet-600/35 dark:via-purple-500/20 dark:to-pink-500/30"></div>
  <div class="absolute inset-0 bg-[linear-gradient(to_right,#0891b21a_1px,transparent_1px),linear-gradient(to_bottom,#0891b21a_1px,transparent_1px)] bg-[size:3rem_3rem] dark:bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)]"></div>

  <div class="relative grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
    <div>
      <div class="inline-block pb-5">
        <h2 class="relative text-5xl font-black leading-none text-slate-950 dark:text-white sm:text-6xl">
          Contact
        </h2>
        <div class="mt-5 h-1 w-24 bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 dark:from-violet-600 dark:via-purple-500 dark:to-pink-500"></div>
      </div>
    </div>

    <div class="grid gap-3 sm:grid-cols-3">
      {#each links as link}
        <a
          class="border border-cyan-200/80 bg-white/55 p-4 text-slate-700 backdrop-blur hover:bg-white/80 hover:text-slate-950 dark:border-white/15 dark:bg-white/5 dark:text-white/75 dark:hover:bg-white/10 dark:hover:text-white"
          href={link[1]}
          target={link[1].startsWith('http') ? '_blank' : undefined}
          rel="noreferrer"
        >
          <span class="block text-xs uppercase tracking-[0.2em] text-cyan-700/70 dark:text-white/45">{link[0]}</span>
          <strong class="mt-2 block break-words text-sm font-semibold">{link[2]}</strong>
        </a>
      {/each}
    </div>
  </div>
</div>
