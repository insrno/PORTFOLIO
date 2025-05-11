import FlowingMenu from './FlowingMenu';
import asepriteIcon from '/assets/asepriteicon.png';

const categories = [
  {
    text: 'Frontend',
    tools: [
      { name: 'HTML5', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS3', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'JavaScript', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'React', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Flutter', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },        
      { name: 'C#', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' }
    ]
  },
  {
    text: 'Backend',
    tools: [
      { name: 'Node.js', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'Firebase', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
      { name: 'PHP', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
      { name: 'MySQL', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'C#', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' }
    ]
  },
  {
    text: 'Game & Design Tools',
    tools: [
      { name: 'GDScript', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/godot/godot-original.svg' },
      { name: 'Adobe Animate', image: 'https://cdn-icons-png.flaticon.com/512/5611/5611024.png' },
      { name: 'Adobe Illustrator', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg' },
      { name: 'Aseprite', image: asepriteIcon },
      { name: 'Adobe Photoshop', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg' }
    ]
  }
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 min-h-[60vh] bg-gradient-to-b from-[#E5E1DA] via-[#F1F0E8] to-white flex flex-col items-center justify-center"
    >
      <div className="container mx-auto text-center max-w-5xl">
        <h3 className="text-4xl font-bold mb-10 text-[#181e29] drop-shadow"></h3>
        <FlowingMenu items={categories} />
      </div>
    </section>
  );
}
