<template>
    <div>
        <navbar-component></navbar-component>
        <div class="columns">
            <sidenavbar-component></sidenavbar-component>
            <div class="column">
                <div class="level" style="margin-top: 4%">
                    <examsearch-component></examsearch-component>
                    <createnewexamvaccin-component></createnewexamvaccin-component>
                </div>
                <examlistingtable-component></examlistingtable-component>
            </div>
        </div>
    </div>
</template>

<script>

import examSearchComponent from "@/components/ExamSearchComponent.vue";
import createNewExamVaccinComponent from "@/components/CreateNewExamVaccinComponent.vue";
import examListingRowComponent from "@/components/ExamListingRowComponent.vue";
import sideNavBarComponent from "@/components/SideNavBarComponent.vue";
import searchBarComponent from "@/components/SearchBarComponent.vue";
import examListingTableComponent from "@/components/ExamListingTableComponent.vue";
import navBarComponent from "@/components/NavBarComponent.vue";

export default {
    name: "ExamListingView",
    components: {
        "examsearch-component": examSearchComponent,
        "createnewexamvaccin-component": createNewExamVaccinComponent,
        "examlistingrow-component": examListingRowComponent,
        "sidenavbar-component": sideNavBarComponent,
        "searchbar-component": searchBarComponent,
        "examlistingtable-component": examListingTableComponent,
        "navbar-component": navBarComponent,
    }
};
</script>