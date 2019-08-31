<template>
  <div>
    <navbar-component></navbar-component>
    <div class="container" style="margin-top: 3.5rem;">
      <div class="columns">
        <div class="column">
          <paymentrequest-listing-component></paymentrequest-listing-component>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navBarComponent from "@/components/NavBarComponent.vue";
import paymentRequestListingComponent from "@/components/PaymentRequestListingComponent.vue";

export default {
    name: "CashierView",
    components: {
        "navbar-component": navBarComponent,
        "paymentrequest-listing-component": paymentRequestListingComponent
    }
}
</script>