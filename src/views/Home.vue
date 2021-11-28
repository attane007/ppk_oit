<template>
  <main
    class="
      main-content
      position-relative
      max-height-vh-100
      h-100
      mt-1
      border-radius-lg
    "
  >
    <!-- nav bar -->
    <Navbar />

    <div class="container-fluid py-4">
      <div class="row">
        <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
          <div class="card">
            <div class="card-body p-3">
              <div class="row">
                <div class="col-8">
                  <div class="numbers">
                    <p class="text-sm mb-0 text-capitalize font-weight-bold">
                      จำนวนครู
                    </p>
                    <h5 class="font-weight-bolder mb-0">
                      14
                      <!-- <span class="text-success text-sm font-weight-bolder"
                          >+55%</span
                        > -->
                    </h5>
                  </div>
                </div>
                <div class="col-4 text-end">
                  <div
                    class="
                      icon icon-shape
                      bg-gradient-primary
                      shadow
                      text-center
                      border-radius-md
                    "
                  >
                    <i
                      class="ni ni-money-coins text-lg opacity-10"
                      aria-hidden="true"
                    ></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
          <div class="card">
            <div class="card-body p-3">
              <div class="row">
                <div class="col-8">
                  <div class="numbers">
                    <p class="text-sm mb-0 text-capitalize font-weight-bold">
                      จำนวนผู้เรียน
                    </p>
                    <h5 class="font-weight-bolder mb-0">
                      91
                      <!-- <span class="text-success text-sm font-weight-bolder"
                          >+3%</span
                        > -->
                    </h5>
                  </div>
                </div>
                <div class="col-4 text-end">
                  <div
                    class="
                      icon icon-shape
                      bg-gradient-primary
                      shadow
                      text-center
                      border-radius-md
                    "
                  >
                    <i
                      class="ni ni-world text-lg opacity-10"
                      aria-hidden="true"
                    ></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
          <div class="card">
            <div class="card-body p-3">
              <div class="row">
                <div class="col-8">
                  <div class="numbers">
                    <p class="text-sm mb-0 text-capitalize font-weight-bold">
                      จำนวนห้องเรียน
                    </p>
                    <h5 class="font-weight-bolder mb-0">
                      6
                      <!-- <span class="text-danger text-sm font-weight-bolder"
                          >-2%</span
                        > -->
                    </h5>
                  </div>
                </div>
                <div class="col-4 text-end">
                  <div
                    class="
                      icon icon-shape
                      bg-gradient-primary
                      shadow
                      text-center
                      border-radius-md
                    "
                  >
                    <i
                      class="ni ni-paper-diploma text-lg opacity-10"
                      aria-hidden="true"
                    ></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-sm-6">
          <div class="card">
            <div class="card-body p-3">
              <div class="row">
                <div class="col-8">
                  <div class="numbers">
                    <p class="text-sm mb-0 text-capitalize font-weight-bold">
                      รหัสโรงเรียน
                    </p>
                    <h5 class="font-weight-bolder mb-0">
                      44012012
                      <!-- <span class="text-success text-sm font-weight-bolder"
                          >+5%</span
                        > -->
                    </h5>
                  </div>
                </div>
                <div class="col-4 text-end">
                  <div
                    class="
                      icon icon-shape
                      bg-gradient-primary
                      shadow
                      text-center
                      border-radius-md
                    "
                  >
                    <i
                      class="ni ni-cart text-lg opacity-10"
                      aria-hidden="true"
                    ></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-lg-7 mb-lg-0 mb-4">
          <div class="card">
            <div class="card-body p-3">
              <div class="row align-items-center">
                <div class="col-lg-6">
                  <div class="d-flex flex-column h-100 align-items-center">
                    <p class="mb-1 pt-2 text-bold">ผู้อำนวยการ</p>
                    <h4 class="font-weight-bolder">นายภูวดล ภูสิม</h4>
                    <!-- <p class="mb-5">
                        From colors, cards, typography to complex elements, you
                        will find the full documentation.
                      </p> -->
                  </div>
                </div>
                <div class="col-lg-6 ms-auto text-center mt-5 mt-lg-0">
                  <div class="bg-gradient-primary border-radius-lg h-100">
                    <div
                      class="
                        position-relative
                        d-flex
                        align-items-center
                        justify-content-center
                        h-100
                      "
                    >
                      <img
                        class="w-100 position-relative z-index-2 pt-4"
                        :src="require('@/assets/director.png')"
                        alt="rocket"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-5">
          <div class="card h-100 p-3">
            <div
              class="
                overflow-hidden
                position-relative
                border-radius-lg
                bg-cover
                h-100
              "
              style="background-image: url('../assets/img/ivancik.jpg')"
            >
              <span class="mask bg-secondary"></span>
              <div
                class="
                  card-body
                  position-relative
                  z-index-1
                  d-flex
                  flex-column
                  h-100
                  p-3
                "
              >
                <h5 class="text-white font-weight-bolder mb-4 pt-2">
                  ตราประจำโรงเรียน
                </h5>
                <img
                  class="w-80 align-self-center"
                  :src="require('@/assets/logo ppk.png')"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row my-4">
        <div class="col-md-12 mb-md-0 mb-4">
          <div class="card">
            <div class="card-header pb-0">
              <div class="row">
                <div class="col-lg-6 col-7">
                  <h6>การเปิดเผยข้อมูลสาธารณะ (OIT) ปี 2564</h6>
                  <!-- <p class="text-sm mb-0">
                      <i class="fa fa-check text-info" aria-hidden="true"></i>
                      <span class="font-weight-bold ms-1">30 done</span> this
                      month
                    </p> -->
                </div>
              </div>
            </div>
            <div class="card-body px-0 pb-2">
              <div class="table-responsive">
                <table class="table align-items-center mb-0">
                  <thead>
                    <tr>
                      <th
                        class="
                          text-uppercase text-secondary text-xxs
                          font-weight-bolder
                          opacity-7
                        "
                      >
                        รายการ
                      </th>
                      <th
                        class="
                          text-uppercase text-secondary text-xxs
                          font-weight-bolder
                          opacity-7
                          ps-2
                        "
                      >
                        ประเภท
                      </th>
                      <th
                        class="
                          text-center text-uppercase text-secondary text-xxs
                          font-weight-bolder
                          opacity-7
                        "
                      >
                        ลิงก์
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="x in content" :key="x">
                      <td v-if="x.type=='inner-hypertext' || x.type=='outer-hypertext'">
                        <div class="d-flex px-2 py-1">
                          <div>
                            <Icon :name="x.icon" class="d-none"/>

                            <!-- <img
                              src="../assets/img/small-logos/logo-xd.svg"
                              class="avatar avatar-sm me-3"
                              alt="xd"
                            /> -->
                          </div>
                          <div
                            class="d-flex flex-column justify-content-center"
                          >
                            <h6 class="mb-0 text-sm">{{x.title}}</h6>
                          </div>
                        </div>
                      </td>
                      <td v-if="x.type=='inner-hypertext' || x.type=='outer-hypertext'">
                        <div class="avatar-group mt-2">
                          <a
                            href="javascript:;"
                            class="avatar avatar-xs rounded-circle"
                            data-bs-toggle="tooltip"
                            data-bs-placement="bottom"
                            title="Ryan Tompson"
                          >
                            <!-- <img src="../assets/img/team-1.jpg" alt="team1" /> -->
                            <Icon name="hypertext" class="w-100"  v-if="x.type=='outer-hypertext'"/>
                            <Icon name="note" class="w-100"  v-else-if="x.type=='inner-hypertext'"/>
                          </a>

                        </div>
                      </td>
                      <td class="align-middle text-center text-sm" v-if="x.type=='inner-hypertext' || x.type=='outer-hypertext'">
                        <!-- <span class="text-xs font-weight-bold"> $14,000 </span> -->
                        <a class="btn btn-info text-white" :href="x.target" target="_blank" v-if="x.type=='outer-hypertext'">go</a>
                        <router-link class="btn btn-warning text-white" :to="x.target" v-else-if="x.type=='inner-hypertext'">go</router-link>
                      </td>
                
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <footer class="footer pt-3">
          <div class="container-fluid">
            <div class="row align-items-center justify-content-lg-between">
              <div class="col-lg-6 mb-lg-0 mb-4">
                <div
                  class="copyright text-center text-sm text-muted text-lg-start"
                >
                  ©
                  <script>
                    document.write(new Date().getFullYear());
                  </script>
                  , made with <i class="fa fa-heart"></i> by
                  <a
                    href="https://www.creative-tim.com"
                    class="font-weight-bold"
                    target="_blank"
                    >Creative Tim</a
                  >
                  for a better web.
                </div>
              </div>
              <div class="col-lg-6">
                <ul
                  class="
                    nav nav-footer
                    justify-content-center justify-content-lg-end
                  "
                >
                  <li class="nav-item">
                    <a
                      href="https://www.creative-tim.com"
                      class="nav-link text-muted"
                      target="_blank"
                      >Creative Tim</a
                    >
                  </li>
                  <li class="nav-item">
                    <a
                      href="https://www.creative-tim.com/presentation"
                      class="nav-link text-muted"
                      target="_blank"
                      >About Us</a
                    >
                  </li>
                  <li class="nav-item">
                    <a
                      href="https://creative-tim.com/blog"
                      class="nav-link text-muted"
                      target="_blank"
                      >Blog</a
                    >
                  </li>
                  <li class="nav-item">
                    <a
                      href="https://www.creative-tim.com/license"
                      class="nav-link pe-0 text-muted"
                      target="_blank"
                      >License</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer> -->
    </div>
  </main>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import {oit} from "@/db.js";
import Icon from "@/components/Icon.vue"

export default {
  name: "Home",
  components: {
    Navbar,
    Icon
  },
  data: function () {
    return {
      content: oit,
    };
  },
};
</script>
