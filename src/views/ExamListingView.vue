<template>
    <div>
        <navbar-component></navbar-component>
        <div class="columns">
            <sidenavbar-component></sidenavbar-component>
            <div class="column">
                <div class="level">
                    <examsearch-component></examsearch-component>
                    <createnewexam-component></createnewexam-component>
                    <createnewvaccin-component></createnewvaccin-component>
                </div>
                <examlistingtable-component></examlistingtable-component>
            </div>
        </div>
    </div>
</template>

<script>

import examSearchComponent from "@/components/ExamSearchComponent.vue";
import createNewExamComponent from "@/components/CreateNewExamComponent.vue";
import createNewVaccinComponent from "@/components/CreateNewVaccinComponent.vue";
import examListingRowComponent from "@/components/ExamListingRowComponent.vue";
import sideNavBarComponent from "@/components/SideNavBarComponent.vue";
import searchBarComponent from "@/components/SearchBarComponent.vue";
import examListingTableComponent from "@/components/ExamListingTableComponent.vue";
import navBarComponent from "@/components/NavBarComponent.vue";

export default {
    name: "ExamListingView",
    components: {
        "examsearch-component": examSearchComponent,
        "createnewexam-component": createNewExamComponent,
        "createnewvaccin-component": createNewVaccinComponent,
        "examlistingrow-component": examListingRowComponent,
        "sidenavbar-component": sideNavBarComponent,
        "searchbar-component": searchBarComponent,
        "examlistingtable-component": examListingTableComponent,
        "navbar-component": navBarComponent,
    }
};
</script>