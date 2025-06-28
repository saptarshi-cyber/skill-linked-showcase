
import mixpanel from 'mixpanel-browser';

// Initialize Mixpanel
const MIXPANEL_TOKEN = '636aee5579534fc71c2088e26775c893';

mixpanel.init(MIXPANEL_TOKEN, {
  debug: true, // Always enable debug for now to see what's happening
  track_pageview: true,
  persistence: 'localStorage',
  api_host: 'https://api.mixpanel.com', // Explicitly set the API host
});

// Add console logging to verify events are being sent
console.log('Mixpanel initialized with token:', MIXPANEL_TOKEN);

// Track page views
export const trackPageView = (pageName: string) => {
  console.log('Tracking page view:', pageName);
  mixpanel.track('Page View', {
    page: pageName,
    timestamp: new Date().toISOString(),
  });
};

// Track button clicks
export const trackButtonClick = (buttonName: string, location: string) => {
  console.log('Tracking button click:', buttonName, 'at', location);
  mixpanel.track('Button Click', {
    button_name: buttonName,
    location: location,
    timestamp: new Date().toISOString(),
  });
};

// Track section views
export const trackSectionView = (sectionName: string) => {
  console.log('Tracking section view:', sectionName);
  mixpanel.track('Section View', {
    section: sectionName,
    timestamp: new Date().toISOString(),
  });
};

// Track custom events
export const trackCustomEvent = (eventName: string, properties: Record<string, any> = {}) => {
  console.log('Tracking custom event:', eventName, 'with properties:', properties);
  mixpanel.track(eventName, {
    ...properties,
    timestamp: new Date().toISOString(),
  });
};

export default mixpanel;
