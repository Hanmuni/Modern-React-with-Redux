// import Table from "../components/Table";
import SortableTable from "../components/SortableTable";

function TablePage() {
  const data = [
    { name: "Orange", color: "bg-orange-500", number: 5, icon: "🍊" },
    { name: "Apple", color: "bg-red-800", number: 13, icon: "🍎" },
    { name: "Watermelon", color: "bg-red-300", number: 7, icon: "🍉" },
    { name: "Strawberry", color: "bg-red-600", number: 8, icon: "🍓" },
    { name: "Pear", color: "bg-yellow-100", number: 3, icon: "🍐" },
  ];

  const config = [
    {
      label: "Name",
      render: (fruit) => fruit.name,
      sortValue: (fruit) => fruit.name,
    },
    {
      label: "Color",
      render: (fruit) => (
        <div
          className={`inline-block h-4 w-4 rounded-full ${fruit.color}`}
        ></div>
      ),
    },
    {
      label: "Number",
      render: (fruit) => fruit.number,
      sortValue: (fruit) => fruit.number,
    },
    { label: "Icon", render: (fruit) => fruit.icon },
  ];

  const keyFn = (fruit) => {
    return fruit.name;
  };

  return (
    <div>
      <SortableTable data={data} config={config} keyFn={keyFn} />
    </div>
  );
}

export default TablePage;
