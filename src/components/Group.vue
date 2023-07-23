<template>
    <section class="group-list">
        <!-- render group labels by labels array -->

        <section class="labels-grid">
            <div class="d-cmp-label" v-for="label in labels" :key="label">{{ label }}</div>
        </section>

        <!-- render tasks by cmp order -->
        <Container :get-child-payload="getChildPayload" group-name="1" @drop="onDropTask(idx, $event)">
            <Draggable v-for="task in group.tasks" :key="task.id">
                <section class="task">
                    <section class="d-cmp">
                        <component :is="cmp" :info="task[cmp]" v-for="(cmp, idx) in cmpOrder" :key="idx"></component>
                    </section>
                </section>
            </Draggable>
        </Container>
        <!-- render progress by progress array -->
        <!-- <section class="progress-grid">
            <div v-for="(item, idx) in progress" :key="idx">{{ item }}</div>
        </section> -->
    </section>
</template>

<!-- <Container >
    <Draggable class="grp-scroll" v-for="group in groups" :key="group">
      <Group :group="group"></Group>
    </Draggable>
  </Container>
   -->
<script>
import { Container, Draggable } from "vue3-smooth-dnd"
import TasktTitle from "@/components/dynamicCmps/TaskTitle.vue";
import Side from "@/components/dynamicCmps/Side.vue";
import Members from "@/components/dynamicCmps/Members.vue";
import Date from "@/components/dynamicCmps/Date.vue";
import Status from "@/components/dynamicCmps/Status.vue";
import Priority from "@/components/dynamicCmps/Priority.vue";
export default {

    props: ['group', 'idx'],
    created() {
    },
    computed: {
        cmpOrder() {
            return this.$store.getters.cmpOrder
        }
    },
    data() {
        return {
            // labelsPrint: [],

            // cmpOrder: ["side", "tasktTitle", "status", "priority", "members", "date"],
            labels: [null, "task", "status", "priority", "members", "date"],
            // labels: ["groupName", null, "status", "members", "priority", "date"],
            // progress: [null, null, "status", null, "priority", null],
        };
    },
    methods: {
        onDropTask(idx, dropResult) {

            this.$store.commit({ type: 'applyDragTask', idx, dragResult: dropResult })
        },
        onDropCmp(dropResult) {
            this.$store.commit({ type: 'applyDragCmp', dragResult: dropResult })

        },
        getChildPayload(index) {
            return this.group.tasks[index]
        }


    },
    components: {
        Side,
        TasktTitle,
        Members,
        Date,
        Status,
        Priority,
        Container, Draggable
    },
};
</script>

<style lang="scss">
.task {
    border-left: 1px solid black;

    background: white;
    display: grid;
    grid-template-columns: 33px 308px repeat(4, 150px);
    height: var(--row-height);
    align-items: center;

    /* grid-template-columns: 2% 200px 1fr 1fr 1fr 1fr; */
    /* justify-content: center; */
    &:hover {
        background-color: var(--task-hover);
    }
}

.d-cmp,
.d-cmp-label {
    &:nth-child(1) {
        position: sticky;
        z-index: 10;
        width: var(--row-height);
        left: 0;
    }

    &:nth-child(2) {
        position: sticky;
        z-index: 10;
        left: var(--row-height);
    }
}


.labels-grid,
.progress-grid {
    width: 100%;
    background: red;
    display: grid;
    grid-template-columns: 33px 308px repeat(4, 150px);

    /* grid-template-columns: 2% 2fr 1fr 1fr 1fr 1fr; */
    /* justify-content: center; */
}

.group-list {
    margin-top: 2em;
    overflow-y: scroll;



}
</style>