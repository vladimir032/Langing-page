import React from 'react';
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
    const workInfoData = [
        {
            image: PickMeals,
            title: "Pick Meals",
            text: "Choose your favorite meals from our menu and enjoy a variety of options!",
        },
        {
            image: ChooseMeals,
            title: "Choose how often",
            text: "Decide how often you want your meals delivered, and we’ll take care of the rest!",
        },
        {
            image: DeliveryMeals,
            title: "Fast Deliveries",
            text: "Get your meals delivered quickly to your doorstep, fresh and ready to enjoy.",
        },
    ];

    return (
        <section className="work-section-wrapper">
            <div className="work-section-top">
                <p className="primary-subheading">Work</p>
                <h1 className="primary-heading">How it works</h1>
                <p className="primary-text">
                    Discover how our service works to make your life easier and tastier.
                </p>
            </div>

            <div className="work-section-bottom">
                {workInfoData.map((data, index) => (
                    <div className="work-section-info" key={index}>
                        <div className="info-boxes-img-container">
                            <img src={data.image} alt={data.title} />
                        </div>
                        <h2>{data.title}</h2>
                        <p>{data.text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Work;
