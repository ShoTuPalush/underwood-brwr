import axios from 'axios';

interface CategoryItem {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
}

interface CategoryList {
  categories: CategoryItem[];
}

const buildUrl = (...paths: string[]) =>
  `https://www.themealdb.com/api/json/v1/1/${paths.join('/')}`;

const stringifyQueryParams = (params: Record<string, string>) =>
  new URLSearchParams(params).toString();

const sendRequest = async (url: string, init?: RequestInit): Promise<any> =>
  await axios.get(url).then(res => res.data);

export const getCategories = (init?: RequestInit) => {
  return sendRequest(buildUrl('categories.php'), init);
};
