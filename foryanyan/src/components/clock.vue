<template>
    <div class="clock">
        {{ d }} Days {{ h }} Hours {{ m }} Minutes {{ s }} Seconds
    </div>
</template>

<script>
    export default {
        name: 'clock',
        props: {
          d: {
            default: 0,
          },
          h: {
            default: 0,
          },
          m: {
            default: 0,
          },
          s: {
            default: 0,
          },
        },
        data() {
            return {
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .clock {
        font-size: 50px;
        /*background-color: aqua;*/
        color: pink;
        margin: 0 auto;
        padding: 50px 0;
        text-align: center;

    }
</style>
