


const Input = ({ label, type, placeholder }) => {
  return (
    <div className="flex flex-col gap-1 mt-3 w-full max-w-[350px]">
      <label
        className="text-purple-800 font-semibold text-base sm:text-lg md:text-xl"
        htmlFor={label}
      >
        {label}
      </label>
      <input
        id={label}
        className="border border-purple-600 w-full p-2 rounded-md outline-none text-gray-200 bg-transparent focus:ring-2 focus:ring-purple-500"
        type={type}
        placeholder={placeholder}
        required
      />
    </div>
  );
};

export default Input;
