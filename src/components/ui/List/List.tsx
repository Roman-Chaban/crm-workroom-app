import React, { ReactNode } from 'react';

interface ListProps<T> {
  renderList: Array<T>;
  classNames: {
    list: string;
    listItem: string;
  };
  renderItem: (item: T) => ReactNode;
}

export const List = <T,>({
  renderList,
  classNames,
  renderItem,
}: ListProps<T>) => {
  return (
    <ul className={classNames.list}>
      {renderList.map((listItem, index) => (
        <li
          key={index}
          className={classNames.listItem}
        >
          {renderItem(listItem)}
        </li>
      ))}
    </ul>
  );
};
