<template>
  <div>
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

      <div id="navbar" class="navbar-menu">
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="field is-grouped">
              <p class="control">
                <a class="button">
                  <span class="icon">
                    <i class="fas fa-users"></i>
                  </span>
                  <span>
                    Log in
                  </span>
                </a>
              </p>
              <p class="control">
                <a class="button is-link" href="#">
                  <span>Sign up</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <section class="hero is-medium">
      <div class="hero-body">
        <div class="container">
          <h1 class="title has-text-white">
            We help you optimize your workflow, improve your customer experience and save
          </h1>
          <h2 class="subtitle has-text-white">
            Medium subtitle
          </h2>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="tile is-ancestor">
        <div class="tile is-parent">
          <article class="tile is-child box">
            <h1 class="title">Workflow Management</h1>
            <p class="subtitle">
              This service allows you to accept electronic payment from your
              customers whatever payment method they are using.
            </p>
          </article>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child box">
            <h1 class="title">Patient Data Management</h1>
            <p class="subtitle">
              This service allows you to accept electronic payment from your
              customers whatever payment method they are using.
            </p>
          </article>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child box">
            <h1 class="title">Billing Management</h1>
            <p class="subtitle">
              This service allows you to accept electronic payment from your
              customers whatever payment method they are using.
            </p>
          </article>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child box">
            <h1 class="title">Medical Result Notification & Delivery</h1>
            <p class="subtitle">
              This service allows you to accept electronic payment from your
              customers whatever payment method they are using.
            </p>
          </article>
        </div>
      </div>
    </section>
    <footer class="footer has-background-black-ter">
      <div class="columns">
        <div class="column">
          <h1 class="is-vcentered footer-brand">HealthStack</h1>
        </div>
        <div class="column">
          <h3>Products</h3>
          <ul>
            <li>Delivery</li>
            <li>Payment</li>
            <li>Scheduling</li>
          </ul>
        </div>
        <div class="column">
          <h3>Company</h3>
          <ul>
            <li>About</li>
            <li>Team</li>
            <li>Careers</li>
            <li>Customers</li>
          </ul>
        </div>
        <div class="column">
          <h3>Resource</h3>
          <ul>
            <li>Contact</li>
            <li>Support</li>
            <li>Terms</li>
          </ul>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>

export default {
  name: "home",
};
</script>
