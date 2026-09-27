import Header from './components/header';
import ProfileCard from './components/ProfileCard';
import Footer from './components/Footer';
import SkillBadge from './components/SkillBadge';
import './App.css';


const skillsData = [
  { id: 1, label: 'C++' },
  { id: 2, label: 'Python' },
];

function App() {
  return (
    <div className="bg-gray-100 min-h-screen p-8 font-sans">
      <Header />
      <main className="max-w-3xl mx-auto">
        <ProfileCard 
          name="Kamalbek Abylay" 
          role="KBTU's 3rd Year Student" 
          bio="Hi! I am an aspiring web developer. From this course, I hope to level up my web development skills."
          avatarUrl="image.png" 
        />
        
        <section className="mt-8 bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-bold mb-4">My Skills</h3>
          {skillsData.length === 0 ? (
            <p className="text-gray-500">No skills added yet.</p>
          ) : (
            <ul className="flex flex-wrap gap-2">
              {skillsData.map((skill) => (
                <SkillBadge key={skill.id} skill={skill} />
              ))}
            </ul>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;