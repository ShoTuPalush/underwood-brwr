import { Hero } from '@/app/components/Hero/Hero';
import { getCategories } from '@/lib/api';
import { CategoryList } from './components/CategoryList/CategoryList';
import { useQuery } from '@tanstack/react-query';

interface CategoryItem {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
}

export default function Home() {
  // const data = await getCategories();

  return (
    <main>
      <Hero />

      <CategoryList />
    </main>
  );
}
