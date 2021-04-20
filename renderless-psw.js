import { computed } from "vue";

export default {
  props: [],
  setup(props, {slots}) { //instead using ctx.slots we are using destructre
    
    return () => slots.default({
        complex:5
      });
  },
};