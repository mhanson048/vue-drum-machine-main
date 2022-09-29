<template>
    <div>
        <h1>
            Sequencer
        </h1>

        <div class="sequenceContainer">
            <div class="playButton" style="padding-bottom:10px;">
                <button v-on:click='playSamples'>
                    {{playing ? 'Stop' : 'Play'}}
                </button>

                <input v-model='playSpeed' />
            </div>

            <TrackPads :sample="bass" label="Bass" :padLength="padLength" :padIndex="padIndex" ref="bassPads" />
            <TrackPads :sample="snare" label="Snare" :padLength="padLength" :padIndex="padIndex" ref="snarePads" />
            <TrackPads :sample="hhClosed" label="HH Closed" :padLength="padLength" :padIndex="padIndex" ref="hhClosedPads" />
            <TrackPads :sample="hhOpen" label="HH Open" :padLength="padLength" :padIndex="padIndex" ref="hhOpenPads" />
            <TrackPads :sample="ride" label="Ride" :padLength="padLength" :padIndex="padIndex" ref="ridePads" />
            <TrackPads :sample="crash" label="Crash" :padLength="padLength" :padIndex="padIndex" ref="crashPads" />
            <TrackPads :sample="china" label="China" :padLength="padLength" :padIndex="padIndex" ref="chinaPads" />
            <TrackPads :sample="tom1" label="Tom1" :padLength="padLength" :padIndex="padIndex" ref="tom1Pads" />
            <TrackPads :sample="tom2" label="Tom2" :padLength="padLength" :padIndex="padIndex" ref="tom2Pads" />

        </div>
    </div>
</template>

<script>

import TrackPads from './track-pads/track-pads.vue';
const bass = require('../../assets/Bass.mp3');
const snare = require('../../assets/Snare.mp3');
const hhClosed = require('../../assets/Hi Hat Closed.mp3');
const hhOpen = require('../../assets/Hi Hat Open.mp3');
const ride = require('../../assets/Ride.mp3');
const crash = require('../../assets/Crash.mp3');
const china = require('../../assets/China.mp3');
const tom1 = require('../../assets/Tom 1.mp3');
const tom2 = require('../../assets/Tom 2.mp3');

let playing = false;
let padLength = 16;
let interval = null;
let padIndex = 0;
let playSpeed = 250;

export default {
    name: 'MySequencer',
    data: () => ({
        bass,
        snare,
        hhClosed,
        hhOpen,
        ride,
        crash,
        china,
        tom1,
        tom2,

        padLength,
        interval,
        playing,
        padIndex,
        playSpeed
    }),
    components: {
        TrackPads
    },
    methods: {
        playSamples() {
            this.playing = !this.playing;
            if (this.playing) {
                interval = setInterval(() => {
                    this.$refs.bassPads.playSample(this.padIndex);
                    this.$refs.snarePads.playSample(this.padIndex);
                    this.$refs.hhClosedPads.playSample(this.padIndex);
                    this.$refs.hhOpenPads.playSample(this.padIndex);
                    this.$refs.ridePads.playSample(this.padIndex);
                    this.$refs.crashPads.playSample(this.padIndex);
                    this.$refs.chinaPads.playSample(this.padIndex);
                    this.$refs.tom1Pads.playSample(this.padIndex);
                    this.$refs.tom2Pads.playSample(this.padIndex);
                    this.padIndex = (this.padIndex >= this.padLength - 1) ? 0 : this.padIndex + 1;
                }, this.playSpeed);
            }
            else {
                clearInterval(interval);
                this.padIndex = 0;
            }
        }
    },
    watch: {
        playSpeed: function(val, oldVal) {
            const val1 = val;
            const oldVal1 = oldVal;
            val1 + oldVal1;
        }
    }
}

</script>

<style>
@import './sequencer.css';
</style>