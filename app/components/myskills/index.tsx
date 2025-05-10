import { skills } from '@/app/mock';
import { motion } from 'framer-motion';

type SkillCardProps = {
  icon: React.ReactNode;
  title: string;
  level: string;
  description: string;
  color: string;
};

const SkillCard = ({ icon, title, level, description, color }: SkillCardProps) => {
  return (
    <motion.div
      className={`flex flex-col justify-center gap-3 border-b-8 p-4 sm:gap-5 sm:p-6 ${color} bg-white shadow-lg transition-all duration-300 dark:bg-[#212121]`}
      whileHover={{
        y: -10,
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      }}
    >
      <div className="relative flex w-full items-center justify-center">{icon}</div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          <p className="text-lg font-bold sm:text-xl">{title}</p>
          <span
            className={`rounded-full px-2 py-0.5 text-xs sm:px-3 sm:py-1 sm:text-sm ${
              level === 'Expert'
                ? 'bg-green-100 text-green-800'
                : level === 'Proficient'
                  ? 'bg-blue-100 text-blue-800'
                  : level === 'Intermediate'
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'bg-gray-100 text-gray-800'
            }`}
          >
            {level}
          </span>
        </div>

        <div className="h-1 w-full overflow-hidden rounded-full bg-gray-200">
          <div
            className={`h-full ${
              level === 'Expert'
                ? 'w-full bg-green-500'
                : level === 'Proficient'
                  ? 'w-4/5 bg-blue-500'
                  : level === 'Intermediate'
                    ? 'w-3/5 bg-yellow-500'
                    : 'w-2/5 bg-gray-500'
            }`}
          />
        </div>

        <p className="mt-2 text-sm leading-relaxed text-opacity-60 sm:mt-3 sm:text-base dark:text-white">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

const SkillsSection: React.FC = () => {
  return (
    <div id="skills" className="flex w-full flex-col py-6 sm:py-10 lg:py-16">
      <div className="mb-6 flex flex-col sm:mb-10 sm:px-0">
        <h2 className="text-base font-bold text-primary sm:text-lg">Technical Expertise</h2>
        <h3 className="mt-1 text-2xl font-bold sm:mt-2 sm:text-3xl">My Skills & Technologies</h3>
        <p className="mt-2 max-w-2xl text-sm text-gray-600 sm:mt-4 sm:text-base dark:text-gray-300">
          I specialize in modern web and mobile development technologies, with focus on building
          performant, scalable, and maintainable applications.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:px-0 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill, index) => (
          <SkillCard
            key={index}
            icon={skill.icon}
            title={skill.title}
            level={skill.level}
            color={skill.color}
            description={skill.description}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
