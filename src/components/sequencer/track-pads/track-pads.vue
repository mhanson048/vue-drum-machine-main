<template>
    <div class="sequenceContainer">
        <div class="padControls">
            <span class="trackLabel">
                {{label}}
            </span>
            <!-- <div v-for="(pad, index) in pads" :key="index" v-bind:class="['{{ index == padIndex}}' ? 'activePad' : '']"> -->
            <div v-for="(pad, index) in pads" :key="index" :class="`${index == padIndex ? 'activePad' : ''}`">
                <input type="checkbox" v-model="pads[index]" />
            </div>
        </div>
    </div>
</template>

<script>

let label = '';
let playing = false;
let sample = '';
let padIndex;

export default {
    name: 'TrackPads',
    props: {
        sample,
        label,
        padLength: {
            type: Number,
            default: 16
        },
        padIndex
    },
    data() {
        return {
            pads: Array(this.padLength).fill(false),
            playing
        }
    },
    methods: {
        playSample(index) {
            this.padIndex = index;
            if (this.pads[index]) {
                let sample = new Audio(this.sample);
                sample.addEventListener("canplaythrough", () => {
                    sample.play();
                });
            }
        },
    }
}

</script>

<style>
@import './track-pads.css';
</style>