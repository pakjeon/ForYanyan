<template>
    <div class="clock">
        this is a {{ clock }}
    </div>
</template>

<script>
    export default {
        name: 'clock',
        props: {
        },
        data() {
            return {
                clock: 'clock',
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
