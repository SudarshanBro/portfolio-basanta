// In your pages/Index.tsx file
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { Education } from '@/components/Education';
import { RecentActivity } from '@/components/RecentActivity';
import { Hobbies } from '@/components/Hobbies';
import { Gallery } from '@/components/Gallery';

const Index = () => {
  return (
    <div>
      <Navigation />
      <Hero />
      <Education />
      <Hobbies />
      <Gallery />
      <RecentActivity />
    </div>
  );
};

export default Index;
