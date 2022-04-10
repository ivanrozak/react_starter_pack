import React from "react";
import { Select, Radio, Button, Pagination } from "antd";

const { Option } = Select;

export default function Pagination() {
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  const pageOptions = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  const pageList = [1, 2, 3];

  useEffect(() => {
    console.log("offset", offset);
    console.log("limit", limit);
  }, [offset, limit]);

  useEffect(() => {
    console.log("page", page);
  }, [limit]);

  function handleLimitChange(value) {
    setLimit(value);
  }

  function handlePageChange(e) {
    setPage(e.target.value);
  }
  return (
    <div className="pagination bg-white flex justify-between items-center">
      <div>
        <Select
          defaultValue="10 entries"
          style={{ width: 120 }}
          bordered={false}
          onChange={handleLimitChange}
        >
          {pageOptions.map((item, index) => {
            return (
              <Option value={item} key={index}>{`${item} entries`}</Option>
            );
          })}
        </Select>
      </div>
      <div className="flex">
        <Button className="mr-2">0</Button>
        <Radio.Group value={page} onChange={handlePageChange}>
          {pageList.map((item, index) => {
            return (
              <Radio.Button value={item} key={index}>
                {item}
              </Radio.Button>
            );
          })}
        </Radio.Group>
        <Button className="ml-2">max</Button>
      </div>
    </div>
  );
}
