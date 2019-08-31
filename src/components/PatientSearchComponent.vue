<template>
  <div class>
    <div class="field has-addons">
      <p class="control">
        <span class="select">
          <select>
            <option selected disabled>Search By</option>
            <option>Fist Name</option>
            <option>Last Name</option>
            <option>Email</option>
            <option>Phone Number</option>
          </select>
        </span>
      </p>
      <p class="control is-expanded">
        <input class="input" type="text" placeholder="Find a patient..." />
      </p>
      <p class="control">
        <a class="button is-link">Search</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
    name: "PatientSearchComponent"
}
</script>