<template>
    <div id="app" class="controls">
        <PadMachine />
        <Sequencer class="sequencer" />
    </div>
</template>

<script>

import PadMachine from './components/pad-machine/pad-machine.vue'

import Sequencer from './components/sequencer/sequencer.vue'

export default {
    name: 'app',
    components: {
        PadMachine,
        Sequencer
    }
}

</script>

<style>
.controls {
    display: flex;
    flex-direction: row;
}

.sequencer {
    padding-left: 100px;
}
</style>