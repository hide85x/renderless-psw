import { mount } from '@vue/test-utils'
import { render, screen, fireEvent } from '@testing-library/vue';
import PassCheck from '@/components/PassCheck.vue'
import {checkMatch, checkComplex} from '@/components/renderless-psw'
describe('PassCheck.vue', () => {
  it('macthes? ',async ()=> {
    render(PassCheck)
    // expect(checkMatch('b', 'b')).toBe(false)
    await fireEvent.update(
      screen.getByRole('password'), 'blebkebe'
    )
  await fireEvent.update(
      screen.getByRole('confirmPassword'), 'blebkebe'
    )
    console.log(screen.getByText('Submit').disabled)
    expect(screen.getByText('Submit').disabled).toBeFalsy()
  })
  // it('checkMatch should return fale, when paswords donest match', () => {
  //   expect(checkMatch('a','b')).toBe(false)
    
  // })
  // it('checkMatch should return true when psws matches', ()=> {
  //   expect(checkMatch('a','a')).toBe(true)

  // })
  // it('btn should be initialy disbaled', ()=> {
  //   const wrapper = mount(PassCheck, {
  //   });
  //   const btn= wrapper.find('button')
  //   expect(btn.attributes().disabled).toBe('')
    
  // })
  // it('btn should be active after filling inputs',async ()=> {
  //   const wrapper = mount(PassCheck, {
  //   });
  //   const btn= wrapper.find('button')
  //   const div= wrapper.find('.complexBar')
  //   console.log(div.properties)
  //   wrapper.vm.input.psw= "dupa"
  //   wrapper.vm.input.confirmPsw= "dupa"
  //   await wrapper.vm.$nextTick()
  //   console.log(btn.props())
    
  // })
})
