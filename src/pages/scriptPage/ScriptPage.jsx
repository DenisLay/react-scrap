import '../../components/app/App.css';
import ScrapersView from "../../views/scrapersView/ScrapersView";
import ScriptPageRouting from "../../components/routes/ScriptPageRouting";
import { useState } from "react";
import ScraperConfigView from "../../views/scraperConfigView/ScraperConfigView";


function ScriptPage() {

	const [viewIndex, setViewIndex] = useState(0);
	const [currentScraperId, setCurrentScraperId] = useState(0);
	const views = [
		{
			id: 0,
			view: <ScrapersView back={() => setViewIndex(0)} next={(id) => { navigateToScraperConfig(id) }}/>
		},
		{
			id: 1,
			view: <ScraperConfigView back={() => setViewIndex(0)} currentScraperId={currentScraperId}/>
		}
	];

	const navigateToScraperConfig = (id) => {
		setViewIndex(1);
		setCurrentScraperId(id);
	}

	return (
		<div className='app-body' style={{'padding-top': '20px'}}>
			{
				views.map(viewItem => {
					if (viewIndex === viewItem.id) return viewItem.view;
				})
			}
		</div>
	);
}

export default ScriptPage;
