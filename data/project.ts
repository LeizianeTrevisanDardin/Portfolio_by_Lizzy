import type { Project } from "@/types/project";

export const projects : Project[] = [
    {
        id: "cuptogether",
        name: " CUP TOGETHER APP",
        description: 
        "A Social Coffee discovery app to share finds and  connect with coffee lovers.",
        image: "/images/projects/cuptogether/cuptogether.png",
        secondaryImage:"/images/cuptogetheriphone.png",
        imageBackground: "#E9D9FF",
        stack: ["Reactive Native", "Expo", "Supabase"],
        href: "https://cuptogether.expo.app/",
    },
    {
        id: "coworking",
        name: " CoWorking",
        description: 
        "A full-stack platform for managing coworking spaces, bookings and users.",
        image: "/images/coworking.png",
        stack: ["Reactive Native", "Expo", "Supabase"],
        href: "https://co-working-next-js.vercel.app/",
    },
    {
        id: "bloomy",
        name: "Bloomy",
        description:
        "A gamified productivity app with a pixel-art world and real weather data.",
        image: "/images/bloomy.png",
        stack: ["Next.js", "React", "Supabase"],
        href:"https://bloomy-inky.vercel.app/"
    }, 
];