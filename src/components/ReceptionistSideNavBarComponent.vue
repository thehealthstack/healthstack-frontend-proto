<template>
  <div class="column is-4-tablet is-3-desktop is-2-widescreen">
    <nav class="menu">
      <ul class="menu-list">
        <li>
          <router-link to="registration">
            <span class="icon">
              <i class="fa fa-book"></i>
            </span>
            Register Patient
          </router-link>
        </li>
        <li>
          <router-link to="results">
            <span class="icon">
              <i class="fa fa-book"></i>
            </span>
            Result Delivery
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
    name: "ReceptionistSideNavBarComponent",
}
</script>

<style scoped>
  .menu-list a.router-link-active {
      background-color: #3273dc;
      color: #fff;
  }
</style>

