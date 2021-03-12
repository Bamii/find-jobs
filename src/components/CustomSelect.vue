<template>
  <div class="">
    <label :for="label" class="block text-sm font-medium text-blue">{{ title }}</label>
    <select @change="$emit('update:modelValue', $event.target.value)" :id="label" :name="label" class="border border-blue w-full focus:ring-red-light focus:border-red-light h-full px-5 py-4 border-transparent bg-transparent sm:text-sm rounded-md">
      <option :key="option" v-for="option in options" :value="option">
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "CustomSelect",
  emits: ['update:modelValue'],
  props: ["label", "title", "modelValue", "placeholder", "disabled", "type", "options"]
}
</script>