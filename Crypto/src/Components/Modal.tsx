import React, { useEffect, useState } from "react";
import { useGetCoinDetails } from "../hooks/CryptoData";

type modalProps = {
    coinId: string;
    isOpen: boolean;
    onClose: () => void;
};

type CoinDetails = {
    name: string;
    symbol: string;
    rank: string;
    priceUsd: string;
    marketCapUsd: string;
    supply: string;
    volumeUsd24Hr: string;
    vwap24Hr: string;
    changePercent24Hr: string;
    explorer: string;
};

const Modal: React.FC<modalProps> = ({ isOpen, onClose, coinId }) => {
    const { data, isError, isLoading } = useGetCoinDetails(coinId);
    const [detailsData, setDetailsData] = useState<CoinDetails | null>(null);
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        if (data) {
            localStorage.setItem("coinDetails", JSON.stringify(data));
            setDetailsData(data);
        }
    }, [data]);

    useEffect(() => {
        const storedData = localStorage.getItem("coinDetails");
        if (storedData) {
            setDetailsData(JSON.parse(storedData));
        }
        return () => {
            localStorage.removeItem("coinDetails");
        };
    }, []);

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        key: keyof CoinDetails
    ) => {
        if (detailsData) {
            const updatedDetails = { ...detailsData, [key]: e.target.value };
            setDetailsData(updatedDetails);
        }
    };

    const handleSave = () => {
        if (detailsData) {
            localStorage.setItem("coinDetails", JSON.stringify(detailsData));
            setIsEditing(false);
        }
    };
    const handleClose = () => {
        onClose();
        setIsEditing(false);
    };

    if (!isOpen) return null;
    if (isLoading) return <>Loading...</>;
    if (isError) return <>Error in data fetching....</>;

    return (
        detailsData && (
            <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
                <div className="bg-white rounded-xl shadow-xl w-11/12 max-w-2xl mx-auto p-8 relative">
                    <button
                        onClick={handleClose}
                        className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                        &times;
                    </button>
                    <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800">
                        {isEditing ? (
                            <input
                                type="text"
                                value={detailsData.name}
                                onChange={(e) => handleInputChange(e, "name")}
                                className="text-2xl font-semibold w-full p-2 border rounded"
                            />
                        ) : (
                            <>
                                {detailsData.name}{" "}
                                <span className="text-gray-500">
                                    ({detailsData.symbol})
                                </span>
                            </>
                        )}
                    </h2>
                    <div className="grid grid-cols-2 gap-6">
                        <div className="flex flex-col">
                            <span className="font-semibold text-gray-600">
                                Rank:
                            </span>
                            {isEditing ? (
                                <input
                                    type="number"
                                    value={detailsData.rank}
                                    onChange={(e) =>
                                        handleInputChange(e, "rank")
                                    }
                                    className="p-2 border rounded"
                                />
                            ) : (
                                <span className="text-gray-800">
                                    {detailsData.rank}
                                </span>
                            )}
                        </div>
                        <div className="flex flex-col">
                            <span className="font-semibold text-gray-600">
                                Price (USD):
                            </span>
                            {isEditing ? (
                                <input
                                    type="text"
                                    value={detailsData.priceUsd}
                                    onChange={(e) =>
                                        handleInputChange(e, "priceUsd")
                                    }
                                    className="p-2 border rounded"
                                />
                            ) : (
                                <span className="text-gray-800">
                                    $
                                    {parseFloat(detailsData.priceUsd).toFixed(
                                        4
                                    )}
                                </span>
                            )}
                        </div>
                    </div>

                    <div className="mt-6 flex justify-end">
                        {isEditing ? (
                            <button
                                onClick={handleSave}
                                className="bg-green-500 text-white px-4 py-2 rounded mr-2"
                            >
                                Save
                            </button>
                        ) : (
                            <button
                                onClick={() => setIsEditing(true)}
                                className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
                            >
                                Edit
                            </button>
                        )}
                        <button
                            onClick={handleClose}
                            className="bg-gray-500 text-white px-4 py-2 rounded"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        )
    );
};

export default Modal;
