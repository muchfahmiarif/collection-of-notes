import { type cardProps, defaultSomeType } from "@/types/card.type";

import { SiCheckmk, SiDatadog, SiGoogleanalytics, SiGrafana, SiHotjar, SiNewrelic, SiSentry } from "react-icons/si";

import Hotjar from "@/public/images/library/services/monitoring/hotjar.svg";
import GoogleAnalytics from "@/public/images/library/services/monitoring/googleanalytics.svg";
import NewRelic from "@/public/images/library/services/monitoring/newrelic.svg";
import Sentry from "@/public/images/library/services/monitoring/sentry.svg";
import Datadog from "@/public/images/library/services/monitoring/datadog.svg";
import Grafana from "@/public/images/library/services/monitoring/grafana.svg";
import Checkmk from "@/public/images/library/services/monitoring/checkmk.svg";

export const dataMonitoring: cardProps[] = [
  {
    ...defaultSomeType,
    id: 1,
    name: "Hotjar",
    url: "https://hotjar.com",
    icon: SiHotjar,
    lightImage: Hotjar,
    darkImage: Hotjar,
    suggested: false,
    tags: [],
  },
  {
    ...defaultSomeType,
    id: 2,
    name: "Google Analytics",
    url: "https://analytics.google.com",
    icon: SiGoogleanalytics,
    lightImage: GoogleAnalytics,
    darkImage: GoogleAnalytics,
    suggested: false,
    tags: [],
  },
  {
    ...defaultSomeType,
    id: 3,
    name: "New Relic",
    url: "https://newrelic.com",
    icon: SiNewrelic,
    lightImage: NewRelic,
    darkImage: NewRelic,
    suggested: false,
    tags: [],
  },
  {
    ...defaultSomeType,
    id: 4,
    name: "Sentry",
    url: "https://sentry.io",
    icon: SiSentry,
    lightImage: Sentry,
    darkImage: Sentry,
    suggested: false,
    tags: [],
  },
  {
    ...defaultSomeType,
    id: 5,
    name: "DataDog",
    url: "https://datadoghq.com",
    icon: SiDatadog,
    lightImage: Datadog,
    darkImage: Datadog,
    suggested: false,
    tags: [],
  },
  {
    ...defaultSomeType,
    id: 6,
    name: "Grafana",
    url: "https://grafana.com",
    icon: SiGrafana,
    lightImage: Grafana,
    darkImage: Grafana,
    suggested: false,
    tags: [],
  },
  {
    ...defaultSomeType,
    id: 7,
    name: "Checkmk",
    url: "https://checkmk.com",
    icon: SiCheckmk,
    lightImage: Checkmk,
    darkImage: Checkmk,
    suggested: false,
    tags: [],
  },
];
