<template>
    <aside
      class="
        sidenav
        navbar navbar-vertical navbar-expand-xs
        border-0 border-radius-xl
        my-3
        fixed-start
        ms-3
      "
      id="sidenav-main"
    >
      <div
        class="collapse navbar-collapse w-auto max-height-vh-100 h-100"
        id="sidenav-collapse-main"
      >
        <div class="sidenav-header">
          <i
            class="
              fas
              fa-times
              p-3
              cursor-pointer
              text-secondary
              opacity-5
              position-absolute
              end-0
              top-0
              d-none d-xl-none
            "
            aria-hidden="true"
            id="iconSidenav"
          ></i>
          <router-link class="navbar-brand m-0 text-center" to="/">
            <img
              :src="require('@/assets/logo ppk.png')"
              class="navbar-brand-img"
              alt="main_logo"
            />
            <span class="ms-1 font-weight-bold">โพนงามพิทยานุกูล</span>
          </router-link>
        </div>
        <hr class="horizontal dark mt-0" />

        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/">
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
                  width="48px"
                  height="48px"
                  viewBox="0 0 48 48"
                >
                  <g transform="translate(0, 0)">
                    <path
                      d="M24,6.876,6,21.6V44a2,2,0,0,0,2,2H19V35a1,1,0,0,1,1-1h8a1,1,0,0,1,1,1V46H40a2,2,0,0,0,2-2V21.6ZM27,27H21a1,1,0,0,1-1-1V20a1,1,0,0,1,1-1h6a1,1,0,0,1,1,1v6A1,1,0,0,1,27,27Z"
                      fill="#444444"
                    ></path>
                    <path
                      data-color="color-2"
                      d="M46.633,20.226l-22-18a1,1,0,0,0-1.266,0L12,11.526V7a1,1,0,0,0-1-1H8A1,1,0,0,0,7,7v8.617L1.367,20.226a1,1,0,0,0,1.266,1.548L24,4.292,45.367,21.774a1,1,0,0,0,1.266-1.548Z"
                      fill="#444444"
                    ></path>
                  </g>
                </svg>
              </div>
              <span class="nav-link-text ms-1">หน้าแรก</span>
            </router-link>
          </li>

          <li class="nav-item" v-for="x in content" :key="x">
            <router-link
              class="nav-link"
              :to="x.target"
              v-if="x.type == 'inner-hypertext'"
            >
              <Icon :name="x.icon" />

              <span class="nav-link-text ms-1">{{ x.title }}</span>
            </router-link>

            <h6
              class="
                ps-4
                ms-2
                text-uppercase text-xs
                font-weight-bolder
                opacity-6
                mt-3
              "
              v-else-if="x.type == 'label'"
            >
              {{ x.title }}
            </h6>

            <a
              class="nav-link"
              :href="x.target"
              target="_blank"
              v-else-if="x.type == 'outer-hypertext'"
            >
              <Icon :name="x.icon" />
              <span class="nav-link-text ms-1">{{ x.title }}</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
</template>

<script>
import Icon from "@/components/Icon.vue";
import { oit } from "@/db.js";

export default {
  components: {
    Icon,
  },
  data: function () {
    return {
      content: oit,
    };
  },
};
</script>

<style>
.navbar-vertical .navbar-nav > .nav-item .router-link-exact-active {
  color: #344767;
  background-color: #fff;
  box-shadow: 0 20px 27px 0 rgb(0 0 0 / 5%);
  border-radius: 0.5rem;
}

.navbar-vertical .navbar-nav > .nav-item .router-link-exact-active .icon {
  background-image: linear-gradient(310deg, #cb0c9f 0%, #cb0c9f 100%);
}

.navbar-vertical.navbar-expand-xs
  .navbar-nav
  > .nav-item
  .router-link-exact-active
  .icon
  svg 
  g
  path,
.navbar-vertical.navbar-expand-xs
  .navbar-nav
  > .nav-item
  .router-link-exact-active
  .icon
  svg 
  g
  polygon {
  fill: #fff;
}

/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #888; 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555; 
}
</style>