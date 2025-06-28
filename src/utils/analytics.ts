// Google Analytics utility functions
declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: any) => void;
  }
}

import { trackButtonClick as mixpanelTrackButtonClick, trackSectionView as mixpanelTrackSectionView } from './mixpanel';

export const GA_MEASUREMENT_ID = 'G-QCX3G9KSPC';

// Track page views
export const trackPageView = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
};

// Track custom events
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track button clicks (now includes both GA and Mixpanel)
export const trackButtonClick = (buttonName: string, location: string) => {
  // Google Analytics
  trackEvent('click', 'engagement', `${buttonName} - ${location}`);
  
  // Mixpanel
  mixpanelTrackButtonClick(buttonName, location);
};

// Track section views (now includes both GA and Mixpanel)
export const trackSectionView = (sectionName: string) => {
  // Google Analytics
  trackEvent('view', 'engagement', `Section: ${sectionName}`);
  
  // Mixpanel
  mixpanelTrackSectionView(sectionName);
};
