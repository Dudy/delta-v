<template>
  <div class="rockets">
    <h1>Rockets</h1>
    <ul>
      <li @click="deltav" v-show="deltavVisible">Delta-v</li>
      <li @click="rocketengine" v-show="rocketengineVisible">Rocket Engine</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Rockets',
    data() { return {
      deltavVisible: true,
      rocketengineVisible: false
    }},
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
    cursor: pointer;
    margin-bottom: 10px;
  }
</style>
