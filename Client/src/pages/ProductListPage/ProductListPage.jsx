import React from "react";
import Navigation from "../../components/Navigation/Navigation";
import FilterIcon from "../../components/Common/FilterIcon";

const ProductListPage = () => {
  return (
    <div>
      <div className="flex mt-3">
        <div className="w-[20%] p-[20px] border rounded-lg m-[20px]">
          {/* filters */}
          <div className="flex justify-between">
            <p className="text-[16px] text-gray-800">Filter</p>
            <FilterIcon />
          </div>
          <div>
            <p className="text-[16px] text-black mt-5">Categories</p>
          </div>
        </div>
        <div className="p-[40px]">
          {/* products */}
          <p>Hello1</p>
        </div>
      </div>
    </div>
  );
};

export default ProductListPage;
