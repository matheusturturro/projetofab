export const trackEvent = (event: string, data?: Record<string, any>) => {
  console.log('trackEvent', event, data);
};

export const events = {
  viewHero: 'view_hero',
  clickCtaHero: 'click_cta_hero',
  submitLead: 'submit_lead',
  openPricing: 'open_pricing',
  startCheckout: 'start_checkout',
  playTestimonial: 'play_testimonial',
  scroll75: 'scroll_75',
};
