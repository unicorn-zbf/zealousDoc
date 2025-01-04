
<script>
import { computed, ref, useSlots, h } from 'vue'
export default {
  name: "zSpace",
  props: {
    direction: {
      type: String,
      default: 'horizontal'
    },
    size: [Number, String]
  },
  setup(props) {
    const $slot = useSlots();
    const slotList = ref([]);

    const styles = computed(() => {
      return {
        margin: `0 ${props.size}px ${props.size}px 0`
      }
    })

    $slot.default().forEach(item => {
      slotList.value.push(
        h(
          'div',
          {
            className: 'z-space-item',
            style: styles.value
          },
          item
        )
      )
    })

    return () => [
      h(
        "div",
        {
          className: `z-space-box z-space-${props.direction}`
        },
        slotList.value
      )
    ]
  }
}

</script>

<style lang="scss" scoped>
.z-space-box {
  width: 100%;
  display: inline-flex;
  gap: 10px;
  flex-direction: inherit;
  flex-wrap: wrap;
  margin-bottom: 15px;
}

.z-space-vertical {
  flex-direction: column;
  width: fit-content;
}

.z-space-item {
  width: fit-content;
}
</style>
