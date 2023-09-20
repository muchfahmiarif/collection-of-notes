import { SiCheckmk, SiDatadog, SiGoogleanalytics, SiGrafana, SiHotjar, SiNewrelic, SiSentry } from "react-icons/si";
import Hotjar from "@/public/images/library/monitoring/hotjar.svg";
import GoogleAnalytics from "@/public/images/library/monitoring/googleanalytics.svg";
import NewRelic from "@/public/images/library/monitoring/newrelic.svg";
import Sentry from "@/public/images/library/monitoring/sentry.svg";
import Datadog from "@/public/images/library/monitoring/datadog.svg";
import Grafana from "@/public/images/library/monitoring/grafana.svg";
import Checkmk from "@/public/images/library/monitoring/checkmk.svg";

export type MonitoringProps = {
  id: number;
  name: string;
  url: string;
  icon: string;
  image: string;
};

export const dataMonitoring: MonitoringProps[] = [
  {
    id: 1,
    name: "Hotjar",
    url: "https://hotjar.com",
    icon: SiHotjar,
    image: Hotjar,
  },
  {
    id: 2,
    name: "Google Analytics",
    url: "https://analytics.google.com",
    icon: SiGoogleanalytics,
    image: GoogleAnalytics,
  },
  {
    id: 3,
    name: "New Relic",
    url: "https://newrelic.com",
    icon: SiNewrelic,
    image: NewRelic,
  },
  {
    id: 4,
    name: "Sentry",
    url: "https://sentry.io",
    icon: SiSentry,
    image: Sentry,
  },
  {
    id: 5,
    name: "DataDog",
    url: "https://datadoghq.com",
    icon: SiDatadog,
    image: Datadog,
  },
  {
    id: 6,
    name: "Grafana",
    url: "https://grafana.com",
    icon: SiGrafana,
    image: Grafana,
  },
  {
    id: 7,
    name: "Checkmk",
    url: "https://checkmk.com",
    icon: SiCheckmk,
    image: Checkmk,
  },
];
