<template>
  <section class="section">
    <h1 class="h1">Chat</h1>
    <create-new :refCollection="refCollection" @created="handleCreated" />
    <hr />
    <h2 class="h2">Your Chat Channels</h2>
    <list-view :refCollection="refCollection" path="chat" />
    <source-link path="views/Chat.vue" />
  </section>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import { db } from "@/scripts/firebase";
import CreateNew from "@/components/CreateNew.vue";
import ListView from "@/components/ListView.vue";
import SourceLink from "@/components/SourceLink.vue";

export default defineComponent({
  components: {
    SourceLink,
    CreateNew,
    ListView
  },
  setup(props, context) {
    const refCollection = db.collection(`chatrooms`);

    const handleCreated = (id: string) => context.root.$router.push(`/chat/${id}`);

    return { refCollection, handleCreated }
  },
})
</script>