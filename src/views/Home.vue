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
            <div class="field is-grouped is-grouped-multiline">
              <div class="control has-icons-left is-expanded">
                <input class="input" type="email" placeholder="Email" />
                <span class="icon is-small is-left">
                  <i class="fas fa-envelope"></i>
                </span>
              </div>
              <div class="control has-icons-left is-expanded">
                <input class="input" type="password" placeholder="Password" />
                <span class="icon is-small is-left">
                  <i class="fas fa-lock"></i>
                </span>
              </div>
              <div class="control is-expanded">
                <button class="button is-link">Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <section class="hero">
      <div class="hero-body">
        <div class>
          <div class="level signup-section">
            <div class="level-left">
              <p class="text has-text-white is-size-3">
                We help you optimize your workflow,
                <br />improve your customer experience
                <br />and save
              </p>
            </div>
            <div class="level-right">
              <form class="box">
                <div class="field is-grouped is-grouped-multiline">
                  <div class="control is-expanded">
                    <input class="input" type="text" placeholder="First Name" required />
                  </div>
                  <div class="control is-expanded">
                    <input class="input" type="text" placeholder="Last Name" required />
                  </div>
                </div>
                <div class="field">
                  <div class="control">
                    <input class="input" type="email" placeholder="Email" required />
                  </div>
                </div>
                <div class="field">
                  <div class="control">
                    <input
                      class="input"
                      type="tel"
                      placeholder="Phone Number with Country Code"
                      required
                    />
                  </div>
                </div>
                <div class="field">
                  <div class="control">
                    <div class="select is-fullwidth">
                      <select>
                        <option>Lab Administrator</option>
                        <option>Cashier</option>
                        <option>Receptionist</option>
                        <option>Clinical Pathologist</option>
                        <option>lab technician</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="field">
                  <div class="control">
                    <input class="input" type="password" placeholder="Password" required />
                  </div>
                </div>
                <div class="field">
                  <div class="control">
                    <input
                      class="input"
                      type="password"
                      placeholder="Password Confirmation"
                      required
                    />
                  </div>
                </div>
                <div class="field">
                  <div class="control">
                    <button class="button is-link">Signup</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="columns is-vcentered">
      <div class="column">
        <h1 class="title has-text-centered">Workflow Management</h1>
        <p class="has-text-centered">
          This service allows you to accept electronic payment from your
          customers whatever payment method they are using.
        </p>
      </div>
      <div class="column">
        <h1 class="title has-text-centered">Patient Data Management</h1>
        <p class="has-text-centered">
          This service allows you to accept electronic payment from your
          customers whatever payment method they are using.
        </p>
      </div>
      <div class="column">
        <h1 class="title has-text-centered">Billing Management</h1>
        <p class="has-text-centered">
          This service will give you the tools to schedule your customers whenever
          they come for a medical examination.
        </p>
      </div>
      <div class="column">
        <h1 class="title has-text-centered">Medical Result Notification & Delivery</h1>
        <p class="has-text-centered">
          This service allows you to use Sms and Email to send your
          customers' medical exam results once they are ready.
        </p>
      </div>
    </div>
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
