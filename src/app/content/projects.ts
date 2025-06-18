export const projects = [
    {
        title: 'TriGuard',
        description: 'Research paper on testing AI Model Safety with Attribution Entropy, Verification, and Drift.',
        tech: ['Python', 'PyTorch', 'auto_LiRPA', 'TorchVision'],
        status: 'Completed' as const,
        links: [
            {
                name: 'arxiv',
                url: 'https://arxiv.org/abs/2506.14217'
            }
        ]
    },
    {
        title: 'CommuteMate (GoatHacks)',
        description: 'Ride sharing app for university students that connect users with similar routes, reducing commuting costs and carbon footprints.',
        tech: ['Django', 'React Native', 'Typescript', 'Python', 'Google Places', 'PostgreSQL'],
        status: 'Completed' as const,
        links: [
            {
                name: 'Devpost',
                url: 'https://devpost.com/software/commutemate'
            }
        ]
    },
    {
        title: 'MedTrain AI (HackPrinceton)',
        description: 'Virtual reality app on Meta Quest to help medical students imporve patient communication and diagnostic skills.',
        tech: ['Unity', 'Ruby on Rails', 'Convai'],
        status: 'Completed' as const,
        links: [
            {
                name: 'Dorahacks',
                url: 'https://dorahacks.io/buidl/19422'
            }
        ]
    },
    {
        title: 'Health Journal (Columbia DivHacks)',
        description: 'AI powered health journal that provides personalized tips and best practices tailored to the user.',
        tech: ['Ruby on Rails', 'Meta Llama'],
        status: 'In Progress' as const,
        links: [
            {
                name: 'Dorahacks',
                url: 'https://dorahacks.io/buidl/17015'
            }
        ]
    },
    {
        title: 'Image and Video Compression',
        description: 'Nodejs package for compressing images and videos efficiently from the CLI.',
        tech: ['Node.js', 'Javascript'],
        status: 'Completed' as const,
        links: [
            {
                name: 'npm',
                url: 'https://www.npmjs.com/package/image-and-video-compressor'
            },
            {
                name: 'GitHub',
                url: 'https://github.com/rohanpoudel2/image_video_compressor'
            }
        ]
    },
]; 