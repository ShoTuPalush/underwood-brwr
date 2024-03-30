import axios from 'axios';

export interface CategoryItems {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
}

interface CategoryList {
  categories: CategoryItems[];
}

interface ListOfCategory {
  meals: ItemOfCategory[];
}

interface ItemOfCategory {
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
}

export interface Meals {
  [key: string]: any;
}

const buildUrl = (...paths: string[]) =>
  `https://www.themealdb.com/api/json/v1/1/${paths.join('/')}`;

const stringifyQueryParams = (params: Record<string, string>) =>
  new URLSearchParams(params).toString();

const sendRequest = async <T>(url: string): Promise<any> =>
  await axios.get(url).then(res => res.data as T);

export const getCategories = async () => {
  const categoryList: CategoryList = await sendRequest<CategoryList>(
    buildUrl('categories.php')
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
  params: Record<string, string> = {}
) => {
  return await sendRequest<ListOfCategory>(
    `${buildUrl('filter.php')}?${stringifyQueryParams(params)}`
  );
};

export const getMeals = async (params: Record<string, string> = {}) => {
  return await sendRequest<{ meals: Meals }>(
    `${buildUrl('lookup.php')}?${stringifyQueryParams(params)}`
  );
};

export const getRandomMeals = async () => {
  return await sendRequest<{ meals: Meals }>(buildUrl('random.php'));
};
