import { Sobre } from '../components/Sobre';
import { Contato } from '../components/Contato';
import 'tailwindcss/tailwind.css';
import { Cursos } from '@/components/Curso';
import Experiencia from '@/components/Experiencia';
import Aplicativos from '@/components/Aplicativos'
import CanalYoutube from '@/components/CanalYoutube';
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="grid grid-cols-3 gap-4 w-full max-w-6xl p-4">
        <div className="col-span-1">
          <Sobre />
          <Contato />
        </div>
        <div className="col-span-1">
          <Experiencia />
        </div>
        <div className="col-span-1">
          <Cursos />
          <Aplicativos />
          <CanalYoutube />
          {/* Adicione aqui os componentes para os aplicativos e o canal do YouTube */}
        </div>
      </div>
    </div>
  );
}
