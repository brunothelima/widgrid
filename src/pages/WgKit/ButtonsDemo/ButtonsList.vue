<i18n>
  {
    "pt": {
      "button": "Botão",
      "icon-left": "Icone a esquerda",
      "icon-right": "Icone a direita",
      "hover": "Foco",
      "active": "Ativo",
      "disabled": "Desativado"
    },
    "en": {
      "button": "Button",
      "icon-left": "Icon Left",
      "icon-right": "Icon Right",
      "hover": "Hover",
      "active": "Active",
      "disabled": "Disabled"
    }
  }
</i18n>

<template>
  <div :class="`${size}-buttons-list`">
    <wg-button :size="size" :model="model">{{ $t('button') }}</wg-button>
    <wg-button :size="size" :model="model" icon="icon-form">{{ $t('icon-left') }}</wg-button>
    <wg-button :size="size" :model="model" :reverse="true" icon="icon-form">{{ $t('icon-right') }}</wg-button>
    <wg-button :size="size" :model="model" :hover="true">{{ $t('hover') }}</wg-button>
    <wg-button :size="size" :model="model" :active="true">{{ $t('active') }}</wg-button>
    <wg-button :size="size" :model="model" :disabled="true">{{ $t('disabled') }}</wg-button>
  </div>
</template>

<script>
import WgButton from '@/components/WgButton'

export default {
  name: 'ButtonsList',
  components: {
    WgButton
  },
  props: {
    size: String,
    title: String,
    model: {
      type: String,
      default: 'glassy'
    }
  }
}
</script>

<style lang="scss" scoped>
[class*="-buttons-list"] {
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
}
</style>
