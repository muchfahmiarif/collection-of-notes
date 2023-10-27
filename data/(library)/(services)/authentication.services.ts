import { cardProps, defaultSomeType } from "@/types/card.type";

import { SiAuth0, SiAwsamplify, SiFirebase, SiPassport, SiSupabase } from "react-icons/si";
import { BsFillShieldLockFill } from "react-icons/bs";
import { FaCircleUser } from "react-icons/fa6";
import { PiDogFill } from "react-icons/pi";
import { TbSquareLetterK } from "react-icons/tb";

import Auth0 from "@/public/images/library/services/authentication/auth0.svg";
import Firebase from "@/public/images/library/services/authentication/firebase.svg";
import NextAuth from "@/public/images/library/services/authentication/next-auth.webp";
import Supabase from "@/public/images/library/services/authentication/supabase.svg";
import AWSAmplify from "@/public/images/library/services/authentication/awsamplify.svg";
import Clerk from "@/public/images/library/services/authentication/clerk-logomark-light.svg";
import Permit from "@/public/images/library/services/authentication/permit.svg";
import Passport from "@/public/images/library/services/authentication/passport.svg";
import KindeLight from "@/public/images/library/services/authentication/kinde-light.svg";

export const dataAuthentication: cardProps[] = [
  {
    ...defaultSomeType,
    id: 1,
    name: "Auth0",
    url: "https://auth0.com/",
    icon: SiAuth0,
    lightImage: Auth0,
    darkImage: Auth0,
    suggested: true,
    tags: [],
  },
  {
    ...defaultSomeType,
    id: 2,
    name: "Firebase",
    url: "https://firebase.google.com/docs/auth",
    icon: SiFirebase,
    lightImage: Firebase,
    darkImage: Firebase,
    suggested: true,
    tags: [],
  },
  {
    ...defaultSomeType,
    id: 3,
    name: "Next Auth",
    url: "https://next-auth.js.org/",
    icon: BsFillShieldLockFill,
    lightImage: NextAuth,
    darkImage: NextAuth,
    suggested: true,
    tags: [],
  },
  {
    ...defaultSomeType,
    id: 4,
    name: "Supabase",
    url: "https://supabase.com/auth",
    icon: SiSupabase,
    lightImage: Supabase,
    darkImage: Supabase,
    suggested: true,
    tags: [],
  },
  {
    ...defaultSomeType,
    id: 5,
    name: "AWS Amplify",
    url: "https://aws.amazon.com/amplify/",
    icon: SiAwsamplify,
    lightImage: AWSAmplify,
    darkImage: AWSAmplify,
    suggested: false,
    tags: [],
  },
  {
    ...defaultSomeType,
    id: 6,
    name: "Clerk",
    url: "https://clerk.dev/",
    icon: FaCircleUser,
    lightImage: Clerk,
    darkImage: Clerk,
    suggested: true,
    tags: [],
  },
  {
    ...defaultSomeType,
    id: 7,
    name: "Permit",
    url: "https://www.permit.io/",
    icon: PiDogFill,
    lightImage: Permit,
    darkImage: Permit,
    suggested: false,
    tags: [],
  },
  {
    ...defaultSomeType,
    id: 8,
    name: "Passport",
    url: "http://www.passportjs.org/",
    icon: SiPassport,
    lightImage: Passport,
    darkImage: Passport,
    suggested: false,
    tags: [],
  },
  {
    ...defaultSomeType,
    id: 9,
    name: "Kinde",
    url: "https://kinde.com/",
    icon: TbSquareLetterK,
  },
  {
    ...defaultSomeType,
    id: 10,
    name: "Feathers Auth Management",
    url: "https://feathers-a-m.netlify.app/",
    tags: [],
  },
];
