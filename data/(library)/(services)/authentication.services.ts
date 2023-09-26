import { SiAuth0, SiAwsamplify, SiFirebase, SiPassport, SiSupabase } from "react-icons/si";
import { BsFillShieldLockFill } from "react-icons/bs";
import { FaCircleUser } from "react-icons/fa6";
import { PiDogFill } from "react-icons/pi";
import Auth0 from "@/public/images/library/authentication/auth0.svg";
import Firebase from "@/public/images/library/authentication/firebase.svg";
import NextAuth from "@/public/images/library/authentication/next-auth.webp";
import Supabase from "@/public/images/library/authentication/supabase.svg";
import AWSAmplify from "@/public/images/library/authentication/awsamplify.svg";
import Clerk from "@/public/images/library/authentication/clerk-logomark-light.svg";
import Permit from "@/public/images/library/authentication/permit.svg";
import Passport from "@/public/images/library/authentication/passport.svg";
import { cardProps } from "@/types/card.type";

export const dataAuthentication: cardProps[] = [
  {
    id: 1,
    name: "Auth0",
    url: "https://auth0.com/",
    icon: SiAuth0,
    lightImage: Auth0,
    darkImage: Auth0,
    tags: [],
  },
  {
    id: 2,
    name: "Firebase",
    url: "https://firebase.google.com/docs/auth",
    icon: SiFirebase,
    lightImage: Firebase,
    darkImage: Firebase,
    tags: [],
  },
  {
    id: 3,
    name: "Next Auth",
    url: "https://next-auth.js.org/",
    icon: BsFillShieldLockFill,
    lightImage: NextAuth,
    darkImage: NextAuth,
    tags: [],
  },
  {
    id: 4,
    name: "Supabase",
    url: "https://supabase.com/auth",
    icon: SiSupabase,
    lightImage: Supabase,
    darkImage: Supabase,
    tags: [],
  },
  {
    id: 5,
    name: "AWS Amplify",
    url: "https://aws.amazon.com/amplify/",
    icon: SiAwsamplify,
    lightImage: AWSAmplify,
    darkImage: AWSAmplify,
    tags: [],
  },
  {
    id: 6,
    name: "Clerk",
    url: "https://clerk.dev/",
    icon: FaCircleUser,
    lightImage: Clerk,
    darkImage: Clerk,
    tags: [],
  },
  {
    id: 7,
    name: "Permit",
    url: "https://www.permit.io/",
    icon: PiDogFill,
    lightImage: Permit,
    darkImage: Permit,
    tags: [],
  },
  {
    id: 8,
    name: "Passport",
    url: "http://www.passportjs.org/",
    icon: SiPassport,
    lightImage: Passport,
    darkImage: Passport,
    tags: [],
  },
];
