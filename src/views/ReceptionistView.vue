<template>
  <div>
    <navbar-component></navbar-component>
    <div class="container" style="margin-top: 3.5rem;">
      <div class="columns">
        <sidenavbar-component></sidenavbar-component>
        <div class="column">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import navBarComponent from "@/components/NavBarComponent.vue";
import receptionistSideNavBarComponent from "@/components/ReceptionistSideNavBarComponent.vue";
import patientRegistrationComponent from "@/components/PatientRegistrationComponent.vue";
import resultRenderingComponent from "@/components/ResultRenderingComponent.vue";
export default {
    name: "ReceptionistView",
    components: {
        "navbar-component": navBarComponent,
        "sidenavbar-component": receptionistSideNavBarComponent,
        "patientregistration-component": patientRegistrationComponent,
        "resultrendering-component": resultRenderingComponent
    }
}
</script>