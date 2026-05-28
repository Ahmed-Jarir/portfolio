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
  const sectionLabels = {
    about: 'About',
    experience: 'Experience',
    projects: 'Projects',
    skills: 'Skills'
  };

  let mobileLabel = $derived.by(() => {
    const hashSection = activeUrl.split('#')[1];
    return hashSection && hashSection in sectionLabels ? sectionLabels[hashSection] : 'Home';
  });

  function syncActiveUrl() {
    if (window.location.pathname !== `${base}/`) {
      const routeSection = window.location.pathname.slice(1);
      activeUrl = sectionIds.includes(routeSection) ? `${base}/#${routeSection}` : `${base}/`;
      return;
    }

    let nextActive = `${base}/`;

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
<div class="fixed z-50 justify-self-center mt-4 w-[calc(100vw-1rem)] max-w-sm rounded-[1.5rem] border border-white/20 shadow-[0_18px_45px_-26px_rgba(15,23,42,0.5)] backdrop-blur-[10px] dark:border-white/60 dark:bg-black/20 lg:w-auto lg:max-w-none lg:rounded-full lg:shadow-2xl">
  <Navbar  class="px-2 py-2 lg:px-2 lg:py-2.5">
    <NavBrand href={ `${base}/` } class="px-3 py-2 lg:flex-none lg:p-2">
      <div class="lg:hidden">
        <div class="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">Section</div>
        <div class="text-base font-semibold text-slate-900 dark:text-slate-100">{mobileLabel}</div>
      </div>
      <span class="hidden self-center text-xl font-semibold whitespace-nowrap dark:text-slate-400 lg:inline">AJ</span>
    </NavBrand>
    <NavUl {activeUrl} 
           class="mt-3 lg:order-none lg:mt-0 lg:border-l lg:border-r dark:lg:border-slate-400"
           classes={{
             ul: "gap-2 rounded-[1.75rem] border border-white/20 bg-white/90 p-2 shadow-2xl dark:border-white/10 dark:bg-black/75 lg:p-0 lg:px-2 lg:dark:rounded-none lg:border-0 lg:dark:bg-transparent lg:shadow-none",
             active: "btn-default rounded-full",
             nonActive: "rounded-full"
           }}>
      <NavLi href={ `${base}/` } class="lg:hidden">Home</NavLi>
      <NavLi href={ `${base}/#about` }>About</NavLi>
      <NavLi href={ `${base}/#experience` }>Experience</NavLi>
      <NavLi href={ `${base}/#projects` }>Projects</NavLi>
      <NavLi href={ `${base}/#skills` }>Skills</NavLi>
    </NavUl>
    <div class="order-2 flex items-center gap-2 lg:contents">
      <DarkMode class="rounded-full border border-white/20 bg-white/10 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-black/20 lg:rounded-full lg:border-0 lg:dark:bg-transparent lg:shadow-none lg:backdrop-blur-none"/>
      <NavHamburger class="ms-0 rounded-xl border border-white/20 bg-white/10 p-1.5 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-black/20 lg:ms-3 lg:rounded-full lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none lg:backdrop-blur-none" />
    </div>
  </Navbar>
</div>
