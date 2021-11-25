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
      v-else-if="name == 'hypertext'"
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

    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      width="64px"
      height="64px"
      viewBox="0 0 64 64"
      v-else-if="name == 'news'"
    >
      <g transform="translate(0, 0)">
        <path
          fill="#444444"
          d="M61.707,2.293c-0.273-0.275-0.683-0.365-1.048-0.233l-58,21c-0.378,0.137-0.638,0.488-0.658,0.89 c-0.02,0.402,0.203,0.777,0.566,0.952l20.886,10.025l18.866-13.945c0.462-0.341,1.041,0.238,0.699,0.699L29.074,40.547 l10.025,20.886C39.266,61.78,39.617,62,40,62c0.017,0,0.033,0,0.05-0.001c0.402-0.021,0.753-0.28,0.891-0.658l21-58 C62.072,2.976,61.981,2.567,61.707,2.293z"
        ></path>
      </g>
    </svg>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      width="64px"
      height="64px"
      viewBox="0 0 64 64"
      v-else-if="name == 'social'"
    >
      <g transform="translate(0, 0)">
        <path
          d="M55,2H9A2,2,0,0,0,7,4V60a2,2,0,0,0,2,2H55a2,2,0,0,0,2-2V4A2,2,0,0,0,55,2ZM39,19a4,4,0,1,1-4,4A4,4,0,0,1,39,19ZM26,22a5,5,0,1,1-5,5A5,5,0,0,1,26,22ZM15,46a11,11,0,0,1,22,0Zm22.521-6a13.073,13.073,0,0,0-6.512-5.994A9.991,9.991,0,0,1,49,40Z"
          fill="#444444"
        ></path>
      </g>
    </svg>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      width="64px"
      height="64px"
      viewBox="0 0 64 64"
      v-else-if="name=='calendar'"
    >
      <g transform="translate(0, 0)">
        <path
          d="M56,11H8a6.006,6.006,0,0,0-6,6V54a6.006,6.006,0,0,0,6,6H56a6.006,6.006,0,0,0,6-6V17A6.006,6.006,0,0,0,56,11Zm4,43a4,4,0,0,1-4,4H8a4,4,0,0,1-4-4V24H60Z"
          fill="#444444"
        ></path>
        <path
          data-color="color-2"
          d="M49,4a2,2,0,0,0-4,0V9h4Z"
          fill="#444444"
        ></path>
        <path
          data-color="color-2"
          d="M19,4a2,2,0,0,0-4,0V9h4Z"
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