<template>
    <div class="e-row">
        <slot></slot>
    </div>
</template>

<script>

export default {
  name: 'ERow',
  componentName: 'ERow',

  props: {

  }
}
</script>

<style lang="scss">
  @import '~@varcomcss';
  .e-row{
      position: relative;
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 20px;
      .e-col{
          position: relative;
      }

      @for $i from 1 to 24 {

          $width: (1 / 24 * $i * 100) * 1%;

          .e-col-span-#{$i}{
              width: $width;
          }

          .e-col-offset-#{$i}{
              margin-left: $width;
          }

          .e-col-push-#{$i}{
              left: $width;
          }

          .e-col-pull-#{$i}{
              right: $width;
          }
      }

      .e-col-span-remain{
          /*flex: 1;*/
      }
  }
</style>
