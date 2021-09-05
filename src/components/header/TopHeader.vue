<template>
  <div class="d-flex position-fixed top-0 end-0 w-100 p-0" style="border-bottom: 2px solid lightgray;background:#fff;z-index:10">
    <div class="py-2" style=""></div>

    <div
      class="
        d-flex
        align-items-center
        justify-content-between
        px-0
        ps-4
        py-2
        small
      "
      style="width: 100%"
    >
      <div class="m-2">
        <router-link to="/">
          <img src="../../../public/img/logo.png" />
        </router-link>
        <router-link to="/" class="p-1 pe-4">
          <font-awesome-icon
            class=""
            :icon="['fa', 'location-arrow']"
            style="width: 10px; color: #000"
          />
          <span class="p-1 pe-sm-3">سنندج</span></router-link
        >
      </div>
      <div>
        <div class="m-2">
          <router-link to="/" class="ps-2 pe-0 ps-sm-5 pe-sm-1">
            <font-awesome-icon
              class=""
              :icon="['fa', 'user']"
              style="width: 10px; color: #000"
            />
            <span class="p-1 pe-sm-3">دیوار من</span></router-link
          >

          <router-link to="/" class="ps-2 pe-0 ps-sm-5 pe-sm-1">
            <font-awesome-icon
              class=""
              :icon="['fa', 'comments']"
              style="width: 10px; color: #000"
            /><span class="p-1 pe-sm-3">چت</span>
          </router-link>

          <router-link to="/" class="pe-1"> پشتیبانی</router-link>
          <span class="m-0 me-sm-2">
            <router-link to="/" class="btn btn-danger text-light"
              >ثبت آگهی</router-link
            ></span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
export default {
  components: { FontAwesomeIcon },
};
</script>

<style></style>
