import React from 'react';
import SectionHeading from '../SectionHeading';
import Card from '../../Card/Card';

const Category = ({ title, data }) => {
  return (
    <>
      <SectionHeading title={title} />
      <div className="flex flex-wrap gap-4">
        {data &&
          data.map((item, index) => (
            <Card
              key={item?.title + index}
              title={item?.title}
              description={item?.description}
              imagePath={item?.image}
              actionArrow={true}
              height={'280px'}
              width={'280px'}
            />
          ))}
      </div>
    </>
  );
};

export default Category;
