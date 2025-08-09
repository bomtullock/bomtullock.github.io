// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "A growing collection of both my academic and personal projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "post-sunda-islands-motorbike-tour",
        
          title: "Sunda Islands Motorbike Tour",
        
        description: "Louis and I set out to rent bikes and ride across the Sunda Islands over the course of a month. An unexpected volcanic eruption at the start of our journey, sent us on a detour that transformed the trip into something unforgettable.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/Motorbike_Tour/";
          
        },
      },{id: "post-a-student-s-perspective-on-ai-in-education",
        
          title: "A Student’s Perspective on AI in Education",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/A-Student's-Perspective-on-AI-in-Education/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-ema-control-system",
          title: 'EMA Control System',
          description: "Control System Design for an Electromechanical Actuator.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/A_EMA_Control/";
            },},{id: "projects-3d-heat-sink-analysis",
          title: '3D Heat Sink Analysis',
          description: "A custom FEA solver developed in MATLAB to model the heat distribution of a CPU chip upon PC startup.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/A_HeatSink/";
            },},{id: "projects-meng-dissertation",
          title: 'MEng Dissertation',
          description: "Performance Study of a Cantilevered Piezoelectric Energy Harvester.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/A_MEng_Dissertation/";
            },},{id: "projects-tailplane-wingbox-design",
          title: 'Tailplane Wingbox Design',
          description: "Led a team of 7 in designing, constructing, and testing a light aircraft wingbox.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/A_Tailplane/";
            },},{id: "projects-turbofan-optimisation",
          title: 'Turbofan Optimisation',
          description: "Developing and analysing a hybrid-electric propulsion system for a commercial aircraft.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/A_TurboFan/";
            },},{id: "projects-learjet-25-pitch-control",
          title: 'Learjet 25 Pitch Control',
          description: "Developing a linearised state space control system for a Learjet 25.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/LearjetControl/";
            },},{id: "projects-pi-hole",
          title: 'Pi-hole',
          description: "Deploying a Pi-hole on my local network.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/P_pihole/";
            },},{id: "projects-my-website",
          title: 'My Website',
          description: "A static portfolio site built with Jekyll and Docker, deployed via GitHub Pages using the al-folio theme.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/P_website/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%74%68%6F%6D%61%73%6A%61%6D%65%73%62%75%6C%6C%6F%63%6B@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/bomtullock", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/tombullock00", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
