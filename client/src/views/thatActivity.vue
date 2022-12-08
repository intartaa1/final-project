<template>
    <section class="section">
        <div>
            <h1 class="title">Your Activities</h1>
            <h2>Check out the fun and cool ways you've been keeping yourself active lately!</h2>
        </div>
    </section>
    <section class="section">
        <div class="container">
            <strong>Antonio Intartaglia</strong> @intartaa1 Sunday, December 4th, 2022
            <p>Jogged along the Rail Trail</p>
           <img src ="../assets/jog.JPG" alt = "jog" />
        </div>
    </section>
    <section class="section">
        <div class="container">
            <strong>Antonio Intartaglia</strong> @intartaa1 Wednesday, November 30th, 2022
            <p>Skateboarding at the park on my day off from classes!</p>
            <img src="../assets/skateboarding.JPG" alt = "skateboarding" />
        </div>
    </section>
</template>

<script>
    export default {
        name: "Activities"
    }
</script>

<style scoped>
    .section {
        background-color: #f5f5f5;
    }
</style>