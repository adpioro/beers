import "./errorComponent.css";
import emptyBottle from "./empty-bottle.png";

export default function ErrorComponent() {
	return (
		<div id="ErrorPage">
			<p className="ErrorText">
				Oops! The bottle is empty!
				<br />
				Try following:
			</p>
			<ul>
				<li>"/" to get the grid of beers</li>
				<li>"/details/:beerId" to jump to specific flavour</li>
			</ul>
			<img id="ErrorBottle" src={emptyBottle} alt="empty bottle" />
		</div>
	);
}
