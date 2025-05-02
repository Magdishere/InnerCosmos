const Divider = ({ label }) => {
    return (
      <div className="flex items-center w-full mt-6">
        <div className="flex-1 h-px bg-gray-300 dark:bg-gray-500" />
        <span className="mx-4 text-gray-400 text-sm whitespace-nowrap">{label}</span>
        <div className="flex-1 h-px bg-gray-300 dark:bg-gray-500" />
      </div>
    );
  };

export default Divider;