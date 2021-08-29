// log the pageView with their URL
export const pageView = (url: string) => {
  (window as any).gtag("config", process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
    page_path: url,
  });
};

// log specific events happening.
export const event = ({ action, params }: {action: any, params: any}) => {
  (window as any).gtag("event", action, params);
};
