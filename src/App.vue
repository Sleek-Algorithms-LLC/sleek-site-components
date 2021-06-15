<template>
    <div class="main-wrapper">
        <div class="menu">
            <router-link to='/'>Home</router-link>
        </div>
        <div class="map-wrapper">
            <router-view />
        </div>
    </div>
</template>
<script>
export default {
    components: {},
}
</script>
<style scoped>
.main-wrapper {
    display: flex;
}

.menu {
    display: flex;
    flex-direction: column;
}

.menu .router-link-exact-active {
    background-color: lightgray;
}

.map-wrapper {
    height: 75vh;
    width: 100%;
}
</style>
