<template>
  <div class="">
    <label :for="label" class="block text-sm font-medium text-blue">{{ title }}</label>
    <div class="mt-1 relative rounded-md shadow-sm">
      <input
        :type="type ? type : 'text'"
        :name="label"
        :id="label"
        :value="modelValue"
        :placeholder="placeholder"
        @input="$emit('update:modelValue', $event.target.value)"
        :disabled="disabled"
        class="border border-blue focus:border-red-light w-full px-5 py-4 sm:text-sm rounded-md"
        :class="{ 'cursor-disabled': disabled }"
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "CustomInput",
  emits: ["update:modelValue"],
  props: ["label", "title", "modelValue", "placeholder", "disabled", "type"]
}
</script>