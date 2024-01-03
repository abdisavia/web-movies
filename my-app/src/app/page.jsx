import Header from '@/components/Fragments/Header';
import RootLayout from './layout';
import Search from '@/components/elements/Search';
import SideBar from '@/components/Fragments/SideBar';

export default function Home() {
  return (
    <RootLayout>
      <div className='relative h-screen flex'>
        <SideBar/>
        <Header/>
      </div>
    </RootLayout>
  )
}
