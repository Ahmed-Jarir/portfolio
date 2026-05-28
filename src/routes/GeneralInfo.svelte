<script>
  import {Button} from "flowbite-svelte";

  import GithubSvg from "./GithubSvg.svelte";
  import LinkedInSvg from "./LinkedInSvg.svelte";
  import MailSvg from "./MailSvg.svelte";
</script>
<div class="space-y-6 sm:space-y-8">
  <div class="space-y-4">
    <div class="flex gap-8">
      <div class="relative">
        <!-- background -->
        <div class="absolute inset-0 
                    bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 
                    dark:from-violet-500 dark:via-purple-500 dark:to-pink-500 
                    rounded-full blur-xl opacity-70"></div>
        <!-- image container and placeholder -->
        <div class="h-[224px] w-[224px]
                    border-6 shadow-xl relative
                    rounded-full bg-white"></div>
      </div>
      <!-- Name -->
      <div style="opacity: 1; transform: none">
        <h1 class="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tight">
          <span class="
            bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 
            dark:from-violet-600 dark:via-purple-600 dark:to-pink-600
            bg-clip-text text-transparent
          ">
            Ahmed
          </span>
        </h1>
        <h1 class="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tight
                   text-slate-900 dark:text-white">
          Jarir
        </h1>
      </div>
      <!-- End name -->
    </div>
    <!-- Title -->
    <div class="flex items-center gap-3">

      <!-- Decorative divider -->
      <div class="h-1 w-20 bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-violet-600 dark:to-purple-600 rounded-full"></div>
      <div class="text-xl sm:text-2xl font-semibold text-slate-600 dark:text-slate-400">
        System Administrator
      </div>
    </div>
    <!-- End title -->
  </div>
  <!-- Buttons -->
  <div class="flex gap-4">
    <a class="btn-default rounded-[0.5rem] text-white font-bold px-5 py-2.5" href="#contact">Get In Touch</a>
    <a class="bg-none text-slate-500 border-2 border-slate-300
              dark:border-white/30 hover:bg-white dark:hover:bg-black/20 
              font-bold px-5 py-2.5 rounded-[0.5rem]"
       href="#projects"
    >
      View Projects
    </a>
  </div>
  <!--End buttons -->
  <!-- Contact -->
  <div class="flex gap-4 items-center">
    <div class="text-sm text-slate-500 dark:text-slate-500">
      Links:
    </div>
    <div class="flex gap-2">
      <a class="a-social bg-gradient-to-br from-slate-700 to-slate-900
                dark:from-slate-700 dark:to-slate-900"
         href="https://github.com/ahmed-jarir">
        <GithubSvg/>
      </a>
      <a class="a-social bg-gradient-to-br from-blue-600 to-cyan-600
                dark:from-blue-500 dark:to-cyan-500"
         href="https://www.linkedin.com/in/ahmed-jareer">
        <LinkedInSvg/>
      </a>
      <a class="a-social bg-gradient-to-br from-cyan-600 to-teal-600 
                dark:from-violet-600 dark:to-purple-600"
         href="mailto:ahmedjareer@hotmail.com">
        <MailSvg/>
      </a>
    </div>
  </div>
  <!-- End Contact -->
</div>
