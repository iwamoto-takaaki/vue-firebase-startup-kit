<template>
  <form class="m-b-8" @submit.prevent="handleCreate">
    <h2 class="h2">Create New</h2>
    <b-input v-model="title.value" class="m-b-4"></b-input>
    <b-button type="submit" @click="handleCreate" icon-left="plus" />
  </form>
</template>

<script lang="ts">
import { defineComponent, ref, PropType } from "@vue/composition-api";
import { db, firestore } from "@/scripts/firebase";

export default defineComponent ({
  props: {
    refCollection: {
      type: Object as PropType<firebase.firestore.CollectionReference>,
      required: true,
    }
  },
  setup(props, context) {
    const title = ref<string>("");

    const handleCreate = async () => {
      const doc = await props.refCollection.add({
        owner: context.root.$store.state.user.uid,
        ownerName: context.root.$store.state.user.displayName,
        timeCreated: firestore.FieldValue.serverTimestamp(),
        title: title.value
      });
    
      title.value = "";
      context.emit("created", doc.id);
    }

    return { title, handleCreate }
  },
})
</script>
