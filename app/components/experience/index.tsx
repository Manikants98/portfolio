import { useEffect, useState } from 'react';

const ExperienceText = () => {
  const [experience, setExperience] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const joinDate = new Date('2022-11-14T10:00:00');
      const now = new Date();
      let years = now.getFullYear() - joinDate.getFullYear();
      let months = now.getMonth() - joinDate.getMonth();
      let days = now.getDate() - joinDate.getDate();
      let hours = now.getHours() - joinDate.getHours();
      let minutes = now.getMinutes() - joinDate.getMinutes();
      let seconds = now.getSeconds() - joinDate.getSeconds();
      if (seconds < 0) {
        seconds += 60;
        minutes--;
      }
      if (minutes < 0) {
        minutes += 60;
        hours--;
      }
      if (hours < 0) {
        hours += 24;
        days--;
      }
      if (days < 0) {
        const previousMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += previousMonth.getDate();
        months--;
      }
      if (months < 0) {
        months += 12;
        years--;
      }
      const result = `${years} year${years !== 1 ? 's' : ''}, ${months} month${
        months !== 1 ? 's' : ''
      }, ${days} day${days !== 1 ? 's' : ''}, ${hours} hour${
        hours !== 1 ? 's' : ''
      }, ${minutes} minute${minutes !== 1 ? 's' : ''}, and ${seconds} second${
        seconds !== 1 ? 's' : ''
      }`;

      setExperience(result);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <p className="text-center text-2xl font-bold lg:w-1/2 lg:text-start lg:text-4xl">
      {experience} of experience working
    </p>
  );
};

export default ExperienceText;
