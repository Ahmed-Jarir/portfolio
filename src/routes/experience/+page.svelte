<script>
  import { reveal } from '$lib/reveal';

  const experiences = [
    [
      'System Administrator',
      'Mada',
      'Dec 2025 - Present',
      'deployment and internal services.',
      [
        'Nginx',
        'Apache',
        'Linux'
      ]
    ],
    [
      'Software Developer',
      'MaxFlow',
      'Jul 2024 - Nov 2025',
      'ERP modules and mobile applications.',
      [
        'Python',
        'JS',
        'Frappe',
        'Flutter'
      ]
    ],
    [
      'QA Intern',
      'Jaffa.Net',
      '2022',
      'Unit testing, Regression testing, Stress testing, and test automation',
      [
        'Python',
        'SoapUI',
        'Selenium',
        'ps-runbot-testing'
      ]
    ]
  ];
</script>

<div class="relative mx-auto max-w-6xl">
  <div use:reveal class="mb-12">
    <div class="inline-block pb-5">
      <h1 class="relative text-5xl font-black leading-none text-slate-950 dark:text-white sm:text-7xl">
        Experience
      </h1>
      <div class="mt-5 h-1 w-24 bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 dark:from-violet-600 dark:via-purple-500 dark:to-pink-500"></div>
    </div>
  </div>

  <div class="grid gap-4">
    {#each experiences as exp, index}
      <article use:reveal={{ delay: index * 90 }} class="group grid gap-5 border border-slate-200/80 bg-white/70 p-5 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/[0.05] md:grid-cols-[7rem_1fr_auto] md:items-center">
        <div class="text-6xl font-black leading-none text-slate-200 group-hover:text-transparent group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-cyan-500 group-hover:bg-clip-text dark:text-white/10 dark:group-hover:from-violet-400 dark:group-hover:to-pink-400">
          {String(index + 1).padStart(2, '0')}
        </div>

        <div>
          <p class="text-sm font-semibold text-cyan-700 dark:text-violet-300">{exp[1]} / {exp[2]}</p>
          <h2 class="mt-1 text-2xl font-bold dark:text-white">{exp[0]}</h2>
          <p class="mt-2 text-slate-600 dark:text-slate-300">{exp[3]}</p>
        </div>

        <div class="flex flex-wrap gap-2 md:max-w-48 md:justify-end">
          {#each exp[4] as tech}
            <span class="border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-600 dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-300">
              {tech}
            </span>
          {/each}
        </div>
      </article>
    {/each}
  </div>
</div>
