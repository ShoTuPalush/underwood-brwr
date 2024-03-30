const shimmer =
  'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';

export function CardSkeleton() {
  return (
    <div
      className={`${shimmer} relative overflow-hidden rounded-xl bg-gray-100 p-2 shadow-sm`}
    >
      <div className="flex items-center truncate rounded-xl bg-white px-4 py-8 gap-10">
        <div className="h-40 w-40 rounded-md bg-gray-200 " />
        <div className="flex gap-2 flex-col grow">
          <div className="h-3 w-full rounded-md bg-gray-200" />
          <div className="h-3 w-full rounded-md bg-gray-200" />
          <div className="h-3 w-full rounded-md bg-gray-200" />
          <div className="h-3 w-full rounded-md bg-gray-200" />
        </div>
      </div>
    </div>
  );
}

export function MealSkeleton() {
  return (
    <div
      className={`${shimmer} relative overflow-hidden rounded-xl bg-gray-100 p-2 shadow-sm`}
    >
      <div className="flex items-center truncate rounded-xl bg-white px-4 py-8 gap-10">
        <div className="h-40 w-40 rounded-md bg-gray-200 " />
        <div className="flex gap-2 flex-col grow">
          <div className="h-3 w-full rounded-md bg-gray-200" />
          <div className="h-3 w-full rounded-md bg-gray-200" />
          <div className="h-3 w-full rounded-md bg-gray-200" />
          <div className="h-3 w-full rounded-md bg-gray-200" />
        </div>
      </div>
    </div>
  );
}

export function MealsSkeleton() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <MealSkeleton />
        <MealSkeleton />
        <MealSkeleton />
        <MealSkeleton />
        <MealSkeleton />
        <MealSkeleton />
        <MealSkeleton />
        <MealSkeleton />
      </div>
    </>
  );
}
