<template>
    <div>
        <nav>
            <router-link to="/rockets">Rockets</router-link>
            <router-link to="/credits">Credits</router-link>
            <router-link to="/research">Research</router-link>
        </nav>
        <router-view/>
    </div>
</template>

<script>

</script>

<style scoped>
    nav {
        border: solid 1px black;
        background-color: #d4d4d4;
    }

    nav a {
        color: #222222;
        text-decoration: none;
        margin: 5px 20px;
    }
</style>