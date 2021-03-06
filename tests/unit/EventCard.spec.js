import { mount } from '@vue/test-utils'
import EventCard from '@/components/EventCard.vue'

describe('EventCard', () => {
  it(`renders the event's data successfully`, () => {
    const event = {
      id: 1,
      time: '2',
      date: '3',
      title: '4',
    }

    const wrapper = mount(EventCard, {
      props: {
        event,
      },
    })

    const wrapperHtml = wrapper.html()

    expect(wrapperHtml).toContain(event.time)
    expect(wrapperHtml).toContain(event.date)
    expect(wrapperHtml).toContain(event.title)
  })
})
