<template>
    <nav class="level navbar is-light is-marginless">
        <div class="level-left">
            <div class="navbar-brand">
                <a class="navbar-item" href="index.html">
                <strong class="brand">HealthStack</strong>
                </a>
            </div>
            <div class="navbar-brand">
                <router-link to="/pasteur/receptionist/totopasteur/registration">
                    <span class="navbar-item">
                        <strong class="brand">Receptionist</strong>
                    </span>
                </router-link>
            </div>
            <div class="navbar-brand">
                <router-link to="/pasteur/cashier/totopasteur">
                    <span class="navbar-item">
                        <strong class="brand">Cashier</strong>
                    </span>
                </router-link>
            </div>
            <div class="navbar-brand">
                <router-link to="/pasteur/labtech/totopasteur">
                    <span class="navbar-item">
                        <strong class="brand">Lab Tech</strong>
                    </span>
                </router-link>
            </div>
            <div class="navbar-brand">
                <router-link to="/pasteur/biologist/totopasteur">
                    <span class="navbar-item">
                        <strong class="brand">Biologist</strong>
                    </span>
                </router-link>
            </div>
        </div>
        <div class="level-right">
            <div class="navbar-end">
            <div class="navbar-item has-dropdown is-hoverable">
                <div class="navbar-link">Vladimir Kwasi</div>
                <div class="navbar-dropdown">
                </div>
            </div>
            </div>
        </div>
  </nav>
</template>

<script>
export default {
    name: "NavBarComponent"
}
</script>