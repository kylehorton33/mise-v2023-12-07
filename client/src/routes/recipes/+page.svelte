<script>
  export let data
  let filterTerm = ''
</script>

<div class="p-4 flex flex-col items-center space-y-4 w-72 md:w-full mx-auto">
  <h1 class="text-xl text-center uppercase">Recipes</h1>
  <input
    type="text"
    aria-label="filter"
    name="filter"
    bind:value={filterTerm}
    placeholder="Filter"
    class="input input-bordered w-full max-w-xs"
  />
  <ul data-testid="recipe-list" class="w-72 md:w-1/3 md:max-w-lg">
    <li class="flex mb-3">
      <span class="grow"></span>
      <span class="text-sm">Missing:</span>
    </li>
    {#each data.recipes as { name, color, missing, ingredientLines }}
      <li
        class="{filterTerm ^
        (name + ingredientLines.map((l) => l.ingredient.name).toString())
          .toLowerCase()
          .includes(filterTerm.toLowerCase())
          ? ''
          : 'hidden'} flex mb-4 my-auto"
      >
        <a href="/recipes/{name}" class="flex flex-col">
          <div>
            <div class="badge badge-sm" style="background: {color} ;"></div>
            <span class="uppercase underline">{name}</span>
          </div>
          <span class="text-sm"
            >{ingredientLines.map((l) => l.ingredient.name).join(' | ')}</span
          >
        </a>
        <span class="grow"></span><span
          class="badge {missing ? 'badge-neutral' : 'badge-success'}"
          >{missing}</span
        >
      </li>
    {/each}
  </ul>
</div>
