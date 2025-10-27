import { User } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const About = () => {
  const [ref, isInView] = useInView();

  const team = [
{
  name: 'Founder',
  role: 'Mustafa',
  description: ' 23+ years of experience in Civil Engineering across the Arab region.',
  image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
},
    {
      name: 'Co-Founder',
      role: 'Mustafa',
      description: 'Designing curriculum that bridges academia with real-world industry requirements.',
      image: 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Cloud Engineer',
      role: 'Rasiq Turabi',
      description: 'Website coder and designer crafting seamless digital experiences for learners.',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-16">
          Meet Our Team
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {team.map((member, index) => (
            <div
              key={index}
              className={`group text-center ${
                isInView ? 'animate-slideUp' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative mb-6 inline-block">
                <div className="w-48 h-48 mx-auto overflow-hidden rounded-full border-4 border-black/20 group-hover:border-black transition-all duration-500">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                  />
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
              <p className="text-black/60 font-medium mb-4">{member.role}</p>
              <p className="text-black/70 leading-relaxed max-w-sm mx-auto">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
