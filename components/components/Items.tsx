import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

type Props = {
  newData: any;
};
const Item = ({ newData }: Props) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {newData &&
        newData.map((item: any, index: any) => {
          return (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={`https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}_m.jpg`}
              alt={item.id}
              key={index}
              className="object-cover overflow-hidden w-full h-auto sm:h-[150px]"
              loading="lazy"
            />
          );
        })}
      {newData && newData.length >= 1 ? null : (
        <div className="flex min-w-[75vw] min-h-[90vh] justify-center items-center text-center">
          <h3>Search For Pics...</h3>
        </div>
      )}
    </div>
  );
};

const Items = (props: Props) => {
  const data = useSelector((state) => state.item.items);
  const test = useSelector((state) => state);
  const [newData, setNewData] = useState();
  useEffect(() => {
    setNewData(data);
  }, [data, test]);

  return (
    <div>
      <Item newData={newData} />;
    </div>
  );
};

export default Items;
