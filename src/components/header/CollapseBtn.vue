<template>
  <p>
    <a
      class="w-100"
      data-bs-toggle="collapse"
      href="#collapseExample"
      role="button"
      aria-expanded="false"
      aria-controls="collapseExample"
    >
      <slot name="Coltitle"></slot>
    </a>
  </p>
  <div class="collapse position-relative text-secondary" id="collapseExample">
    <!-- <div
      class="position-absolute d-flex flex-column"
      style="top: 45px; right: 30px"
    >
      <span style="height: 5px">.</span><span style="height: 5px">.</span
      ><span style="height: 5px">.</span>
    </div> -->
    <slot name="colcontainer1"></slot>
    <slot name="colcontainer2"></slot>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
