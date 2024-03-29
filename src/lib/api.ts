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

interface ListOfCategory {
  meals: ItemOfCategory[];
}

interface ItemOfCategory {
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
}

const buildUrl = (...paths: string[]) =>
  `https://www.themealdb.com/api/json/v1/1/${paths.join('/')}`;

const stringifyQueryParams = (params: Record<string, string>) =>
  new URLSearchParams(params).toString();

const sendRequest = async <T>(url: string, init?: RequestInit): Promise<any> =>
  await axios.get(url).then(res => res.data as T);

export const getCategories = async (init?: RequestInit) => {
  const categoryList: CategoryList = await sendRequest<CategoryList>(
    buildUrl('categories.php'),
    init
  );

  const arr = categoryList.categories.map(async categorie => {
    const s: ListOfCategory = await getListOfCategories({
      c: categorie.strCategory,
    });
    return { ...categorie, len: s.meals.length, fId: s.meals[0].idMeal };
  });
  return Promise.all(arr).then(res => res);
};

export const getListOfCategories = async (
  params: Record<string, string> = {},
  init?: RequestInit
) => {
  return await sendRequest<ListOfCategory>(
    `${buildUrl('filter.php')}?${stringifyQueryParams(params)}`,
    init
  );
};
