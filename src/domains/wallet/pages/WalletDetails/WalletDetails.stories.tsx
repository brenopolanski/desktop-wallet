import React from "react";

import { WalletDetails } from "./WalletDetails";

export default { title: "Domains / Wallet / Pages / WalletDetails" };

const wallets = [
	{
		coinIcon: "Ark",
		coinClassName: "text-theme-danger-400 border-theme-danger-200",
		avatarId: "test1",
		address: "ASuusXSW9kfWnicScSgUTjttP6T9GQ3kqT",
		publicKey: "028fe98e42e159f2450a52371dfb23ae69a39fc5fee6545690b7f51bfcee933357",
		walletName: "ARK Wallet 1",
		balance: "120 ARK",
		fiat: "980 USD",
		walletTypeIcons: ["Multisig", "Ledger", "Key", "Bridgechain"],
		actions: [
			{
				label: "Action 1",
				value: "1",
			},
			{
				label: "Action 2",
				value: "2",
			},
			{
				label: "Action 3",
				value: "3",
			},
		],
		delegates: [
			{
				username: "Delegate 3",
				address: "AbuzhuDTyhnfAqepZzVcVsgd1Ym6FgETuW",
				rank: 1,
				explorerUrl: "https://dexplorer.ark.io",
				msqUrl: "https://marketsquare.ark.io",
				isActive: true,
			},
		],
		business: {
			name: "ROBank Eco",
		},
		pendingTransactions: [
			{
				id: "ee4175091d9f4dacf5fed213711c3e0e4cc371e37afa7bce0429d09bcf3ecefe",
				confirmations: "100",
				timestamp: "17 Mar 2020 10:22:05",
				type: "transfer",
				sender: "ASuusXSW9kfWnicScSgUTjttP6T9GQ3kqT",
				recipient: "ASuusXSW9kfWnicScSgUTjttP6T9GQ3kqT",
				amount: "52",
				fee: "0.2",
				vendorField: "Test",
				isSent: true,
				isMultiSignature: true,
				isSignaturePending: true,
			},
		],
		transactions: [
			{
				id: "ee4175091d9f4dacf5fed213711c3e0e4cc371e37afa7bce0429d09bcf3ecefe",
				confirmations: "100",
				timestamp: "17 Mar 2020 10:22:05",
				type: "delegateRegistration",
				sender: "ASuusXSW9kfWnicScSgUTjttP6T9GQ3kqT",
				recipient: "ASuusXSW9kfWnicScSgUTjttP6T9GQ3kqT",
				amount: "0",
				fee: "0.1",
				isSent: true,
			},
			{
				id: "ee4175091d9f4dacf5fed213711c3e0e4cc371e37afa7bce0429d09bcf3ecefe",
				confirmations: "100",
				timestamp: "17 Mar 2020 10:22:05",
				type: "secondSignature",
				sender: "ASuusXSW9kfWnicScSgUTjttP6T9GQ3kqT",
				recipient: "ASuusXSW9kfWnicScSgUTjttP6T9GQ3kqT",
				amount: "0",
				fee: "0.1",
				isSent: true,
			},
			{
				id: "ee4175091d9f4dacf5fed213711c3e0e4cc371e37afa7bce0429d09bcf3ecefe",
				confirmations: "100",
				timestamp: "17 Mar 2020 10:22:05",
				type: "businessRegistration",
				sender: "ASuusXSW9kfWnicScSgUTjttP6T9GQ3kqT",
				recipient: "ASuusXSW9kfWnicScSgUTjttP6T9GQ3kqT",
				amount: "0",
				fee: "0.1",
				isSent: true,
			},
		],
		hasStarred: true,
	},
];

const wallet = wallets[0];

export const Default = () => <WalletDetails wallets={wallets} wallet={wallet} />;
