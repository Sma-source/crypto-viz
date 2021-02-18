import React from "react";

const CoinData = ({ data }) => {
  const { detail } = data;

  function getNumber(num) {
    const units = ["M", "B", "T", "Q"];
    const unit = Math.floor((num / 1.0e1).toFixed(0).toString().length);
    const r = unit % 3;
    const x = Math.abs(Number(num)) / Number("1.0e+" + (unit - r)).toFixed(2);
    return x.toFixed(2) + units[Math.floor(unit / 3) - 2];
  }
  if (detail) {
    return (
      <>
        <div className="container">
          <div className="content">
            <div className="row">
              <div className="col-sm-6 coindata">
                <div className="panel">
                  <div className="panel-header">
                    <h4>Title</h4>
                  </div>
                  <div className="content">
                    <div className="form">
                      <div className="calculation">
                        <span className="description">texte</span>
                        <span className="value">Number</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 coindata">
                <div className="panel">
                  <div className="panel-header">
                    <h4>Détails</h4>
                  </div>
                  <div className="content">
                    <div className="form">
                      <div className="calculation">
                        <span className="description">Prix</span>
                        <span className="value">${detail.current_price} </span>
                      </div>
                      <div className="calculation">
                        <span className="description">
                          Capitalisation boursière
                        </span>
                        <span className="value">
                          ${getNumber(detail.market_cap)}{" "}
                        </span>
                      </div>
                      <div className="calculation">
                        <span className="description">Volume total</span>
                        <span className="value">
                          ${getNumber(detail.total_volume)}{" "}
                        </span>
                      </div>
                      <div className="calculation">
                        <span className="description">
                          Approvisionnement en circulation
                        </span>
                        <span className="value">
                          {getNumber(detail.circulating_supply)} &nbsp;
                          {detail.symbol}
                        </span>
                      </div>
                      <div className="calculation">
                        <span className="description">Le plus haut 24h</span>
                        <span className="value">${detail.high_24h} </span>
                      </div>
                      <div className="calculation">
                        <span className="description">Le plus bas 24h</span>
                        <span className="value">${detail.low_24h} </span>
                      </div>
                      <div className="calculation">
                        <span className="description">
                          Valeur historique haute
                        </span>
                        <span className="value">${detail.ath} </span>
                      </div>
                      <div className="calculation">
                        <span className="description">
                          Valeur historique basse
                        </span>
                        <span className="value">${detail.atl} </span>
                      </div>
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
