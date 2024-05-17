<script lang="ts">
import type { CSSProperties } from "vue";

export default defineComponent({
  data: () => ({
    x: 0,
    y: 0,
  }),
  methods: {
    updatePosition(event: DragEvent) {
      this.x = event.clientX;
      this.y = event.clientY;
    },
    onDragstart(event: DragEvent) {
      const img = new Image();
      img.src =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/wcAAgcBApyWIjEAAAAASUVORK5CYII=";
      event.dataTransfer?.setDragImage(img, 0, 0);
      event.dataTransfer!.dropEffect = "move";

      this.updatePosition(event);
    },
    onDrag(event: DragEvent) {
      this.updatePosition(event);
    },
    onDragend(event: DragEvent) {
      this.updatePosition(event);
    },
  },
  computed: {
    style() {
      return {
        position: "fixed" as CSSProperties["position"],
        left: `${this.x}px`,
        top: `${this.y}px`,
        cursor: "move",
      };
    },
  },
});
</script>

<template>
  <div
    :draggable="true"
    @dragstart="onDragstart"
    @drag="onDrag"
    @dragend="onDragend"
    :style
  >
    <slot />
  </div>
</template>
