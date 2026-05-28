<script>
  import { reveal } from '$lib/reveal';

  const groups = [
    {
      title: 'Development',
      skills: [
        "Python",
        "MySQL",
        "PostgreSQL",
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Svelte",
        "C",
        "C++",
        "C#",
        "Rust",
        "Java",
        "Flutter",
        "Haskell",
        "Scheme",
        "Assembly",
      ]
    },
    {
      title: 'Devops',
      skills: [
        'Git',
        "Docker",
        "Apache",
        "Nginx",
        "Caddy",
      ]
    }
  ];
</script>

<div class="relative mx-auto max-w-6xl">
  <div use:reveal class="mb-12 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
    <div>
      <div class="inline-block pb-5">
        <h1 class="relative text-5xl font-black leading-none text-slate-950 dark:text-white sm:text-7xl">
          Skills
        </h1>
        <div class="mt-5 h-1 w-24 bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 dark:from-violet-600 dark:via-purple-500 dark:to-pink-500"></div>
      </div>
    </div>
  </div>

  <div class="grid gap-5 lg:grid-cols-2">
    {#each groups as group, index}
      <section use:reveal={{ delay: index * 90 }} class="relative overflow-hidden border border-slate-200/80 bg-white/75 p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/[0.05]">
        <div class="absolute -right-12 -top-12 h-28 w-28 bg-gradient-to-br from-blue-500/20 via-cyan-400/20 to-teal-300/20 blur-2xl dark:from-violet-500/25 dark:via-purple-400/20 dark:to-pink-400/20"></div>

        <h2 class="bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-3xl font-black text-transparent dark:from-violet-400 dark:via-purple-300 dark:to-pink-300">
          {group.title}
        </h2>
        <div class="mt-4 h-px w-full bg-gradient-to-r from-cyan-500/60 to-transparent dark:from-violet-400/60"></div>

        <div class="mt-7 flex flex-wrap gap-2">
          {#each group.skills as skill}
            <span class="border border-cyan-200/80 bg-cyan-50 px-3 py-1.5 text-sm font-semibold text-cyan-900 shadow-md shadow-cyan-500/10 dark:border-white/10 dark:bg-white/[0.08] dark:text-violet-100 dark:shadow-violet-500/10">
              {skill}
            </span>
          {/each}
        </div>
      </section>
    {/each}
  </div>
</div>
