import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { FiStar } from 'react-icons/fi'
import SectionHeading from '../ui/SectionHeading'
import { testimonials } from '../../data/testimonials'
import 'swiper/css'
import 'swiper/css/pagination'

export default function Testimonials() {
  return (
    <section className="section-padding bg-primary">
      <div className="container-luxury">
        <SectionHeading
          eyebrow="Client Voices"
          title={
            <>
              Words from those
              <br />
              <span className="italic text-gold-light">who trusted us</span>
            </>
          }
          className="mb-14"
        />

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1200: { slidesPerView: 3 },
          }}
          className="!pb-14"
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.id}>
              <div className="glass rounded-[2rem] p-8 h-full min-h-[340px] flex flex-col">
                <div className="flex gap-1 text-gold mb-6">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <FiStar key={i} fill="currentColor" size={14} />
                  ))}
                </div>
                <p className="font-sub text-xl text-white/90 leading-relaxed flex-1">
                  “{t.quote}”
                </p>
                <div className="mt-8 flex items-center gap-4 pt-6 border-t border-white/10">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-14 h-14 rounded-full object-cover border border-gold/30"
                    loading="lazy"
                  />
                  <div>
                    <p className="font-heading text-xl text-white">{t.name}</p>
                    <p className="text-grey text-sm">
                      {t.role}, {t.company}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
