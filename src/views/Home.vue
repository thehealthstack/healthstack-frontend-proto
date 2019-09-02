<template>
  <div>
    <div class="content">
      <nav class="navbar is-transparent" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item" href="index.html">
            <strong class="brand">HealthStack</strong>
          </a>

          <a
            role="button"
            class="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbar"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
      </nav>
      <section class="hero is-medium">
        <div class="hero-body">
          <div class="container">
            <h1 class="title has-text-white is-size-2">
              Modern EHR Software For Medical Diagnostic Laboratories In Africa
            </h1>
            <h2 class="subtitle has-text-white is-5">
              HealthStack helps care providers to efficiently manage their workflow, <br>offer good customer experience and reduce cost
            </h2>
            <a class="is-link button is-large" href="#" @click="callModal">Request Demo</a>
            <requestdemo-component :isActive="isActive" @close="closeModal"></requestdemo-component>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="tile is-ancestor">
          <div class="tile is-parent">
            <article class="tile is-child box">
              <h1 class="title">Workflow Management</h1>
              <p class="subtitle">
                Healthstack allows you to easily & quickly organize your workflow and provide data to support in decision making
              </p>
            </article>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child box">
              <h1 class="title">Patient Data Management</h1>
              <p class="subtitle">
                Healthstack provides you with the tools to efficiently manage patients data throught the whole visit
              </p>
            </article>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child box">
              <h1 class="title">Billing Management</h1>
              <p class="subtitle">
                Healthstack provide you with the tools for billing customers for the services that you offer
              </p>
            </article>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child box">
              <h1 class="title">Medical Result Notification & Delivery</h1>
              <p class="subtitle">
                Healthstack enables you to notify patients through sms when their results are ready & deliver results to them via email
              </p>
            </article>
          </div>
        </div>
      </section>
    </div>
    
    <footer class="footer has-background-black-ter is-fixed-bottom" id="myfooter">
      <div class="columns">
        <div class="column">
          <h1 class="is-vcentered footer-brand">HealthStack</h1>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import requestDemoComponent from "@/components/RequestDemoComponent.vue";

export default {
  name: "home",
  data(){
    return {
      isActive: false,
    }
  },
  methods: {
    callModal(){
      this.isActive = true;
    },
    closeModal(){
      this.isActive = false;
    }
  },
  components: {
    "requestdemo-component": requestDemoComponent,
  }
};
</script>
