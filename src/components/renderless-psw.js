import { computed } from "vue";

export function checkMatch(psw, confirmPsw) {
  if (!psw || !confirmPsw) { return false }
  return psw !== confirmPsw ? false : true
}
export function checkComplex(val) {
  console.log(val.length)
  if (!val) { return 0 }
  if (val.length > 10) { return 3 };
  if (val.length > 6) { return 2 };
  if (val.length > 0) { return 1 };
  return 0
}
export default {
  props: {
    psw: {
      type: String,
    },
    confirmPsw: {
      type: String
    }
  },
  setup(props, { slots }) { //instead using ctx.slots we are using destructre

    const pswMatch = computed(() => checkMatch(props.psw, props.confirmPsw))
    const complex = computed(() => checkComplex(props.psw))
    return () => slots.default({
      complex: complex.value,
      match: pswMatch.value
    });
  },
};