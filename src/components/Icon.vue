<template>
  <div
    class="
      icon icon-shape icon-sm
      shadow
      border-radius-md
      bg-white
      text-center
      me-2
      d-flex
      align-items-center
      justify-content-center
    "
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      width="64px"
      height="64px"
      viewBox="0 0 64 64"
      v-if="name == 'document'"
    >
      <g transform="translate(0, 0)">
        <path
          d="M38,21V2H9A2,2,0,0,0,7,4V60a2,2,0,0,0,2,2H55a2,2,0,0,0,2-2V21ZM19,18h9a1,1,0,0,1,0,2H19a1,1,0,0,1,0-2ZM45,50H19a1,1,0,0,1,0-2H45a1,1,0,0,1,0,2Zm0-10H19a1,1,0,0,1,0-2H45a1,1,0,0,1,0,2Zm0-10H19a1,1,0,0,1,0-2H45a1,1,0,0,1,0,2Z"
          fill="#444444"
        ></path>
        <polygon
          data-color="color-2"
          points="40 2.586 40 19 56.414 19 40 2.586"
          fill="#444444"
        ></polygon>
      </g>
    </svg>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      width="48px"
      height="48px"
      viewBox="0 0 48 48"
      v-else-if="name=='hypertext'"
    >
      <g transform="translate(0, 0)">
        <path
          d="M30,32H17V28H30a3,3,0,0,0,3-3V11a3,3,0,0,0-3-3H8a3,3,0,0,0-3,3V25a3,3,0,0,0,3,3H9v4H8a7.008,7.008,0,0,1-7-7V11A7.008,7.008,0,0,1,8,4H30a7.008,7.008,0,0,1,7,7V25A7.008,7.008,0,0,1,30,32Z"
          fill="#444444"
        ></path>
        <path
          data-color="color-2"
          d="M40,44H18a7.008,7.008,0,0,1-7-7V23a7.008,7.008,0,0,1,7-7H31v4H18a3,3,0,0,0-3,3V37a3,3,0,0,0,3,3H40a3,3,0,0,0,3-3V23a3,3,0,0,0-3-3H39V16h1a7.008,7.008,0,0,1,7,7V37A7.008,7.008,0,0,1,40,44Z"
          fill="#444444"
        ></path>
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  props: ["name"],
};
</script>

<style>
</style>