<script lang="ts">
  import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
  import type { ToggleOption } from '$lib/components/button-toggle-group/toggle-option';
  import Ripple from '$lib/components/ripple.svelte';
  import { availableThemes } from '$lib/data/theme-option';
  import { createEventDispatcher } from 'svelte';
  import Fa from 'svelte-fa';

  export let options: ToggleOption<any>[];
  export let selectedOptionId: any;
  export let invertColors = false;

  const dispatch = createEventDispatcher<{
    edit: string;
    delete: string;
  }>();

  function mapToStyleString(style: Record<string, any> | undefined) {
    if (!style) return '';

    return Object.entries(style)
      .map(([key, value]) => `${key}: ${value}`)
      .join(';');
  }
</script>

<!-- //THEME_BORDERCOLOR_BUTTONTEXT 900 500 -->
<!-- //Below, are the conditional classes for. SelectedOptionID = selected Button-->
<!-- 
Classes:
  1: Selected Button Border:
  2: Selected Button BG:
  3: Selected Button Text:
  4: UnSelected Button BG:

  Make sure to Delete if two styles are the same


          class:border-neutral-950={option.id === selectedOptionId}
        class:bg-neutral-950={option.id === selectedOptionId}
        class:text-neutral-500={(option.id === selectedOptionId && !invertColors) ||
          (option.id !== selectedOptionId && invertColors)}
        class:bg-neutral-900={(option.id === selectedOptionId && invertColors) ||
          (option.id !== selectedOptionId && !invertColors)}
-->

<div class="-m-1 flex flex-wrap">
  {#each options as option}
    <div class="flex">
      <button
        title={option.id}
        class="m-1 rounded-md border-2 border-neutral-900 p-2 text-neutral-300 text-lg bg-neutral-900"
        class:border-4={option.thickBorders && option.id === selectedOptionId}
        class:border-neutral-950={option.id === selectedOptionId}
        class:bg-neutral-950={option.id === selectedOptionId}
        class:bg-neutral-900={(option.id === selectedOptionId && invertColors) ||
          (option.id !== selectedOptionId && !invertColors)}
        style={mapToStyleString(option.style)}
        on:click={() => (selectedOptionId = option.id)}
      >
        {option.text}
        <Ripple />
      </button>
      {#if option.showIcons && option.id === selectedOptionId && !availableThemes.has(option.id)}
        <div class="flex flex-col justify-around mr-2">
          <button on:click={() => dispatch('edit', option.id)}>
            <Fa icon={faPen} slot="icon" />
          </button>
          <button on:click={() => dispatch('delete', option.id)}>
            <Fa icon={faTrash} slot="icon" />
          </button>
        </div>
      {/if}
    </div>
  {/each}

  <slot />
</div>
