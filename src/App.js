import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import ButtonWithLoading from "./components/ButtonWithLoading";
import CreateUserModal from "./components/CreateUserModal";
import TableComponent from "./components/TableComponent";
import { GetAllUsers } from "./service/allService";
import "react-toastify/dist/ReactToastify.css";
import "./styles/output.css";
import PaginationComponent from "./components/PaginationComponent";
import InputField from "./components/InputField";
import ComponentLoader from "./components/Loader/ComponentLoader";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userCount, setUserCounts] = useState(0);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [searchKey, setSearchKey] = useState(null);
  const [order, setOrder] = useState(1);
  const [sort, setSort] = useState("name");
  const [openCreate, setOpenCreate] = useState(false);

  const getData = async () => {
    setLoading(true);
    const payload = {
      skip: (page - 1) * limit,
      limit: limit,
      searchKey: searchKey ? searchKey : undefined,
      sortBy: {
        field: sort,
        order: order,
      },
    };

    const response = await GetAllUsers(payload);

    const { status, message, data } = response;

    console.log(data);

    if (status) {
      setUsers(data.users);
      setUserCounts(data.userCounts);
    } else {
      toast.error(message);
      setUserCounts(0);
      setUsers([]);
    }

    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, [page, limit, sort]);

  return (
    <div className="p-2">
      {loading ? (
        <ComponentLoader height={200} />
      ) : (
        <div>
          <div className="flex justify-between space-x-5">
            <div className="border-b flex-1">
              <span className="text-gray-500 font-bold leading-none">
                {userCount} Users Found, Showing {(page - 1) * limit + 1} to{" "}
                {page * limit}, Page: {page}
              </span>
            </div>
            <div className="flex space-x-2 items-center">
              <input
                id="searchKey"
                placeholder="Search by name, email or phone"
                type="text"
                value={searchKey}
                onChange={(e) => setSearchKey(e.target.value)}
                className="px-3 py-2 leading-tight text-gray-700 border border-gray-300 rounded appearance-none md:w-auto focus:outline-blue-600 focus:shadow-outline"
              />
              <ButtonWithLoading
                title="Search"
                className="px-1 py-0 rounded text-sm h-8 font-bold text-white bg-green-600 hover:bg-green-700"
                onClick={() => {
                  if (searchKey) {
                    setPage(1);
                  }
                  getData();
                }}
              />
            </div>

            <ButtonWithLoading
              title="Create User"
              className="p-2 rounded text-sm font-bold text-white bg-blue-600 hover:bg-blue-700"
              onClick={() => setOpenCreate(true)}
            />
          </div>
          <CreateUserModal
            open={openCreate}
            handleClose={() => setOpenCreate(!openCreate)}
            getData={getData}
          />
          <TableComponent users={users} />
          <PaginationComponent
            users={users}
            count={userCount}
            page={page}
            setPage={setPage}
          />
        </div>
      )}

      <ToastContainer />
    </div>
  );
}

export default App;
