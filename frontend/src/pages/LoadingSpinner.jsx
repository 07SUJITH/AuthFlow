const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#ffffef] dark:bg-black">
      <div className="w-16 h-16 border-4 border-gray-300 dark:border-gray-700 border-t-violet-600 dark:border-t-violet-700 rounded-full animate-spin"></div>
    </div>
  );
};

export default LoadingSpinner;
