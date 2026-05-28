<script>
  import { reveal } from '$lib/reveal';

  const projects = [
    [
      'Unix shell',
      'C',
      'A Unix-style shell written in C that supports built-in and external commands, I/O redirection, background execution, and custom commands.',
      'https://github.com/Ahmed-Jarir/Custom-Shell'
    ],
    [
      'Voting sim',
      'C++',
      'A multi-threaded voting simulation written in C++ that models voters across multiple polling stations, focusing on real-time queue management, thread synchronization, and deadlock prevention',
      'https://github.com/Ahmed-Jarir/Vote-Day-Simulator'
    ],
    [
      'Homelab',
      'NixOS',
      'A fully declarative and reproducible NixOS homelab setup with self-hosted services behind a Tailscale VPN on a FriendlyElec CM3588 NAS.',
      ''
    ]
  ];
</script>

<div class="relative mx-auto max-w-6xl">
  <div use:reveal class="mb-12 max-w-3xl">
    <div class="inline-block pb-5">
      <h1 class="relative text-5xl font-black leading-none text-slate-950 dark:text-white sm:text-7xl">
        Projects
      </h1>
      <div class="mt-5 h-1 w-24 bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 dark:from-violet-600 dark:via-purple-500 dark:to-pink-500"></div>
    </div>
  </div>

  <div class="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
    <a
      use:reveal={{ delay: 90 }}
      class="relative flex min-h-96 flex-col justify-between overflow-hidden border border-cyan-200/80 bg-white p-7 text-slate-950 shadow-[0_30px_90px_rgba(34,211,238,0.18)] dark:border-white/10 dark:bg-slate-950 dark:text-white dark:shadow-[0_30px_90px_rgba(15,23,42,0.25)]"
      href={projects[0][3]}
      target="_blank"
      rel="noreferrer"
    >
      <div class="absolute inset-0 bg-gradient-to-br from-blue-100 via-cyan-100/80 to-teal-100 dark:from-violet-600/35 dark:via-purple-500/25 dark:to-pink-500/30"></div>
      <div class="absolute inset-0 bg-[linear-gradient(to_right,#0891b21a_1px,transparent_1px),linear-gradient(to_bottom,#0891b21a_1px,transparent_1px)] bg-[size:3rem_3rem] dark:bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)]"></div>

      <div class="relative">
        <p class="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-700 dark:text-violet-100">{projects[0][1]}</p>
        <h2 class="mt-6 text-5xl font-black leading-none">{projects[0][0]}</h2>
      </div>

      <p class="relative max-w-xl text-lg leading-8 text-slate-700 dark:text-white/80">{projects[0][2]}</p>
    </a>

    <div class="grid gap-5">
      {#each projects.slice(1) as project}
        <article use:reveal={{ delay: 150 }} class="flex min-h-44 flex-col justify-between border border-slate-200/80 bg-white/75 p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/[0.05]">
          <div>
            <p class="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-700 dark:text-violet-300">{project[1]}</p>
            <h2 class="mt-4 text-3xl font-bold dark:text-white">{project[0]}</h2>
            <p class="mt-3 leading-7 text-slate-600 dark:text-slate-300">{project[2]}</p>
          </div>

          {#if project[3]}
            <a class="mt-6 w-fit border-b border-slate-950 pb-1 text-sm font-semibold dark:text-white dark:border-white" href={project[3]} target="_blank" rel="noreferrer">
              View repo
            </a>
          {/if}
        </article>
      {/each}
    </div>
  </div>
</div>
