<script>
  import { onMount } from 'svelte';
  import { page } from '$app/state';
  import { base } from '$app/paths';
  let activeUrl = $state(`${base}/`);

  let activeClass = ""

  let a_style = "p-1 "
  import { 
    Navbar,
    NavBrand,
    NavLi,
    NavUl,
    NavHamburger,
    DarkMode
  } from "flowbite-svelte";

  const sectionIds = [ "about", 'experience', 'projects', 'skills'];

  function syncActiveUrl() {
    if (window.location.pathname !== `${base}/`) {
      const routeSection = window.location.pathname.slice(1);
      activeUrl = sectionIds.includes(routeSection) ? `${base}/#${routeSection}` : `${base}/`;
      return;
    }

    let nextActive = '/';

    for (const id of sectionIds) {
      const section = document.getElementById(id);
      if (!section) continue;

      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.45 && rect.bottom >= window.innerHeight * 0.25) {
        nextActive = `${base}/#${id}`;
      }
    }

    activeUrl = nextActive;
  }

  $effect(() => {
    page.url.href;
    if (typeof window !== 'undefined') {
      requestAnimationFrame(syncActiveUrl);
    }
  });

  onMount(() => {
    syncActiveUrl();

    window.addEventListener('scroll', syncActiveUrl, { passive: true });
    window.addEventListener('resize', syncActiveUrl);
    window.addEventListener('hashchange', syncActiveUrl);

    return () => {
      window.removeEventListener('scroll', syncActiveUrl);
      window.removeEventListener('resize', syncActiveUrl);
      window.removeEventListener('hashchange', syncActiveUrl);
    };
  });
</script>
<div class="fixed z-50 justify-self-center mt-4 rounded-full shadow-2xl border border-white/20 dark:border-white/60 backdrop-blur-[10px] dark:bg-black/20">
  <Navbar breakpoint="lg">
    <NavBrand href={ `${base}/` } class="p-2">
      <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-slate-400">AJ</span>
    </NavBrand>
    <NavUl {activeUrl} 
           class="border-l border-r dark:border-slate-400"
           classes={{ ul: "p-0 gap-2 px-2", active: "btn-default rounded-full"}}>
      <NavLi href={ `${base}/#about` }>About</NavLi>
      <NavLi href={ `${base}/#experience` }>Experience</NavLi>
      <NavLi href={ `${base}/#projects` }>Projects</NavLi>
      <NavLi href={ `${base}/#skills` }>Skills</NavLi>
    </NavUl>
    <DarkMode class="rounded-full"/>
    <NavHamburger />
  </Navbar>
</div>
