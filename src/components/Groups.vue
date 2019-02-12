<template>
  <v-container>
    <v-layout text-xs-center wrap>
      <v-flex xs12 md10>
        <v-text-field v-model="newGroupName" label="Название группы" clearable outline class="font-weight-light " color="orange lighten-1"></v-text-field>
      </v-flex>
      <v-flex xs12 md2>
        <v-btn outline @click="addNewGroup">Создать</v-btn>       
      </v-flex>
      <v-expansion-panel expand>
      <v-expansion-panel-content v-for="(group, index) in getGroups" :key="index">
        <div slot="header" >
          <v-layout fill-height wrap>
            <v-flex class="name">
              <span class="font-weight-light">{{group}}</span>
            </v-flex>
            <v-flex xs1 aling-self-end> 
              <v-btn flat icon @click.native.stop="removeGroup(index)" class="delete-btn"><v-icon>delete</v-icon></v-btn>
            </v-flex>
          </v-layout>
        </div>
        <v-card class="grey darken-2">
          <v-layout align-content-space-around wrap>
            <v-flex xs12 md10>
              <v-text-field v-model="newNotes[index]" color="orange lighten-1" clearable label="Новая запись" class="font-weight-light new-note"></v-text-field>
            </v-flex>
            <v-flex xs12 md2>
            <v-btn outline class="create-btn" @click="addNewNote(index)">Создать</v-btn>       
            </v-flex>
          </v-layout>
        </v-card>
        <v-card v-for="(note, j) in allNotes[index]" :key="j" class="grey darken-2">
          <v-divider light></v-divider>
          <v-layout fill-height wrap>
            <v-flex xs11>
              <v-card-text class="notes">{{note}}</v-card-text>
            </v-flex>
            <v-flex xs1 aling-self-end> 
              <v-btn flat icon @click="removeNote(index, j)"><v-icon>close</v-icon></v-btn>
            </v-flex>
          </v-layout>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
    </v-layout>
  </v-container>
</template>

<script>
import store from "./../store";

export default {
  data: () => ({
    newGroupName: null,
    newNotes: {},
    allGroups: [],
    allNotes: []
  }),
  methods: {
    addNewGroup() {
      store.commit("addNewGroup", this.newGroupName);
      this.newGroupName = null;
      this.allGroups = store.state.groups;
      this.allNotes = store.state.notes;
    },
    removeGroup(groupId) {
      store.commit("deleteGroup", groupId);
      this.allGroups = store.state.groups;
      this.allNotes = store.state.notes;
    },
    removeNote(groupId, noteId) {
      store.commit("deleteNote", { groupName: groupId, noteId: noteId });
      this.allGroups = store.state.groups;
      this.allNotes = store.state.notes;
    },
    addNewNote(group) {
      store.commit("addNewNote", {
        groupId: group,
        note: this.newNotes[group]
      });
      this.newNotes[group] = null;
      this.allGroups = store.state.groups;
      this.allNotes = store.state.notes;
    }
  },
  computed: {
    getGroups() {
      return this.allGroups;
    },
    getNotes() {
      return this.allNotes;
    }
  },
  mounted: function() {
    this.allGroups = store.state.groups;
    this.allNotes = store.state.notes;
  }
};
</script>

<style lang="scss">
.notes {
  margin-left: 3%;
}
.name {
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: medium;
}
.new-note {
  padding-left: 5%;
  padding-right: 5px;
}
.create-btn {
  margin-top: 15px;
  margin-left: 20px;
}
</style>