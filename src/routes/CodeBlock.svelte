<script>
  import { onMount } from 'svelte'
  import { gsap } from 'gsap';
  import {Card} from 'flowbite-svelte'
  import { createHighlighter } from 'shiki';
  import { Skeleton } from "flowbite-svelte";

  let floatingEl;
  let highlighter = $state(null)

  let html = $state('');
  let selected_skill = $state("developer");

  const codes = { 
    developer: `
      class Developer {
        public:
          string role = "Full Stack Engineer";
          string education = "Koç University";
          string location = "Palestine";

          vector<string> skills = {
            "Python", "MySQL", "PostgreSQL",
            "HTML", "CSS", "JavaScript", "React", "Svelte",
            "C", "C++", "C#",
            "Rust", "Java", "Flutter",
            "Haskell", "Scheme", "Assembly"
          };

          bool isAvailable() {
            return true;
          }
      };
    `,
    system_admin: `
      { lib, stdenv, fetchFromGitHub }:
      stdenv.mkDerivation {
        pname = "system_admin";
        version = "2026.05.23";

        buildInputs = with pkgs; [
          docker podman kubernetes
          git caddy nginx apache
        ];

        meta = with lib; {
          maintainers = [ "@ahmed-jarir" ];
          platforms = platforms.all;
          license = licenses.mit;
        };
      }`
  };

  let code = $derived(codes[selected_skill]);
  onMount(async () => {
    highlighter = await createHighlighter({
      themes: ['github-dark', 'github-light'],
      langs: ['cpp', 'nix']
    });

    gsap.to(floatingEl, {
      y: '+=30',
      repeat: -1,
      yoyo: true,
      duration: 2,
      ease: 'sine.inOut',
    })
  });

  $effect(() => {
    if (!highlighter || !code) return

    html = highlighter.codeToHtml(code.trim(), {
      lang: selected_skill == "developer" ? 'cpp' : 'nix',
      themes: {
        dark:  { ...highlighter.getTheme('github-dark'), bg:'transparent' },
        light: { ...highlighter.getTheme('github-light'), bg:'transparent' }
      },
      transformers: [
        {
          line(node, line) {
            node.children.unshift({
              type: 'element',
              tagName: 'span',
              properties: {
                style: `
                  display:inline-block;
                  width:1.5rem;
                  margin-right:1rem;
                  text-align:right;
                  color:rgba(115,138,148,.4);
                  user-select:none;
                `
              },
              children: [{
                type: 'text',
                value: String(line) 
              }]
            });
          }
        }
      ]
    });
  });

  function handleSkillSelect(skill) {
    selected_skill = skill;
  }

</script>
<div class="relative">

  <!-- Decorative Blobs -->
  <div class="absolute inset-0 
              bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 
              dark:from-violet-500 dark:via-purple-500 dark:to-pink-500
              rounded-[3rem] blur-3xl opacity-30"></div>
  <!--End Decorative Blobs -->
  <div bind:this={floatingEl} class="p-4">
    <Card class="!max-width-md min-w-full !bg-transparent backdrop-blur-[10px]">
      <!-- Header -->
      <div class="flex items-center space-between
                  bg-slate-200/50 dark:bg-slate-800/50
                  px-4 pt-4 rounded-t-lg width-full backdrop-blur-[10px]">
        <div class="flex items-center gap-2 font-medium">
          <!-- TODO: there was a better way of doing this -->
          <button onclick={() => handleSkillSelect("developer")}
                  class:selected-tab={selected_skill == 'developer'}
                  class="p-2 text-slate-600 dark:text-violet-200 selected-tab rounded-t-lg">
            ~/src/developer.cpp
          </button>
          <button onclick={() => handleSkillSelect("system_admin")}
                  class:selected-tab={selected_skill == 'system_admin'}
                  class="p-2 text-slate-600 dark:text-violet-200 rounded-t-lg">
            /etc/nixos/system_admin.nix
          </button>
        </div>
      </div>
      <!-- End Header -->
      <div class="px-4 py-8 border-y">
        {#if html}
          {@html html}
        {:else}
          <Skeleton size="sm" class="mt-2"/>
          <Skeleton size="sm" class="mt-2"/>
        {/if}
      </div>
      <div class="flex space-between px-4 py-2 bg-blue-600/20 dark:bg-violet-600/20 rounded-b-lg">
        <div class="text-slate-600 dark:text-violet-400">
          Normal [readonly]
        </div>
      </div>
    </Card>
  </div>
</div>
