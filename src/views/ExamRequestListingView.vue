<template>
    <div>
        <navbar-component></navbar-component>
        <div class="container">
            <div class="columns">
                <sidenavbar-component></sidenavbar-component>
                <div class="column">
                    <searchbar-component></searchbar-component>
                    <examrequesttable-component></examrequesttable-component>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import sideNavBarComponent from "@/components/SideNavBarComponent.vue";
import examRequestsTableComponent from "@/components/ExamRequestsTableComponent.vue";
import searchBarComponent from "@/components/SearchBarComponent.vue";
import navBarComponent from "@/components/NavBarComponent.vue";

export default {
    name: "ExamRequestListingView",
    components: {
    "sidenavbar-component": sideNavBarComponent,
    "examrequesttable-component": examRequestsTableComponent,
    "searchbar-component": searchBarComponent,
    "navbar-component": navBarComponent
  }
}
</script>