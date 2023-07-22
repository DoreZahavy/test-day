import { groupService } from "@/services/group.service.js";


export const dataStore = {
  strict: true,
  state() {
    return {
      groups: groupService.getGroups()
    }
  },
  getters: {
    groups({ groups }) {
      return groups;
    },

  },

  mutations: {

    applyDragGrp(state, { dragResult }) {
      const arr = state.groups
      const { removedIndex, addedIndex, payload } = dragResult;
      console.log(removedIndex, addedIndex, payload)

      if (removedIndex === null && addedIndex === null) return arr;
      const result = [...arr];
      let itemToAdd = payload;

      if (removedIndex !== null) {
        itemToAdd = result.splice(removedIndex, 1)[0];
      }
      if (addedIndex !== null) {
        result.splice(addedIndex, 0, itemToAdd);
      }
      state.groups = result
    },
    applyDragTask(state, { idx, dragResult }) {
      const arr = state.groups[idx].tasks
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
      state.groups[idx].tasks = result
    },

  },

  actions: {


  },
}
