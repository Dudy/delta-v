<template>
    <div class="rockets">
        <h1>Rockets</h1>
        <ul>
            <li class="even" v-view="visibilityDeltav">
                <router-link to="/rockets/deltav">Delta-v</router-link>
            </li>
            <li class="odd">
                <router-link to="/rockets/rocketengine">Rocket Engine</router-link>
            </li>
            <li class="even">
                <router-link to="/rockets/singlestagerocket">Single Stage Rocket</router-link>
            </li>
            <li class="odd">
                <router-link to="/rockets/doublestagerocket">Double Stage Rocket</router-link>
            </li>
        </ul>

        <router-view/>
    </div>
</template>

<script>
    export default {
        name: 'Rockets',
        data() {
            return {
                deltavVisible: true,
                rocketengineVisible: false
            }
        },
        methods: {
            deltav() {
                console.log('deltav')
            },
            rocketengine() {
                console.log('rocket engine')
            }
        }
    }
</script>

<style scoped>
    ul {
        float: left;
        border: solid 1px blue;
        background-color: #d4d4d4;
        list-style: none;
        padding: 10px 10px 0 10px;
    }

    ul li {
        text-align: left;
        /*cursor: pointer;*/
        margin-bottom: 10px;
    }

    ul li.even {
      background-color: #c7c7c7;
    }

    ul li.odd {
      background-color: #bbbbbb;
    }

    ul li a {
      color: #222222;
      text-decoration: none;
    }
</style>
