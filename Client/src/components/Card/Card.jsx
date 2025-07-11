import ArrowIcon from "../Common/ArrowIcon";

const Card = ({
  imagePath,
  title,
  description,
  height,
  width,
}) => {
  return (
    <div className="flex p-6 flex-col">
      <img
        style={{ width: width || "240px", height: height || "260px" }}
        className="object-cover border ml-5 rounded-lg transition-transform duration-300 cursor-pointer hover:scale-105"
        src={imagePath}
        alt={title}
      />
      <div className="flex justify-between items-center mt-3 px-6">
        <div className="flex flex-col">
          <p className="text-[16px] font-medium">{title}</p>

          {description && (
            <div className="flex items-center gap-1 text-sm text-gray-600 hover:text-black transition-all cursor-pointer mt-1">
              <p className="text-sm text-gray-600 hover:text-black transition-all mt-2 flex items-center gap-1 group">
                Explore Now!
                <ArrowIcon className="transition-transform group-hover:translate-x-1 duration-200" />
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
