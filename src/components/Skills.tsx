
import React, { useEffect, useRef } from 'react';

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 90 },
      { name: "JavaScript", level: 95 },
      { name: "TypeScript", level: 85 },
      { name: "HTML/CSS", level: 90 },
      { name: "NextJS", level: 80 }
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Python", level: 80 },
      { name: "Java", level: 75 },
      { name: "Go", level: 70 },
      { name: "SQL", level: 85 }
    ]
  },
  {
    title: "DevOps & Tools",
    skills: [
      { name: "Docker", level: 80 },
      { name: "AWS", level: 75 },
      { name: "Git", level: 90 },
      { name: "CI/CD", level: 85 },
      { name: "Linux", level: 80 }
    ]
  }
];

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));
    
    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-24 relative overflow-hidden">
      <div className="container px-6 md:px-8 mx-auto relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="animate-on-scroll opacity-0 mb-4">
              <span className="text-sm font-medium text-primary">Technology Stack</span>
            </div>
            <h2 className="animate-on-scroll opacity-0 text-3xl md:text-4xl font-bold tracking-tight">
              Skills & Expertise
            </h2>
            <p className="animate-on-scroll opacity-0 mt-4 text-foreground/70 max-w-2xl mx-auto">
              I've worked with a wide range of technologies throughout my career, continuously expanding my skill set to deliver exceptional solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skillCategories.map((category, catIndex) => (
              <div 
                key={catIndex}
                className="animate-on-scroll opacity-0 rounded-xl p-6 bg-secondary/50 backdrop-blur-sm shadow-sm border"
                style={{ animationDelay: `${0.1 * catIndex}s` }}
              >
                <h3 className="text-xl font-semibold mb-6 text-center">{category.title}</h3>
                <div className="space-y-5">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-xs text-foreground/60">{skill.level}%</span>
                      </div>
                      <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-primary rounded-full transform origin-left transition-transform duration-1000"
                          style={{ transform: `scaleX(${skill.level / 100})` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="animate-on-scroll opacity-0 mt-16 flex justify-center">
            <div className="p-6 md:p-8 rounded-xl bg-background border shadow-sm max-w-3xl">
              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold mb-2">My Approach to Technology</h3>
                <p className="text-foreground/70">
                  I believe in choosing the right tool for the job, focusing on technologies that deliver the best balance of performance, developer experience, and long-term maintainability.
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  "Problem Solving",
                  "Clean Code",
                  "Performance",
                  "Scalability",
                  "User Experience",
                  "Best Practices",
                  "Continuous Learning",
                  "Team Collaboration"
                ].map((value, index) => (
                  <div 
                    key={index}
                    className="p-4 rounded-lg bg-secondary/70 text-center hover:bg-secondary transition-colors duration-300"
                  >
                    <span className="text-sm font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
