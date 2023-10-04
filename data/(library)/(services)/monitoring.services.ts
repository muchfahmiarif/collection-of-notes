import { SiCheckmk, SiDatadog, SiGoogleanalytics, SiGrafana, SiHotjar, SiNewrelic, SiSentry } from "react-icons/si";
import Hotjar from "@/public/images/library/services/monitoring/hotjar.svg";
import GoogleAnalytics from "@/public/images/library/services/monitoring/googleanalytics.svg";
import NewRelic from "@/public/images/library/services/monitoring/newrelic.svg";
import Sentry from "@/public/images/library/services/monitoring/sentry.svg";
import Datadog from "@/public/images/library/services/monitoring/datadog.svg";
import Grafana from "@/public/images/library/services/monitoring/grafana.svg";
import Checkmk from "@/public/images/library/services/monitoring/checkmk.svg";
import { cardProps } from "@/types/card.type";

export const dataMonitoring: cardProps[] = [
  {
    id: 1,
    name: "Hotjar",
    url: "https://hotjar.com",
    icon: SiHotjar,
    lightImage: Hotjar,
    darkImage: Hotjar,
    tags: [],
  },
  {
    id: 2,
    name: "Google Analytics",
    url: "https://analytics.google.com",
    icon: SiGoogleanalytics,
    lightImage: GoogleAnalytics,
    darkImage: GoogleAnalytics,
    tags: [],
  },
  {
    id: 3,
    name: "New Relic",
    url: "https://newrelic.com",
    icon: SiNewrelic,
    lightImage: NewRelic,
    darkImage: NewRelic,
    tags: [],
  },
  {
    id: 4,
    name: "Sentry",
    url: "https://sentry.io",
    icon: SiSentry,
    lightImage: Sentry,
    darkImage: Sentry,
    tags: [],
  },
  {
    id: 5,
    name: "DataDog",
    url: "https://datadoghq.com",
    icon: SiDatadog,
    lightImage: Datadog,
    darkImage: Datadog,
    tags: [],
  },
  {
    id: 6,
    name: "Grafana",
    url: "https://grafana.com",
    icon: SiGrafana,
    lightImage: Grafana,
    darkImage: Grafana,
    tags: [],
  },
  {
    id: 7,
    name: "Checkmk",
    url: "https://checkmk.com",
    icon: SiCheckmk,
    lightImage: Checkmk,
    darkImage: Checkmk,
    tags: [],
  },
];
