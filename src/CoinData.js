import React from "react";

const CoinData = ({ data }) => {
  const { detail } = data;
  if (detail) {
    return (
      <>
        <div className="coindata">
          <div className="row">
            <div className="col-sm-4 col-xs-12">
              <div className="coindata-cards">
                <div className="coindata-cards_background">
                  <div className="coindata-cards_content">
                    <div className="coindata-cards_img coindata-cards_img--oz">
                      Market Cap:
                      <p>{detail.market_cap}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-4 col-xs-12">
              <div className="coindata-cards">
                <div className="coindata-cards_background">
                  <div className="coindata-cards_content">
                    <div className="coindata-cards_img coindata-cards_img--oz">
                      24h Low / 24h High:
                      <p>
                        ${detail.low_24h} / ${detail.high_24h}{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-4 col-xs-12">
              <div className="coindata-cards">
                <div className="coindata-cards_background">
                  <div className="coindata-cards_content">
                    <div className="coindata-cards_img coindata-cards_img--oz">
                      Circulating Supply:
                      <p>{detail.circulating_supply}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default CoinData;
