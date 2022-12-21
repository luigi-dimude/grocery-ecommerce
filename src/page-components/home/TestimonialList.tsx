import Stack from '@mui/material/Stack'
import TestimonialCard from '../../shared-components/TestimonialCard'

const TestimonialList = () => {
  return (
    <Stack direction='row' justifyContent='center' flexWrap='wrap' gap={8}>
      {
        testimonials.map((testimonial) => {
          return (
            <TestimonialCard {...testimonial} key={testimonial.id} />
          )
        })
      }
    </Stack>
  )
}

const testimonials = [
  {
    id: 'home_testimonial_1',
    testimonial: 'Building my order basket and getting it delivered has been a life safer . Once in a while i update the basket and regularly get alerts when the basket is full before my  delivery.',
    client_name: 'Gobery James',
    img_src: '/testimonial/Testimonial-1.png'
  },
  {
    id: 'home_testimonial_2',
    testimonial: 'The prices are amazing, similar and even less that the market price is so unbeatable for me. Just knowing i have my deliveries on auto isa dream come true, no more stressful market runs.',
    client_name: 'Peter Obi',
    img_src: '/testimonial/Testimonial-2.png'
  },
  {
    id: 'home_testimonial_3',
    testimonial: 'Being a foreigner and navigating the Nigerian local food market was a difficult task for me, foodifymarket literally saved my life and my kitchen lol. Sit home and get all yoour stuff delivered.',
    client_name: 'Anna Cambell',
    img_src: '/testimonial/Testimonial-3.png'
  },
]

export default TestimonialList