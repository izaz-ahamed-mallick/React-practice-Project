import { useState } from "react";
import { useGetAllCoin } from "../hooks/CryptoData";
import CoinTable from "./CoinTable";
import { allCoin } from "../Api/api.function/getCryptoData";

type eventHandler = React.ChangeEvent<HTMLInputElement>;
type fromHandler = React.FormEvent<HTMLFormElement>;

const Home: React.FC = () => {
    const { data, isError, isLoading, refetch } = useGetAllCoin();

    const [searchValue, setSearchValue] = useState<string>("");
    const [filterValue, setFiltervalue] = useState<allCoin[] | undefined>();

    const inputHandler = (e: eventHandler) => {
        setSearchValue(e.target.value);
        if (e.target.value.trim().length === 0) {
            setFiltervalue(data);
        }
    };

    const handleSearch = (e: fromHandler) => {
        e.preventDefault();
        if (searchValue && searchValue.trim()?.length > 0) {
            const filterData = data?.filter((item) =>
                item.name.toLowerCase().includes(searchValue.toLowerCase())
            );
            setFiltervalue(filterData);
        }
    };

    const handleRefresh = () => {
        console.log("call refetch");

        refetch();
        console.log("call refetch after");
        setSearchValue("");
    };
    if (isLoading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="loader">Loading...</div>
            </div>
        );
    }

    if (isError) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <p className="text-red-500">
                    Error fetching data, please try again later.
                </p>
            </div>
        );
    }

    return (
        <div className="min-h-screen w-full relative">
            <div className="text-center  flex justify-start items-center w-1/2 mt-14  mx-auto flex-col">
                <h1 className="text-5xl font-bold">
                    Largest <br /> Crypto Marketplace
                </h1>

                <div className="bg-white w-3/4 p-2 rounded-xl mt-6 ">
                    <form
                        onSubmit={handleSearch}
                        action=""
                        className="flex items-center   "
                    >
                        <input
                            list="coinlist"
                            value={searchValue}
                            onChange={inputHandler}
                            className="border-none flex-1 outline-none text-black "
                            type="text"
                            placeholder="Search crypto.."
                            required
                        />
                        {data && (
                            <datalist id="coinlist">
                                {data.map((item, index) => (
                                    <option key={index}>{item.name}</option>
                                ))}
                            </datalist>
                        )}
                        <button className="bg-purple-600 px-3 py-1 rounded-lg">
                            Search
                        </button>
                    </form>
                </div>
                <div className=" w-full flex justify-end">
                    <button
                        onClick={handleRefresh}
                        className=" px-4 py-1 bg-green-500 text-white rounded-lg hover:bg-green-600"
                    >
                        Refresh
                    </button>
                </div>
                <CoinTable coins={filterValue?.length ? filterValue : data} />
            </div>
        </div>
    );
};

export default Home;
