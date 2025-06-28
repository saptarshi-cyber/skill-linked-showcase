
import mixpanel from 'mixpanel-browser';

// Initialize Mixpanel
const MIXPANEL_TOKEN = '636aee5579534fc71c2088e26775c893';

mixpanel.init(MIXPANEL_TOKEN, {
  debug: process.env.NODE_ENV === 'development',
  track_pageview: true,
  persistence: 'localStorage',
});

// Track page views
export const trackPageView = (pageName: string) => {
  mixpanel.track('Page View', {
    page: pageName,
    timestamp: new Date().toISOString(),
  });
};

// Track button clicks
export const trackButtonClick = (buttonName: string, location: string) => {
  mixpanel.track('Button Click', {
    button_name: buttonName,
    location: location,
    timestamp: new Date().toISOString(),
  });
};

// Track section views
export const trackSectionView = (sectionName: string) => {
  mixpanel.track('Section View', {
    section: sectionName,
    timestamp: new Date().toISOString(),
  });
};

// Track custom events
export const trackCustomEvent = (eventName: string, properties: Record<string, any> = {}) => {
  mixpanel.track(eventName, {
    ...properties,
    timestamp: new Date().toISOString(),
  });
};

export default mixpanel;
