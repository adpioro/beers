/**
 * Single element details page component
 */

import "./Details.css"
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getBeer } from "../../service/data.service";
import LoadingComponent from "../../components/loadingComponent/loadingComponent";
import emptyBottle from "../../components/errorComponent/empty-bottle.png"
import { IconButton } from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export default function Details() {
    const [beer, setBeer] = useState(null)
    const { id: beerId } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (beerId) getBeer(beerId).then((data) => setBeer(data[0]));
    }, [beerId])

    return (
        <div className="PageCont">
            { beer ? (
                <div className="Details">
                <IconButton
                  id="BackButton"
                  onClick={() => navigate(`/`)}
                >
                  <ArrowBackIosIcon />
                </IconButton>
                <h1 className="DetailsTitle">{beer.name}</h1>
                <p className="DetailsTagline">{beer.tagline}</p>
                <div className="DetailsContainer">
                    <img className="DetailsImage" src={beer.image_url || emptyBottle} alt="" />
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
                        {beer.ingredients.malt.map((malt, index) => (
                          <li key={index}>
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
                      {beer.ingredients.hops.map((hop, index) => (
                        <li key={index}>
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