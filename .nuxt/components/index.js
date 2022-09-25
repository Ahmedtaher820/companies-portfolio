export { default as SsrCarousel } from '../..\\node_modules\\vue-ssr-carousel\\index.js'
export { default as About } from '../..\\components\\About.vue'
export { default as CarouselComp } from '../..\\components\\Carousel-Comp.vue'
export { default as ContactUs } from '../..\\components\\ContactUs.vue'
export { default as Owner } from '../..\\components\\Owner.vue'
export { default as Social } from '../..\\components\\Social.vue'
export { default as CompanyCardsCardComp } from '../..\\components\\CompanyCards\\Card-Comp.vue'
export { default as CompanyCards } from '../..\\components\\CompanyCards\\Cards.vue'
export { default as CompanyCardsPrevNext } from '../..\\components\\CompanyCards\\PrevNext.vue'
export { default as CurrentCompanyHeader } from '../..\\components\\CurrentCompany\\Header.vue'
export { default as CurrentCompanyModal } from '../..\\components\\CurrentCompany\\Modal.vue'
export { default as CurrentCompanyNavBar } from '../..\\components\\CurrentCompany\\NavBar.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
