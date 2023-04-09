'use client';

import React from 'react';
import Banner from '../components/home/sections/Banner';
import KeyFeature from '../components/home/sections/KeyFeature';
import ServiceSection from '../components/home/sections/ServiceSection';
import Feature from '../components/home/sections/Feature';
import CoreFeature from '../components/home/sections/CoreFeature';
import WorkFlow from '../components/home/sections/Workflow';
import Package from '../components/home/sections/Package';
import TeamSection from '../components/home/sections/TeamSection';
import TestimonialCard from '../components/home/sections/Testimonial';
import BlogSection from '../components/home/sections/BlogSection';
import Subscribe from '../components/home/sections/Subscribe';

export default function IndexPage() {
  return (
    <>
        <Banner />
        <KeyFeature />
        <ServiceSection />
        <Feature />
        <CoreFeature />
        <WorkFlow />
        <Package />
        <TeamSection />
        <TestimonialCard />
        <BlogSection />
        <Subscribe />
    </>
  );
}
