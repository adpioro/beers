/**
 * Grid component containing name, image and tagline of element
 */

import "./beersGridComponent.css";
import { Suspense } from "react";
import LoadingComponent from "../loadingComponent/loadingComponent";
import emptyBottle from "../errorComponent/empty-bottle.png";

export default function BeerComponent({
	beer: { id, name, image_url, tagline },
}) {
	return (
		<Suspense fallback={<LoadingComponent />}>
			<div className="beerComponent">
				<a href={`details/${id}`}>
					<img
						className="beerComponentImage"
						src={image_url || emptyBottle}
						alt="bottle"
					/>
					<h3 className="beerComponentName">{name}</h3>
					<p className="beerComponentTagline">{tagline}</p>
				</a>
			</div>
		</Suspense>
	);
}
