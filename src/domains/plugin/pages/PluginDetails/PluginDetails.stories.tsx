import { boolean, withKnobs } from "@storybook/addon-knobs";
import React from "react";

import { comments } from "../../data";
import { PluginDetails } from "./PluginDetails";

export default { title: "Domains / Plugin / Pages / PluginDetails", decorators: [withKnobs] };

const ratings = [
	{
		rating: 5,
		votes: 156,
	},
	{
		rating: 4,
		votes: 194,
	},
	{
		rating: 3,
		votes: 25,
	},
	{
		rating: 2,
		votes: 42,
	},
	{
		rating: 1,
		votes: 7,
	},
];

const pluginData = {
	author: "ARK Ecosystem",
	about:
		"Use the ARK Explorer to get full visibility of critical data from the ARK network. Data such as the latest blocks, wallet addresses and transactions. Plus monitor delegate status, their position and more.",
	permissions: ["Embedded Webpages", "API Requests", "Access to Profiles"],
	screenshots: [1, 2, 3],
	category: "Utility",
	url: "github.com",
	averageRating: "4.6",
	version: "1.3.8",
	size: "4.2",
};

const reviewData = {
	comments,
	ratings,
	totalAvaliations: 347,
};

const isInstalled = boolean("Is Installed?", false);

export const Default = () => (
	<PluginDetails pluginData={pluginData} reviewData={reviewData} isInstalled={isInstalled} />
);