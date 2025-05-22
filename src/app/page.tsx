
// app/page.tsx
'use client'
import Laptop from '../app/../../components/Laptop'

export default function Home() {
  return (
    <div> 
      <div className='absolute bottom-0 p-2 text-sm text-white text-shadow-black text-shadow-lg'>
        <p>Odliczanie do Agenda Party</p>
        <p>Wykonawca: Kartos (Alex Tuncer)</p>
        <p>Model wykonany przez daniyalmalik na Sketchfab</p>
        <p>Projekt: https://github.com/Kartosowski/agenda-party-odliczanie</p>
        <p>Jest szansa, że na IPhonie nie działa w 100%</p>
      </div>
      <Laptop />
    </div> 
    )
}
