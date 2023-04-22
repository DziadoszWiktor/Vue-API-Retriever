<template>
  <div class="wrapper">
    <page-header></page-header>
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
      <div class="container-fluid">
        <page-nav>
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'Home' }">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'About' }">About</router-link>
            </li>
          </ul>
        </page-nav>
      </div>
    </nav>
    <page-main>
      <router-view></router-view>
    </page-main>
    <page-footer></page-footer>
  </div>
</template>

<script setup>
</script>

<style>
</style>

