import React, { useState } from "react";
import { allCoin } from "../Api/api.function/getCryptoData";
import Modal from "./Modal";

type coinsProps = {
    coins: allCoin[] | undefined;
};

const CoinTable: React.FC<coinsProps> = ({ coins }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [coinId, setCoinId] = useState<string>("");

    const handleOpenModal = (id: string) => {
        setIsOpen(true);
        setCoinId(id);
    };

    const handleOnClose = () => {
        setIsOpen(false);
    };

    return (
        <div className="w-full max-w-[800px] mx-auto mt-5 rounded-lg shadow-lg overflow-hidden">
            <div className="overflow-y-auto max-h-[400px]">
                <table className="w-full text-left table-auto border-collapse">
                    <thead className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                        <tr>
                            <th className="py-3 px-4 sticky top-0 z-10 bg-gradient-to-r from-purple-500 to-pink-500">
                                Rank
                            </th>
                            <th className="py-3 px-4 sticky top-0 z-10 bg-gradient-to-r from-purple-500 to-pink-500">
                                Coins
                            </th>
                            <th className="py-3 px-4 sticky top-0 z-10 bg-gradient-to-r from-purple-500 to-pink-500">
                                Symbol
                            </th>
                            <th className="py-3 px-4 sticky top-0 z-10 bg-gradient-to-r from-purple-500 to-pink-500">
                                Price
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {coins?.map((coin) => (
                            <tr
                                onClick={() => handleOpenModal(coin.id)}
                                key={coin.id}
                                className="hover:bg-gray-100 transition-colors cursor-pointer"
                            >
                                <td className="py-3 px-4">{coin.rank}</td>
                                <td className="py-3 px-4">{coin.name}</td>
                                <td className="py-3 px-4">{coin.symbol}</td>
                                <td className="py-3 px-4">
                                    ${parseFloat(coin.priceUsd).toFixed(2)}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Modal coinId={coinId} isOpen={isOpen} onClose={handleOnClose} />
        </div>
    );
};

export default CoinTable;
