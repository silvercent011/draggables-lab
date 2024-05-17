<template>
  <div class="bg-zinc-200 min-h-svh flex flex-col">
    <div>
      <HDraggable>
        <div class="bg-blue-300 p-4">
          <h1 class="text-2xl">Drag me</h1>
        </div>
      </HDraggable>

      <CDraggable>
        <div class="bg-green-300 p-4">
          <h1 class="text-2xl">Drag me</h1>
        </div>
      </CDraggable>

      <ODraggable>
        <div class="bg-red-300 p-4">
          <h1 class="text-2xl">Drag me</h1>
        </div>
      </ODraggable>

      <RDraggable>
        <div class="bg-yellow-300 p-4">
          <h1 class="text-2xl">Drag me</h1>
        </div>
      </RDraggable>
    </div>
  </div>
</template>
