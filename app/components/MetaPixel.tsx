"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

const STORAGE_KEY = "centex-cookie-consent-v1";
const PIXEL_ID = "TWOJ_PIXEL_ID";

export default function MetaPixel() {
  const [granted, setGranted] = useState(false);

  useEffect(() => {
    const check = () => {
      const consent = window.localStorage.getItem(STORAGE_KEY);
      setGranted(consent === "all");
    };
    check();
    window.addEventListener("cookie-consent-changed", check);
    return () => window.removeEventListener("cookie-consent-changed", check);
  }, []);

  if (!granted) return null;

  return (
    <Script id="meta-pixel" strategy="afterInteractive">
      {`
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '${PIXEL_ID}');
        fbq('track', 'PageView');
      `}
    </Script>
  );
}
