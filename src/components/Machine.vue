<template>
    <div>
        <h1>Drum Machine</h1>

        <div class="sampleContainer">
            <div class="row">
                <div v-on:click='playBass' class="samplePad">
                    Bass
                </div>
                <div v-on:click='playSnare' class="samplePad">
                    Snare
                </div>
                <div v-on:click='playHiHatClosed' class="samplePad">
                    Hi Hat Closed
                </div>
            </div>
            <div class="row">
                <div v-on:click='playHiHatOpen' class="samplePad">
                    Hi Hat Open
                </div>
                <div v-on:click='playRide' class="samplePad">
                    Ride
                </div>
                <div v-on:click='playCrash' class="samplePad">
                    Crash
                </div>
            </div>
            <div class="row">
                <div v-on:click='playChina' class="samplePad">
                    China
                </div>
                <div v-on:click='playTom1' class="samplePad">
                    Tom 1
                </div>
                <div v-on:click='playTom2' class="samplePad">
                    Tom 2
                </div>
            </div>
        </div>
    </div>
</template>

<script>

const bass = require('../assets/Bass.mp3');
const snare = require('../assets/Snare.mp3');
const hiHatClosed = require('../assets/Hi Hat Closed.mp3');
const hiHatOpen = require('../assets/Hi Hat Open.mp3');
const ride = require('../assets/Ride.mp3');
const crash = require('../assets/Crash.mp3');
const china = require('../assets/China.mp3');
const tom1 = require('../assets/Tom 1.mp3');
const tom2 = require('../assets/Tom 2.mp3');

export default {
    name: 'Machine',
    data: () => ({
        bass,
        snare,
        hiHatClosed,
        hiHatOpen,
        ride,
        crash,
        china,
        tom1,
        tom2
    }),
    methods: {
        playBass: function () {
            let bass = new Audio(this.bass);
            bass.addEventListener("canplaythrough", () => {
                bass.play();
            });
        },

        playSnare: function () {
            let snare = new Audio(this.snare);
            snare.addEventListener("canplaythrough", () => {
                snare.play();
            });
        },

        playHiHatClosed: function () {
            let hiHatClosed = new Audio(this.hiHatClosed);
            hiHatClosed.addEventListener("canplaythrough", () => {
                hiHatClosed.play();
            });
        },

        playHiHatOpen: function () {
            let hiHatOpen = new Audio(this.hiHatOpen);
            hiHatOpen.addEventListener("canplaythrough", () => {
                hiHatOpen.play();
            });
        },

        playRide: function () {
            let ride = new Audio(this.ride);
            ride.addEventListener("canplaythrough", () => {
                ride.play();
            });
        },

        playCrash: function () {
            let crash = new Audio(this.crash);
            crash.addEventListener("canplaythrough", () => {
                crash.play();
            });
        },

        playChina: function () {
            let china = new Audio(this.china);
            china.addEventListener("canplaythrough", () => {
                china.play();
            });
        },

        playTom1: function () {
            let tom1 = new Audio(this.tom1);
            tom1.addEventListener("canplaythrough", () => {
                tom1.play();
            });
        },

         playTom2: function () {
            let tom2 = new Audio(this.tom2);
            tom2.addEventListener("canplaythrough", () => {
                tom2.play();
            });
        },
    }
}

</script>

<style>
@import './machine.css';
</style>