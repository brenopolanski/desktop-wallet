import { snakeCase } from "@arkecosystem/utils";
import { images } from "app/assets/images";
import { Button } from "app/components/Button";
import { Header } from "app/components/Header";
import { HeaderSearchBar } from "app/components/Header/HeaderSearchBar";
import { Icon } from "app/components/Icon";
import { BestPlugins } from "domains/plugin/components/BestPlugins";
import { FeaturedPlugins } from "domains/plugin/components/FeaturedPlugins";
import { InstallPlugin } from "domains/plugin/components/InstallPlugin";
import { PluginGrid } from "domains/plugin/components/PluginGrid";
import { PluginList } from "domains/plugin/components/PluginList";
import { PluginManagerControls } from "domains/plugin/components/PluginManagerControls";
import { PluginManagerNavigationBar } from "domains/plugin/components/PluginManagerNavigationBar";
import React from "react";
import { useTranslation } from "react-i18next";

type PluginManagerHomeProps = {
	onDelete: any;
	onInstall: any;
	viewType: string;
};

const { PluginManagerHomeBanner } = images.plugin.pages.PluginManager;

const PluginManagerHome = ({ onDelete, onInstall, viewType }: PluginManagerHomeProps) => {
	const { t } = useTranslation();
	const [featuredModalOpen, setFeaturedModalOpen] = React.useState(false);
	const [bestModalOpen, setBestModalOpen] = React.useState(false);

	const plugins = [];
	for (let i = 0; i < 4; i++) {
		plugins.push(
			{
				id: `ark-explorer-${i}`,
				name: "ARK Explorer",
				author: "ARK.io",
				category: "utility",
				rating: 4.2,
				version: "1.3.8",
				size: "4.2 MB",
				isInstalled: false,
				isOfficial: true,
			},
			{
				id: `ark-avatars-${i}`,
				name: "ARK Avatars",
				author: "ARK.io",
				category: "other",
				rating: 3.8,
				version: "1.3.8",
				size: "163 KB",
				isInstalled: true,
				isGrant: true,
			},
		);
	}

	return (
		<div>
			<PluginManagerHomeBanner className="w-full mt-8" height="auto" />
			<FeaturedPlugins isOpen={featuredModalOpen} onClose={() => setFeaturedModalOpen(false)} />
			<BestPlugins isOpen={bestModalOpen} onClose={() => setBestModalOpen(false)} />

			<div data-testid="PluginManager__home__featured">
				<div className="flex items-center justify-between mt-8 mb-6">
					<h2>{t("PLUGINS.PAGE_PLUGIN_MANAGER.FEATURED_PLUGINS")}</h2>

					<span
						data-testid="PluginManager__home__featured__view-more"
						onClick={() => setFeaturedModalOpen(true)}
						className="font-semibold cursor-pointer link"
					>
						{t("COMMON.VIEW_MORE")}
					</span>
				</div>
				{viewType === "grid" && (
					<PluginGrid
						plugins={plugins}
						onSelect={() => console.log("selected")}
						onDelete={onDelete}
						withPagination={false}
					/>
				)}
				{viewType === "list" && (
					<PluginList plugins={plugins} onInstall={onInstall} onDelete={onDelete} withPagination={false} />
				)}
			</div>

			<div data-testid="PluginManager__home__top-rated">
				<div className="flex items-center justify-between mt-8 mb-6">
					<h2>{t("PLUGINS.PAGE_PLUGIN_MANAGER.TOP_RATED")}</h2>

					<span
						data-testid="PluginManager__home__top-rated__view-more"
						onClick={() => setBestModalOpen(true)}
						className="font-semibold cursor-pointer link"
					>
						{t("COMMON.VIEW_MORE")}
					</span>
				</div>
				{viewType === "grid" && (
					<PluginGrid
						plugins={plugins}
						onSelect={() => console.log("selected")}
						onDelete={onDelete}
						withPagination={false}
					/>
				)}
				{viewType === "list" && (
					<PluginList plugins={plugins} onInstall={onInstall} onDelete={onDelete} withPagination={false} />
				)}
			</div>

			<div data-testid="PluginManager__home__top-utilities">
				<h2 className="mt-8 mb-6">{t("PLUGINS.PAGE_PLUGIN_MANAGER.TOP_UTILITIES")}</h2>
				{viewType === "grid" && (
					<PluginGrid
						plugins={plugins}
						onSelect={() => console.log("selected")}
						onDelete={onDelete}
						withPagination={false}
					/>
				)}
				{viewType === "list" && (
					<PluginList plugins={plugins} onInstall={onInstall} onDelete={onDelete} withPagination={false} />
				)}
			</div>
		</div>
	);
};

