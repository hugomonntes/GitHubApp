'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useSlides } from '../hooks/use-slides'
import { Button } from "@/components/ui/button"
import { Github, GitBranch, ThumbsUp, ThumbsDown, Rocket, Heart } from 'lucide-react'

const slides = [
  {
    title: "GitHub Universe",
    subtitle: "Where Code Meets Community",
    description: "GitHub is a web-based platform that provides version control and collaboration features for software development projects. It's a central hub for developers to store, manage, track and control changes to their code.",
    icon: Github,
    color: "from-purple-600 to-blue-600"
  },
  {
    title: "Key Features",
    subtitle: "Empowering Developers Worldwide",
    description: "• Version Control with Git\n• Repositories for Code Storage\n• Pull Requests for Code Review\n• Issue Tracking\n• Project Management Tools\n• Continuous Integration/Continuous Deployment (CI/CD)\n• Collaboration Tools (Discussions, Wikis)\n• GitHub Actions for Automation",
    icon: GitBranch,
    color: "from-emerald-600 to-teal-600"
  },
  {
    title: "Advantages",
    subtitle: "Why Developers Love GitHub",
    description: "• Large, Active Community\n• Open Source Project Hosting\n• Easy Collaboration\n• Integrated CI/CD Pipeline\n• Extensive Documentation\n• GitHub Pages for Web Hosting\n• Security Features (Dependabot)\n• Integration with Many Developer Tools",
    icon: ThumbsUp,
    color: "from-orange-600 to-red-600"
  },
  {
    title: "Challenges",
    subtitle: "Areas for Consideration",
    description: "• Learning Curve for Git Beginners\n• Limited Free Private Repositories\n• Dependency on Microsoft (Owner)\n• Can Be Overwhelming for Small Projects\n• Occasional Downtime\n• Privacy Concerns for Public Repositories",
    icon: ThumbsDown,
    color: "from-blue-600 to-indigo-600"
  },
  {
    title: "Future Improvements",
    subtitle: "GitHub's Evolving Landscape",
    description: "• Enhanced AI-powered Code Suggestions\n• Improved Mobile Experience\n• More Robust Project Management Tools\n• Advanced Security Features\n• Better Integration with Cloud Services\n• Expanded Learning Resources\n• Improved Performance for Large Repositories",
    icon: Rocket,
    color: "from-pink-600 to-rose-600"
  },
  {
    title: "Thank You!",
    subtitle: "We Hope You Enjoyed Learning About GitHub",
    description: "Remember, GitHub is more than just a tool – it's a community. Join millions of developers in shaping the future of software!",
    icon: Heart,
    color: "from-red-600 to-pink-600"
  }
]

export default function Page() {
  const { currentSlide } = useSlides(slides.length)

  return (
    <div className="h-screen w-screen overflow-hidden bg-black text-white">
      <AnimatePresence mode="wait">
        {slides.map((slide, index) => {
          const Icon = slide.icon
          return currentSlide === index && (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="relative h-full w-full"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${slide.color} opacity-20`} />
              <div className="absolute inset-0 bg-black/80" />
              <div className="relative z-10 flex h-full flex-col items-center justify-center text-center p-4">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="mb-8"
                >
                  <Icon className="w-24 h-24 text-white" />
                </motion.div>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-5xl md:text-7xl font-bold mb-4"
                >
                  {slide.title}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="text-xl md:text-2xl mb-8 max-w-2xl text-gray-300"
                >
                  {slide.subtitle}
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="text-lg mb-12 max-w-2xl text-gray-400 whitespace-pre-line"
                >
                  {slide.description}
                </motion.p>
                {index === 0 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                  >
                    <Button size="lg" className="bg-white text-black hover:bg-gray-100">
                      <Github className="mr-2 h-5 w-5" />
                      Explore GitHub
                    </Button>
                  </motion.div>
                )}
                {index === slides.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="mt-8"
                  >
                  </motion.div>
                )}
              </div>
            </motion.div>
          )
        })}
      </AnimatePresence>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <motion.div
            key={index}
            className={`h-2 w-2 rounded-full ${
              currentSlide === index ? 'bg-white' : 'bg-white/30'
            }`}
            animate={{
              scale: currentSlide === index ? 1.2 : 1,
            }}
          />
        ))}
      </div>
    </div>
  )
}