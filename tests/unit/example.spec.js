import { shallowMount } from '@vue/test-utils'
import PassCheck from '@/components/PassCheck.vue'
import {checkMatch, checkComplex} from '@/components/renderless-psw'
describe('PassCheck.vue', () => {
  it('checkMatch should return fale, when paswords donest match', () => {
    expect(checkMatch('a','b')).toBe(false)
    
  })
  it('checkMatch should return true when psws matches', ()=> {
    expect(checkMatch('a','a')).toBe(true)

  })
})