export const PluginManager = () => {
	const { t } = useTranslation();
	const [currentView, setCurrentView] = React.useState("home");
	const [viewType, setViewType] = React.useState("grid");
	const [installPlugin, setInstallPlugin] = React.useState(false);

	const plugins = [];
	for (let i = 0; i < 10; i++) {
		plugins.push(
			{
				id: `ark-explorer-${i}`,
				name: "ARK Explorer",
				author: "ARK.io",
				category: "utility",
				rating: 4.2,
				version: "1.3.8",
				size: "4.2 MB",
				isInstalled: false,
				isOfficial: true,
			},
			{
				id: `ark-avatars-${i}`,
				name: "ARK Avatars",
				author: "ARK.io",
				category: "other",
				rating: 3.8,
				version: "1.3.8",
				size: "163 KB",
				isInstalled: true,
				isGrant: true,
			},
		);
	}

	return (
		<div data-testid="PluginManager">
			<InstallPlugin
				isOpen={installPlugin}
				onClose={() => setInstallPlugin(false)}
				onCancel={() => setInstallPlugin(false)}
			/>

			<div className="border-t-20 border-theme-neutral-100">
				<div className="container py-16 mx-auto bg-theme-background">
					<Header
						title={t("PLUGINS.PAGE_PLUGIN_MANAGER.TITLE")}
						subtitle={t("PLUGINS.PAGE_PLUGIN_MANAGER.DESCRIPTION")}
						extra={
							<div className="flex justify-end items-top">
								<HeaderSearchBar label="" onSearch={() => console.log("search")} />
								<div className="h-8 pl-8 my-auto ml-8 border-l border-theme-neutral-200" />
								<Button>
									<div className="flex items-center whitespace-no-wrap space-x-2">
										<Icon name="File" width={15} height={15} />
										<span>Install File</span>
									</div>
								</Button>
							</div>
						}
					/>
				</div>
			</div>

			<PluginManagerNavigationBar selected={currentView} onChange={setCurrentView} />

			<div data-testid={`PluginManager__container--${currentView}`} className="container mx-auto mt-16">
				<div className="flex items-center justify-between">
					<h2>{t(`PLUGINS.PAGE_PLUGIN_MANAGER.VIEW.${snakeCase(currentView)?.toUpperCase()}`)}</h2>

					<PluginManagerControls
						onSelectGridView={() => setViewType("grid")}
						onSelectListView={() => setViewType("list")}
						selectedViewType={viewType}
					/>
				</div>

				{currentView === "home" && (
					<PluginManagerHome
						viewType={viewType}
						onInstall={() => setInstallPlugin(true)}
						onDelete={() => console.log("delete")}
					/>
				)}
				{currentView !== "home" && viewType === "grid" && (
					<PluginGrid
						plugins={plugins}
						onSelect={() => console.log("selected")}
						onDelete={() => console.log("delete")}
						className="mt-6"
					/>
				)}
				{currentView !== "home" && viewType === "list" && (
					<PluginList
						plugins={plugins}
						onInstall={() => setInstallPlugin(true)}
						onDelete={() => console.log("delete")}
						className="mt-6"
					/>
				)}
			</div>
		</div>
	);
};