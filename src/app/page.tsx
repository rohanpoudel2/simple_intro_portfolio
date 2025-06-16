"use client";
import { useTheme } from "next-themes";
import {
  Hero,
  About,
  Education,
  Experience,
  Skills,
  Projects,
  Contact,
  Navigation,
  TimeZone,
  BikeFooter,
  ThemeToggle,
} from './components';
import {
  heroData,
  profilePhoto,
  aboutContent,
  skills,
  projects,
  contactData,
  navigationLinks,
} from './content';

export default function Home() {
  const { resolvedTheme } = useTheme();
  const isLight = resolvedTheme === 'light';
  return (
    <>
      <ThemeToggle />
      <div className={`min-h-screen font-mono transition-colors ${isLight ? 'bg-white' : 'bg-gray-900'}`}>
        <Hero
          name={heroData.name}
          title={heroData.title}
          location={heroData.location}
          backgroundImage={heroData.backgroundImage}
          lightImage="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=3872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />

        <div className="max-w-4xl mx-auto px-8">
          <div className={`space-y-12 transition-all duration-500 opacity-100 translate-y-0`}>
            <About
              content={aboutContent}
              photo={profilePhoto}
              photoAlt="Rohan's profile photo"
            />

            <div className="lg:flex lg:gap-12">
              <div className="lg:flex-1 space-y-12">
                <Education />
                <Experience />

                <Skills skills={skills} />

                <Projects projects={projects} />

                <Contact
                  description={contactData.description}
                  links={contactData.links}
                />
              </div>

              <div className="lg:w-64 lg:flex-shrink-0 mt-12 lg:mt-0">
                <Navigation links={navigationLinks} />
              </div>
            </div>
          </div>

          <div className="mt-16 pt-8 pb-8 border-t border-gray-200 dark:border-gray-700 text-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm font-mono">
              Last updated: June 2025
            </p>
          </div>
        </div>
        <TimeZone />
        <BikeFooter />
      </div>
    </>
  );
}
