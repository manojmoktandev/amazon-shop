import React from 'react';
import "./../css/Home.css";
import Product from './Product';

const Home = () => {
    return (
        <div className="home">
            <img src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/gateway/placement/launch/TheGentlemen/GENTL_2020_GWBleedingHero_FT_COVIDUPDATE_XSite_1500X600_PV_en-GB._CB404268992_.jpg" className="home__image" alt="Prime Video" />
            {/* Products */}
            <div className="home__row">
                <Product id="123456" title="Prime Day Live with Lewis Capaldi 9th Oct 7pm"
                    price={25.49}
                    rating={2}
                    image="https://images-eu.ssl-images-amazon.com/images/G/02/UK-hq/2020/img/X_Site/PD20_GW_HP_LU/Prime_Day_Gateway_Banner_379_x_304_v2._SY304_CB403273936_.jpg"
                />
                <Product id="123456" title="Rock Scene: Playlist"
                        price={25.49}
                        rating={4}
                        image="https://images-eu.ssl-images-amazon.com/images/G/02/AmazonMusic/2020/WeeklyBuild/100220/100220_UK_RockScene_OS_GW_EG_CategoryCard_D_379x304._SY304_CB402948609_.jpg"
                />
            </div>
            <div className="home__row">
                <Product id="1" title="Shop small businesses, get £10 on Prime Day"
                        price={25.49}
                        rating={3}
                        image="https://images-eu.ssl-images-amazon.com/images/G/02/UK-hq/2020/img/X_Site/PD20_GW_HP_LU/SB_PD2020_Desktop_Card_FINAL_1x._SY304_CB404729838_.jpg"
                />
                <Product id="2" title="AmazonBasics"
                        price={25.49}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
                />

                <Product id="3" title="Electronics"
                        price={25.49}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg"
                    />
            </div>
            <div className="home__row">
                <Product id="4" title="Electronics"
                        price={25.49}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg"
                />
                <Product id="5" title="Electronics"
                        price={25.49}
                        rating={2}
                        image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg"
                    />
            </div>
        </div>
    )
}

export default Home;
