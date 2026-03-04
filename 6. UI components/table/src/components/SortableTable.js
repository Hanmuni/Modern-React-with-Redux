import Table from "./Table";
import { useState } from "react";
import {
  RiArrowUpDownLine,
  RiArrowUpLongLine,
  RiArrowDownLongLine,
} from "react-icons/ri";

function SortableTable(props) {
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);

  const { config, data } = props;

  const handleClick = (label) => {
    if (sortBy && label !== sortBy) {
      setSortOrder("asc");
      setSortBy(label);
      return;
    }

    if (sortOrder === null) {
      setSortOrder("asc");
      setSortBy(label);
    } else if (sortOrder === "asc") {
      setSortOrder("desc");
      setSortBy(label);
    } else if (sortOrder === "desc") {
      setSortOrder(null);
      setSortBy(null);
    }
  };

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }
    return {
      ...column,
      header: () => (
        <th onClick={() => handleClick(column.label)}>
          <div className="flex items-center gap-1">
            <span className="cursor-pointer hover:bg-gray-100">
              {getIcons(column.label, sortBy, sortOrder)}
            </span>
            {column.label}
          </div>
        </th>
      ),
    };
  });

  let sortedData = data;

  if (sortOrder && sortBy) {
    const { sortValue } = config.find((column) => column.label === sortBy);
    sortedData = [...data].sort((a, b) => {
      const valueA = sortValue(a);
      const valueB = sortValue(b);

      const reverseOrder = sortOrder === "asc" ? 1 : -1;

      if (typeof valueA === "string") {
        return valueA.localeCompare(valueB) * reverseOrder;
      } else {
        return (valueA - valueB) * reverseOrder;
      }
    });
  }

  return <Table {...props} config={updatedConfig} data={sortedData} />;
}

function getIcons(label, sortBy, sortOrder) {
  if (label !== sortBy) {
    return (
      <div>
        <RiArrowUpDownLine />
      </div>
    );
  }

  if (sortOrder === null) {
    return (
      <div>
        <RiArrowUpDownLine />
      </div>
    );
  } else if (sortOrder === "asc") {
    return (
      <div>
        <RiArrowUpLongLine />
      </div>
    );
  } else if (sortOrder === "desc") {
    return (
      <div>
        <RiArrowDownLongLine />
      </div>
    );
  }
}

export default SortableTable;
