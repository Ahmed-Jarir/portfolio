<script>
  import {Card} from 'flowbite-svelte'
  import {Button} from "flowbite-svelte";
  let {title, points, link, skills=["skill2","skill1","skill4","skill3"], image_path = "./image.png"} = $props()
</script>
<Card>
  <div class="flex flex-col">
    <div class = "flex-none w-[320px] md:w-[480px] snap-center">
      <img src={image_path}/>
    </div>
    <div class="p-4 flex flex-col gap-4 items-start">
      <!-- skills -->
      <div class="flex flex-wrap gap-1">
        {#each skills as skill}
          <Card class="px-3 size-min">
            {skill}
          </Card>
        {/each}
      </div>
      <h1>
        {title}
      </h1>
      {#if points.length}
        <ul class="list-disc pl-5 flex flex-col gap-1">
          {#each points as point}
            <li>{point}</li>
          {/each}
        </ul>
      {/if}
      {#if link}
        <Button 
          href="{link}" 
          class="btn-default"
        >
          View on Github
        </Button>
      {/if}
    </div>
  </div>
</Card>
