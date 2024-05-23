import Banner from '@components/home/Banner';
import './globals.css';
import { ChildTagList, ParentTagList } from '@components/home/TagList';

export default function Home() {
  return (
    <div className="w-full">
      <Banner />
      <div className="mt-20">
        <ParentTagList />
        <div className="py-10 px-36">
          <ChildTagList />
        </div>
      </div>
    </div>
  );
}
