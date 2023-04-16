/**
 * Single element details page component
 */

import "./Details.css"
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBeer } from "../../service/data.service";
import LoadingComponent from "../../components/loadingComponent/loadingComponent";

export default function Details() {
    const [beer, setBeer] = useState(null)
    const { id: beerId } = useParams()

    useEffect(() => {
        if (beerId) getBeer(beerId).then((data) => setBeer(data[0]));
    }, [beerId])

    return (
        <div className="PageCont">
            { beer ? (
                <div className="Details">
                <h1 className="DetailsTitle">{beer.name}</h1>
                <p className="DetailsTagline">{beer.tagline}</p>
                <div className="DetailsContainer">
                    <img className="DetailsImage" src={beer.image_url} alt="" />
                    <div className="DetailsTexts">
                      <p className="DetailsDesc">{beer.description}</p>
                      <p className="DetailsAbv">ABV: <b>{beer.abv}</b></p>
                      <p className="DetailsIbu">IBU: <b>{beer.ibu}</b></p>
                    </div>
                </div>
                <div className="DetailsIngredientsContainer">
                    <div>
                      <h3 className="DetailsIngredients">Malts</h3>
                      <ul>
                        {beer.ingredients.malt.map((malt) => (
                          <li key={malt.name}>
                            <h5 className="IngredientName">{malt.name}</h5>
                            <p className="IngredientPar">
                              Amount: {malt.amount.value} {malt.amount.unit}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  <div>
                    <h3 className="DetailsIngredients">Hops</h3>
                    <ul>
                      {beer.ingredients.hops.map((hop) => (
                        <li>
                          <h5 className="IngredientName">{hop.name}</h5>
                          <p className="IngredientPar">
                            Amount: {hop.amount.value} {hop.amount.unit}
                            <br />
                            Add: {hop.add}
                            <br />
                            Attribute: {hop.attribute}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="DetailsIngredients">Yeast</h3>
                    <p className="IngredientName">{beer.ingredients.yeast}</p>
                  </div>
                </div>
              </div>
            ) : (
                <LoadingComponent />
            )}
        </div>
    )

}