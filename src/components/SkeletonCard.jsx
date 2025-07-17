export default function SkeletonCard() {
    return (
        <div className="animate-pulse bg-gray-800 p-4 rounded shadow-md space-y-4 dark:bg-gray-900">
            {/* Image placeholder */}
            <div className="bg-gray-700 dark:bg-gray-700 h-40 w-full rounded-md"></div>

            {/* Title line */}
            <div className="h-4 bg-gray-600 dark:bg-gray-600 rounded w-3/4"></div>

            {/* Description line */}
            <div className="h-4 bg-gray-500 dark:bg-gray-500 rounded w-1/2"></div>
        </div>
    );
}
