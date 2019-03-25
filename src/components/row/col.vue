<template>
    <div class="e-col"
        :class="[
            span ? `e-col-span-${span}` : 'e-col-span-remain',
            offset ? `e-col-offset-${offset}` : '',
            push ? `e-col-push-${push}` : '',
            pull ? `e-col-pull-${pull}` : ''
        ]">
        <slot></slot>
    </div>
</template>

<script>

export default {
  name: 'ECol',
  componentName: 'ECol',

  props: {
    span: [String, Number],
    offset: [String, Number],
    push: [String, Number],
    pull: [String, Number]
  }
}
</script>

<style>

</style>
