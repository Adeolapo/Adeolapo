export type Project = {
  view: string;
  name?: string;        // Optional because the last item uses 'title'      // Optional because most use 'name'
  image?: string;       // Optional because the last item uses 'imageUrl'    // Optional because most use 'image'
  description?: string;
  code?: string; // Optional because only Verty NFT has this
};

// The type for the main object
export type Brand = {
  name: string;
  images: string[];
  projects?: Project[];
};

  

export const BRANDS: Brand[] = [
  {
    name: "UI-UX",
    images: [
      "/project/UI/Avex.png",
      "/project/UI/stryde.png",
      "/project/UI/nft.jpg",
    ],
    projects: [
      {
        name: "Avex Fintech App",
        image: "/project/UI/Avex.png",
        view: "www.behance.net/gallery/240868779/Avex-Fintech-App",
        description: "This is a mobile app design for a fintech company called Avex. The app allows users to manage their finances, make payments, and track their spending.",
      },
      {
        name: "Stryde Street Wear",
        image: "/project/UI/stryde.png",
        view: "www.behance.net/gallery/240868779/Avex-Fintech-App",
        description: "This is a mobile app design for a street wear company called Stryde. The app allows users to browse and purchase street wear products, as well as track their orders.",
      },
      {
          
        name: "BeFit Landing Page",
        image: "/project/UI/BeFit.png",
        view:"www.behance.net/gallery/241384427/BeFIT-Landing-Page",
        description: "This is a landing page design for a fitness company called BeFit. The landing page provides information about the company's services, as well as a call-to-action to sign up for their fitness programs.",
      },
      {
          
        name: "Verty NFT Marketplace",
        image: "/project/UI/nft.jpg",
        view:"www.behance.net/gallery/231313655/Verty-NFT-Marketplace",
        description: "This is a mobile app design for an NFT marketplace called Verty. The app allows users to browse and purchase NFTs, as well as track their collections.",
        
      },
      {
            
        name: "Booksy Case Study",
        image: "/project/UI/Booksy.png",
        view:"www.behance.net/gallery/238577089/Booksy-Case-Study",  
        description: "This is a case study for a mobile app called Booksy. The case study provides an overview of the app's features, as well as a detailed analysis of its user experience and design.",   
      },
       {
            
        name: "Retro Crocs E-commerce",
        image: "/project/UI/crocs.jpg",
        view:"www.behance.net/gallery/220992183/Crocs-e-commerce-web-and-mobile-design",
        description: "This is an e-commerce website design for a retro sneaker brand called Crocs. The website allows users to browse and purchase products, as well as track their orders.",
      },
      {
            
        name: "VertAI",
        image: "/project/UI/vertAi.png",
        view:"www.behance.net/gallery/227966759/VertAI",
        description: "This is an AI-powered platform for content creation and management.",
      },

    ],
  },
  {
    name: "Frontend",
    images: [
      "/project/FE/avant.png",
      "/project/FE/spotify.png",
      "/project/FE/chatapp.png",
    ],
    projects: [
      {
        name: "Avant GBV Website",
        description: "This is a web app which is a website for a company called Avant GBV. The website helps victims of any form of gender-based violence to report and get help. It also gives them a platform to find solace and get help from the right authorities.",
        image: "/project/FE/avant.png",
        view:"veratti-avant-gbv.vercel.app/",
        code:"https://github.com/Adeolapo/avant_gbv"
      },
      {
        name: "Renoto App",
        image: "/project/FE/renoto.png",
        view:"veratti-renoto.vercel.app",
        code:"https://github.com/Adeolapo/Renoto",
        description: "This is a web app called Renoto. The app is a productivity tool that helps users to take notes, create to-do lists, and manage their tasks. It also has a feature that allows users to set reminders for their tasks.",
      },

      {
            
        name: "Chat App",
        image: "/project/FE/chatapp.png",
        view:"veratti-chat-app.vercel.app",
        code:"https://github.com/Adeolapo/Chat-APP",
        description: "This is a web app called Chat App which is like Slack. The app is a real-time chat application that allows users to communicate with each other in real-time. It also has a feature that allows users to create chat rooms",
      },

      {   
        name: "Streaming App",
        description: "This is a web app called Streaming App. The app is a platform for watching and streaming videos online like Youtube.",
        image: "/project/FE/metube.png",
        view:"me-tube2.vercel.app",
        code:"https://github.com/Adeolapo/MeTube2"  
      },

      {
            
        name: "Spotify Clone",
        description: "This is a web app called Spotify Clone. The app is a music streaming platform that allows users to listen to and discover new music.",
        image: "/project/FE/spotify.png",
        view:"music-app-delta-drab.vercel.app",
        code:"https://github.com/Adeolapo/MusicApp"
      },


    ]
  },
  {
    name: "Backend",
    images: [
      "/project/FE/avant.png",
      "/project/FE/chatapp.png",
      "/project/FE/metube.png",
    ],
    projects: [

    ]
  },
  
];