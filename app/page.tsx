import Banner from '@components/home/Banner';
import './globals.css';
import TagList from '@components/home/TagList';

export default function Home() {
  return (
    <div className="w-full">
      <Banner />
      <div className="mt-20">
        <TagList />
      </div>
    </div>
  );
}
