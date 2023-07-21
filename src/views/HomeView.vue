<script>
import { groupService } from "@/services/group.service.js";
import Group from '@/components/Group.vue'
import { Container, Draggable } from "vue3-smooth-dnd"
export default{
  data(){
    return {
      groups:[]
    }
  },
  components: {
    Group,
    Container, 
    Draggable
  },
  created(){
    const grps = groupService.getGroups()
    this.groups = grps
  },
  methods:{
    onDrop(dropResult){
      this.groups = this.applyDrag(this.groups, dropResult);
    },
    applyDrag(arr, dragResult){
      const { removedIndex, addedIndex, payload } = dragResult;

      if (removedIndex === null && addedIndex === null) return arr;
      const result = [...arr];
      let itemToAdd = payload;
      
      if (removedIndex !== null) {
        itemToAdd = result.splice(removedIndex, 1)[0];
      }
      if (addedIndex !== null) {
        result.splice(addedIndex, 0, itemToAdd);
      }
      return result;
    }
  }
}
</script>

<template>
  <Container class="groups">
    <Draggable class="grp-scroll" v-for="group in groups" :key="group">
      <Group :group="group"></Group>
    </Draggable>
  </Container>
</template>

<style>
.grp-scroll{
  overflow-y: scroll;
}
</style>
