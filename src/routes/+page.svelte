<script>
  import CodeBlock from "./CodeBlock.svelte";
  import GeneralInfo from "./GeneralInfo.svelte";
  import AboutPage from './about/+page.svelte';
  import ContactPage from './contact/+page.svelte';
  import ExperiencePage from './experience/+page.svelte';
  import ProjectsPage from './projects/+page.svelte';
  import SkillsPage from './skills/+page.svelte';
</script>
<section class="relative flex justify-center items-center min-h-screen">
  <!-- Decorative Blobs -->
  <div class="absolute inset-0 overflow-hidden">
    <div class="absolute bottom-20 right-10 w-96 h-96
                bg-gradient-to-br from-pink-300/30 to-orange-300/30
                dark:from-pink-400/20 dark:to-blue-400/20
                rounded-full blur-3xl blob-float"></div>
    <div class="absolute top-20 left-10 w-64 h-64
                bg-gradient-to-br from-blue-300/30 to-cyan-300/30
                dark:from-violet-400/20 dark:to-purple-400/20
                rounded-full blur-3xl"></div>
    <div class="absolute inset-0
                bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)]
                bg-[size:4rem_4rem]
                dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)]"></div>
  </div>
  <!--End Decorative Blobs -->

  <div class="relative container mx-auto px-4 sm:px-6 lg:px-12 py-20">

    <div class="grid lg:grid-cols-2 gap-12 items-center">
      <GeneralInfo/>
      <CodeBlock/>
    </div>
  </div>
</section>
<section id="about" class="relative scroll-mt-24 px-6 py-28 sm:px-8 lg:px-10">
  <AboutPage/>
</section>
<section id="experience" class="relative scroll-mt-24 px-6 py-28 sm:px-8 lg:px-10">
  <ExperiencePage/>
</section>
<section id="projects" class="relative scroll-mt-24 px-6 py-28 sm:px-8 lg:px-10">
  <ProjectsPage/>
</section>
<section id="skills" class="relative scroll-mt-24 px-6 py-28 sm:px-8 lg:px-10">
  <SkillsPage/>
</section>
<section id="contact" class="relative scroll-mt-24 px-6 pb-10 pt-20 sm:px-8 lg:px-10">
  <ContactPage/>
</section>
