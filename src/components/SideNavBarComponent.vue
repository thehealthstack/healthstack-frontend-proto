<template>
  <div class="column is-4-tablet is-3-desktop is-2-widescreen" style="margin-top: 4%">
    <nav class="menu">
      <ul class="menu-list">
        <li>
          <router-link :to="{ path: '/:laboratoryname/labtech/:username'}" exact-active-class="is-active">
            <span class="icon">
              <i class="fa fa-book"></i>
            </span>
            Exam Requests
          </router-link>
        </li>
        <li>
          <router-link
            :to="{ path: '/:laboratoryname/labtech/:username/exams'}"
            exact-active-class="is-active"
          >
            <span class="icon">
              <i class="fa fa-book"></i>
            </span>
            Exam Listing
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>