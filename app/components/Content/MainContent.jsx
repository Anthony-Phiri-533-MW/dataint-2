import React from 'react'
import { FeaturedContent } from "./FeaturedContent"; 

const MainContent = () => {
    return (
        <div className='text-center' data-testid="main-content">
            <div className='pb-16'>
                <section>
                    <h2 className='text-3xl font-bold'>Unlock the Power of Data-Driven Innovation </h2>
                </section>

                <section>
                    <p className='text-lg'>These are the services we offer</p>
                </section>
            </div>

            <div className='lg:flex space-x-4 md:grid md:grid-cols-2'>
                <FeaturedContent title={"Predictive Modeling & Machine Learning"} content={"We develop and deploy custom machine learning models for tasks like forecasting, optimization, and recommendation and Integrate these models into software applications "}/>
                <FeaturedContent title={"Data Acquisition & Processing"} content={"We assist in collecting data from various sources (internal databases, web scraping, sensors) and also in cleaning, transforming, and preparing data for analysis  "}/>
                <FeaturedContent title={"Data-Driven software Development"} content={"We build custom web and mobile applications that leverage data analysis and visualization to provide users with valuable insights and seamless integration with data storage solutions   "}/>
                <FeaturedContent title={"Big Data Engineering & Infrastructure"} content={"Our team designs and implements scalable data pipelines to handle large and complex datasets efficiently,building and managing big data infrastructure for distributed dataprocessing  "}/>
            </div>
        </div>
    )
}

export default MainContent