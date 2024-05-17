import type { CSSProperties, SetupContext } from "vue";
function NewDraggable(_: any, { slots }: SetupContext) {
  const x = ref(0);
  const y = ref(0);

  const updatePosition = (event: DragEvent) => {
    x.value = event.clientX;
    y.value = event.clientY;
  };

  const onDragstart = (event: DragEvent) => {
    const img = new Image();
    img.src =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/wcAAgcBApyWIjEAAAAASUVORK5CYII=";
    event.dataTransfer?.setDragImage(img, 0, 0);
    event.dataTransfer!.dropEffect = "move";

    updatePosition(event);
  };

  const onDrag = (event: DragEvent) => {
    updatePosition(event);
  };

  const onDragend = (event: DragEvent) => {
    updatePosition(event);
  };

  const style = computed(() => ({
    position: "fixed" as CSSProperties["position"],
    left: `${x.value}px`,
    top: `${y.value}px`,
    cursor: "move",
  }));

  return () => (
    <div
      draggable={true}
      onDragstart={onDragstart}
      onDrag={onDrag}
      onDragend={onDragend}
      style={style.value}
    >
      {slots.default ? slots.default() : undefined}
    </div>
  );
}

export default defineComponent(NewDraggable);
