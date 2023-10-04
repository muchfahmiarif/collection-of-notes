export interface cardProps {
  id: number;
  name: string;
  url: string;
  icon: string;
  darkImage: string;
  lightImage: string;
  suggested?: boolean;
  tags: string[];
}
