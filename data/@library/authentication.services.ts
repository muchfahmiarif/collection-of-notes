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

export const Data = [
  {
    id: 1,
    name: "Auth0",
    url: "https://auth0.com/",
    icon: SiAuth0,
    image: Auth0,
  },
  {
    id: 2,
    name: "Firebase",
    url: "https://firebase.google.com/docs/auth",
    icon: SiFirebase,
    image: Firebase,
  },
  {
    id: 3,
    name: "Next Auth",
    url: "https://next-auth.js.org/",
    icon: BsFillShieldLockFill,
    image: NextAuth,
  },
  {
    id: 4,
    name: "Supabase",
    url: "https://supabase.com/auth",
    icon: SiSupabase,
    image: Supabase,
  },
  {
    id: 5,
    name: "AWS Amplify",
    url: "https://aws.amazon.com/amplify/",
    icon: SiAwsamplify,
    image: AWSAmplify,
  },
  {
    id: 6,
    name: "Clerk",
    url: "https://clerk.dev/",
    icon: FaCircleUser,
    image: Clerk,
  },
  {
    id: 7,
    name: "Permit",
    url: "https://www.permit.io/",
    icon: PiDogFill,
    image: Permit,
  },
  {
    id: 8,
    name: "Passport",
    url: "http://www.passportjs.org/",
    icon: SiPassport,
    image: Passport,
  },
];
